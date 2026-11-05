import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

/**
 * Reusable ButtonWithIcon component with the signature glide-and-swap animation.
 * Features generous horizontal padding and a crisp monochrome white circle icon badge.
 */
export const ButtonWithIcon = React.forwardRef(
  (
    {
      text = "Our Work",
      children,
      className = "",
      icon: Icon = ArrowUpRight,
      onClick,
      ...props
    },
    ref
  ) => {
    const label = children || text;

    return (
      <Button
        ref={ref}
        onClick={onClick}
        className={`relative text-sm sm:text-base font-semibold rounded-full h-13 sm:h-14 p-1 ps-9 pe-18 sm:ps-11 sm:pe-22 group transition-all duration-500 hover:ps-18 hover:pe-9 sm:hover:ps-22 sm:hover:pe-11 w-fit overflow-hidden cursor-pointer border border-white/25 bg-neutral-950/90 text-white hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] active:scale-95 ${className}`.trim()}
        {...props}
      >
        <span className="relative z-10 transition-all duration-500 select-none">
          {label}
        </span>
        <div className="absolute right-1.5 w-10 h-10 sm:w-11 sm:h-11 bg-white text-black rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-46px)] sm:group-hover:right-[calc(100%-50px)] group-hover:rotate-45 shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
          <Icon size={18} />
        </div>
      </Button>
    );
  }
);

ButtonWithIcon.displayName = "ButtonWithIcon";

/**
 * Default Demo matching the exact 21st.dev component structure
 */
const ButtonWithIconDemo = () => {
  return (
    <Button className="relative text-sm font-medium rounded-full h-12 p-1 ps-9 pe-18 group transition-all duration-500 hover:ps-18 hover:pe-9 w-fit overflow-hidden cursor-pointer border border-white/25 bg-neutral-900 text-white hover:border-white">
      <span className="relative z-10 transition-all duration-500">
        Our Work
      </span>
      <div className="absolute right-1.5 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-46px)] group-hover:rotate-45">
        <ArrowUpRight size={16} />
      </div>
    </Button>
  );
};

export { ButtonWithIconDemo };
export default ButtonWithIconDemo;
