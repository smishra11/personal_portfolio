import Image from "next/image";

import { cn } from "@/lib/utils";

type SocialIconProps = {
  href: string;
  alt: string;
  src: string;
  darkSrc?: string;
  className?: string;
  size?: number;
};

export function SocialIcon({
  href,
  alt,
  src,
  darkSrc,
  className,
  size = 22,
}: SocialIconProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-hidden="true"
      className={cn(
        "inline-flex items-center justify-center transition-all duration-300",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={darkSrc ? "block dark:hidden" : "block"}
      />

      {darkSrc && (
        <Image
          src={darkSrc}
          alt={alt}
          width={size}
          height={size}
          className="hidden dark:block"
        />
      )}
    </a>
  );
}
