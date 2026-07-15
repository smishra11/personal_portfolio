import Image from "next/image";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type SocialIconProps =
  | {
      type: "svg";
      href: string;
      alt: string;
      src: string;
      darkSrc?: string;
      className?: string;
      size?: number;
    }
  | {
      type: "lucide";
      href: string;
      alt: string;
      icon: LucideIcon;
      className?: string;
      size?: number;
    };

export function SocialIcon(props: SocialIconProps) {
  const size = props.size ?? 22;

  return (
    <a
      href={props.href}
      target={props.href.startsWith("http") ? "_blank" : undefined}
      rel={props.href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={props.alt}
      className={cn(
        "inline-flex items-center justify-center rounded-lg p-2 transition-transform duration-200 hover:scale-110",
        props.className
      )}
    >
      {props.type === "lucide" ? (
        <props.icon className="h-5.5 w-5.5" />
      ) : (
        <>
          <Image
            src={props.src}
            alt={props.alt}
            width={size}
            height={size}
            className={props.darkSrc ? "block dark:hidden" : "block"}
          />

          {props.darkSrc && (
            <Image
              src={props.darkSrc}
              alt={props.alt}
              width={size}
              height={size}
              className="hidden dark:block"
            />
          )}
        </>
      )}
    </a>
  );
}
