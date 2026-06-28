interface Props {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "text-base tracking-[0.18em]",
  md: "text-xl tracking-[0.20em]",
  lg: "text-3xl tracking-[0.22em]",
};

export function Logo({ size = "md", className = "" }: Props) {
  return (
    <span className={`font-black ${sizes[size]} ${className}`}>
      <span className="text-gradient">ORQUESTRA</span>
      <span className="text-white/70 font-light"> LIVE</span>
    </span>
  );
}
