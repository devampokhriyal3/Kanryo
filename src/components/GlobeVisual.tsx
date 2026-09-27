"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { motion, useReducedMotion } from "framer-motion";

const BLUE = 0x1677ff;
const BLUE_DEEP = 0x0b3b78;

/** Even distribution of N points on a unit sphere. */
function fibonacciSphere(samples: number, radius: number) {
  const points: THREE.Vector3[] = [];
  const offset = 2 / samples;
  const increment = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < samples; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const phi = i * increment;
    const x = Math.cos(phi) * r;
    const z = Math.sin(phi) * r;
    points.push(new THREE.Vector3(x * radius, y * radius, z * radius));
  }
  return points;
}

/** Soft round sprite so points read as glowing dots rather than hard squares. */
function dotTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.35, "rgba(150,200,255,0.9)");
  grad.addColorStop(1, "rgba(22,119,255,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

type Arc = {
  curve: THREE.CatmullRomCurve3;
  speed: number;
  phase: number;
};

export function GlobeVisual() {
  const mountRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const radius = 1.4;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.15, 4.3);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const globe = new THREE.Group();
    globe.rotation.x = 0.25;
    scene.add(globe);

    // Wireframe sphere shell
    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(radius, 3),
      new THREE.MeshBasicMaterial({
        color: BLUE_DEEP,
        wireframe: true,
        transparent: true,
        opacity: 0.14,
      })
    );
    globe.add(wire);

    // A faint inner glow sphere so the globe reads as solid, not just lines
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(radius * 0.985, 48, 48),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.05 })
    );
    globe.add(core);

    // Dotted surface points
    const dotCount = 560;
    const dotPositions = fibonacciSphere(dotCount, radius * 1.01);
    const dotGeo = new THREE.BufferGeometry().setFromPoints(dotPositions);
    const sprite = dotTexture();
    const dotMat = new THREE.PointsMaterial({
      size: 0.045,
      map: sprite,
      transparent: true,
      opacity: 0.85,
      color: BLUE,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    globe.add(new THREE.Points(dotGeo, dotMat));

    // Glowing arcs between a handful of "hub" points on the surface
    const hubs = fibonacciSphere(11, radius);
    const arcPairs = [
      [0, 3],
      [1, 5],
      [2, 7],
      [3, 8],
      [4, 9],
      [5, 10],
      [6, 1],
      [7, 2],
    ];
    const arcs: Arc[] = [];
    const arcGroup = new THREE.Group();
    arcPairs.forEach(([a, b], i) => {
      const start = hubs[a];
      const end = hubs[b];
      const mid = start.clone().add(end).normalize().multiplyScalar(radius * 1.55);
      const curve = new THREE.CatmullRomCurve3([start, mid, end]);
      const tube = new THREE.TubeGeometry(curve, 48, 0.006, 6, false);
      const mat = new THREE.MeshBasicMaterial({
        color: BLUE,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      arcGroup.add(new THREE.Mesh(tube, mat));

      // Traveling pulse along the arc
      const pulse = new THREE.Mesh(
        new THREE.SphereGeometry(0.022, 12, 12),
        new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, blending: THREE.AdditiveBlending })
      );
      arcGroup.add(pulse);
      arcs.push({ curve, speed: 0.12 + (i % 4) * 0.03, phase: i * 0.6 });
      (pulse as unknown as { userData: { arcIndex: number } }).userData = { arcIndex: i };
    });
    globe.add(arcGroup);

    // Resize handling
    function resize() {
      if (!mount) return;
      const { clientWidth, clientHeight } = mount;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    // Gentle mouse parallax
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    function onMove(e: MouseEvent) {
      if (!mount) return;
      const r = mount.getBoundingClientRect();
      target.x = ((e.clientX - r.left) / r.width - 0.5) * 0.6;
      target.y = ((e.clientY - r.top) / r.height - 0.5) * 0.4;
    }
    if (!reduce) window.addEventListener("mousemove", onMove);

    let raf = 0;
    const clock = new THREE.Clock();
    function tick() {
      const t = clock.getElapsedTime();
      if (!reduce) {
        globe.rotation.y += 0.0022;
        current.x += (target.x - current.x) * 0.04;
        current.y += (target.y - current.y) * 0.04;
        globe.rotation.y += current.x * 0.01;
        globe.rotation.x = 0.25 + current.y * 0.15;

        arcGroup.children.forEach((child) => {
          const data = (child as unknown as { userData?: { arcIndex: number } }).userData;
          if (data && typeof data.arcIndex === "number") {
            const arc = arcs[data.arcIndex];
            const p = (Math.sin(t * arc.speed + arc.phase) + 1) / 2;
            const point = arc.curve.getPoint(p);
            (child as THREE.Mesh).position.copy(point);
            const mat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
            mat.opacity = 0.15 + Math.sin(p * Math.PI) * 0.85;
          }
        });
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      mount?.removeChild(renderer.domElement);
      sprite.dispose();
      dotGeo.dispose();
      dotMat.dispose();
      wire.geometry.dispose();
      (wire.material as THREE.Material).dispose();
      core.geometry.dispose();
      (core.material as THREE.Material).dispose();
      arcGroup.children.forEach((child) => {
        const mesh = child as THREE.Mesh;
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      });
      renderer.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  return (
    <div className="relative mx-auto aspect-[1.02/1] w-full max-w-[560px]">
      <div className="orb absolute left-[12%] top-[8%] h-52 w-52 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff,transparent_55%),radial-gradient(circle_at_70%_70%,#1677FF,transparent_62%)] opacity-70 blur-2xl" />
      <div className="absolute right-[6%] top-[18%] h-36 w-36 rounded-full bg-[#D9EEFF] blur-xl" />

      <div ref={mountRef} className="absolute inset-0 z-10 [&>canvas]:h-full [&>canvas]:w-full" />

      <motion.div className="float-b absolute right-0 top-[8%] z-20 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-[0_20px_40px_-24px_rgba(11,59,120,0.4)]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Global reach</p>
        <p className="mt-1 text-lg font-semibold tracking-[-0.04em]">42 countries</p>
      </motion.div>

      <motion.div className="float-c absolute bottom-[6%] left-[2%] z-20 w-[52%] rounded-2xl border border-white/80 bg-white/95 p-3 shadow-[0_20px_40px_-24px_rgba(11,59,120,0.4)]">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Live</p>
          <span className="h-1.5 w-1.5 rounded-full bg-blue" />
        </div>
        <p className="mt-2 text-sm font-semibold leading-5">Teams shipping in every timezone.</p>
      </motion.div>
    </div>
  );
}