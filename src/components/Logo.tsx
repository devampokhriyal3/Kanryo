  import { cn } from "@/lib/cn";

  export function Logo({
    className,
    inverted = false,
  }: {
    className?: string;
    inverted?: boolean;
  }) {
    return (
      <a
        href="#top"
        className={cn("inline-flex items-center gap-2.5", className)}
        aria-label="Kanryo home"
      >
        {/* Kanryo handshake mark */}
        <span
          className="relative flex h-9 w-9 shrink-0 items-center justify-center"
          aria-hidden
        >
          <img
            src="/Kanryo_logo.png"
            alt=""
            className={cn(
              "h-full w-full object-contain",
              inverted && "brightness-0 invert"
            )}
          />
        </span>

        {/* Wordmark */}
        <span
          className={cn(
            "text-[16px] font-semibold tracking-[-0.04em]",
            inverted ? "text-white" : "text-ink"
          )}
        >
          Kanryo
        </span>
      </a>
    );
  }