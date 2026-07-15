import { Mail, type LucideIcon } from "lucide-react";

type SvgSocial = {
  type: "svg";
  name: string;
  href: string;
  icon: string;
  darkIcon?: string;
};

type LucideSocial = {
  type: "lucide";
  name: string;
  href: string;
  icon: LucideIcon;
};

export type Social = SvgSocial | LucideSocial;

export const contact = {
  title: "Let's build something great together.",
  description:
    "I'm always interested in discussing frontend engineering, product development, and exciting opportunities. Whether you're hiring, collaborating, or simply want to connect, my inbox is always open.",
  email: "subhasish.mishra17@gmail.com",
  location: "Bengaluru, India",
  socials: [
    {
      type: "svg",
      name: "GitHub",
      href: "https://github.com/smishra11",
      icon: "/icons/github-light.svg",
      darkIcon: "/icons/github-dark.svg",
    },
    {
      type: "svg",
      name: "LinkedIn",
      href: "https://linkedin.com/in/subhasish-mishra17",
      icon: "/icons/linkedin.svg",
    },
    {
      type: "lucide",
      name: "Email",
      href: "mailto:subhasish.mishra17@gmail.com",
      icon: Mail,
    },
  ] satisfies Social[],
} as const;
