type SvgSocial = {
  type: "svg";
  name: string;
  href: string;
  icon: string;
  darkIcon?: string;
};

export type Social = SvgSocial;

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
      type: "svg",
      name: "Email",
      href: "mailto:subhasish.mishra17@gmail.com",
      icon: "/icons/gmail.svg",
    },
  ] satisfies Social[],
} as const;
