// import { cn } from "@/lib/cn";

// export function ShopMock() {
//   return (
//     <div className="grid h-full grid-cols-3 gap-2 p-4">
//       {[1, 2, 3, 4, 5, 6].map((n) => (
//         <div key={n} className="overflow-hidden rounded-xl bg-white">
//           <div
//             className="h-16"
//             style={{
//               background: `linear-gradient(135deg, #D9EEFF ${n * 8}%, #1677FF ${40 + n * 6}%)`,
//             }}
//           />
//           <div className="space-y-1.5 p-2">
//             <div className="h-1.5 w-3/4 rounded bg-ice" />
//             <div className="h-1.5 w-1/2 rounded bg-[#EAF5FF]" />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export function DashboardMock() {
//   return (
//     <div className="grid h-full gap-2 p-4">
//       <div className="grid grid-cols-3 gap-2">
//         {["Revenue", "Active", "NPS"].map((l, i) => (
//           <div key={l} className="rounded-xl bg-white p-2">
//             <p className="text-[9px] uppercase tracking-wider text-muted">{l}</p>
//             <p className="text-sm font-semibold">{["$2.1m", "8,420", "72"][i]}</p>
//           </div>
//         ))}
//       </div>
//       <div className="flex flex-1 items-end gap-1 rounded-xl bg-white p-3">
//         {[40, 55, 48, 70, 62, 88, 76, 94].map((h, i) => (
//           <div
//             key={i}
//             className="flex-1 rounded-t bg-gradient-to-t from-blue to-[#9ecbff]"
//             style={{ height: `${h}%` }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export function MobileMock() {
//   return (
//     <div className="flex h-full items-center justify-center p-4">
//       <div className="h-full w-[46%] rounded-[28px] border-[6px] border-white bg-[linear-gradient(180deg,#EAF5FF,#ffffff)] p-3 shadow-inner">
//         <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-ink/10" />
//         <div className="space-y-2">
//           <div className="h-16 rounded-2xl bg-white" />
//           <div className="h-8 rounded-xl bg-blue/90" />
//           <div className="h-20 rounded-2xl bg-white" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export function WebMock() {
//   return (
//     <div className="grid h-full gap-2 p-4">
//       <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2">
//         <div className="h-2 w-2 rounded-full bg-[#ff6b6b]" />
//         <div className="h-2 flex-1 rounded-full bg-ice" />
//       </div>
//       <div className="grid min-h-0 grid-cols-5 gap-2">
//         <div className="col-span-2 rounded-xl bg-white p-3">
//           <div className="h-2 w-16 rounded bg-ice" />
//           <div className="mt-4 space-y-2">
//             <div className="h-8 rounded-lg bg-blue/10" />
//             <div className="h-8 rounded-lg bg-bg" />
//             <div className="h-8 rounded-lg bg-bg" />
//           </div>
//         </div>
//         <div className="col-span-3 rounded-xl bg-white p-3">
//           <div className="mb-3 h-20 rounded-xl bg-gradient-to-br from-ice to-mist" />
//           <div className="grid grid-cols-2 gap-2">
//             <div className="h-10 rounded-lg bg-bg" />
//             <div className="h-10 rounded-lg bg-bg" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function CaseVisual({ type }: { type: "shop" | "dashboard" | "mobile" | "web" }) {
//   return (
//     <div
//       className={cn(
//         "relative h-56 overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,#EAF5FF_0%,#F7FAFC_100%)] sm:h-64",
//       )}
//     >
//       {type === "shop" ? <ShopMock /> : null}
//       {type === "dashboard" ? <DashboardMock /> : null}
//       {type === "mobile" ? <MobileMock /> : null}
//       {type === "web" ? <WebMock /> : null}
//     </div>
//   );
// }
import Image from "next/image";
import { cn } from "@/lib/cn";

const images = {
  shop: "/demo1_image.png",
  dashboard: "/demo3_image.png",
  mobile: "/demo2_image.png",
  web: "/demo4_image.png",
};

export function CaseVisual({
  type,
}: {
  type: "shop" | "dashboard" | "mobile" | "web";
}) {
  return (
    <div
      className={cn(
        "relative h-56 overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,#EAF5FF_0%,#F7FAFC_100%)] sm:h-64"
      )}
    >
      <Image
        src={images[type]}
        alt={`${type} case study`}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, 50vw"
      />
    </div>
  );
}