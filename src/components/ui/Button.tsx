import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant: string;
  href?: string;
  onClick?: () => void;
}

export default function Button({ children, variant, href, onClick }: ButtonProps) {
  const className =
    variant === "primary"
      ? "w-full md:w-fit gap-2 flex items-center justify-center font-display font-bold rounded-full border border-white/15 light:border-black/15 text-[#f0ede8] light:text-[#0a0a0a] bg-white/10 light:bg-black/10 px-5 py-5 hover:translate-y-0.5 transition-all duration-200 hover:bg-white/20 light:hover:bg-black/20"
      : "w-full md:w-fit gap-2 flex items-center justify-center font-display font-bold rounded-full text-white/55 light:text-black/55 bg-transparent border border-white/15 light:border-black/15 px-5 py-5 hover:text-[#f0ede8] light:hover:text-[#0a0a0a] hover:translate-y-0.5 transition-all duration-200";

  const content = (
    <>
      {children}
      <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden />
    </>
  );

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {content}
    </button>
  );
}
