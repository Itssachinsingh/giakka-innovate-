import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const CustomButton = React.forwardRef(
  (
    {
      className,
      href,
      variant = "primary",
      target = "_blank",
      ...props
    },
    ref
  ) => {
    const baseStyles = "uppercase w-[126px] cursor-pointer transition-all ease-in-out duration-300 h-[35px] sm:w-[135px] sm:h-[38px] md:w-[141px] md:h-[42px] text-xs sm:text-sm lg:tracking-[0%] md:text-[14px] md:leading-[18px] font-bold transition-all ease-in duration-200 rounded-none";
    const primaryStyles =
      "bg-[#00EB66] text-black cursor-pointer  hover:bg-[#0575E6] hover:text-white ";
    const outlineStyles =
      "bg-[#0575E6] text-white cursor-pointer hover:bg-[#00EB66] hover:text-black";

    return (
      <Link
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        <Button
          className={cn(
            baseStyles,
            variant === "primary" ? primaryStyles : outlineStyles,
            className
          )}
          ref={ref}
          {...props}
        />
      </Link>
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton };