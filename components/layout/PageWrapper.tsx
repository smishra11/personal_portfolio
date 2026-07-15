import { ComponentPropsWithoutRef } from "react";

type PageWrapperProps = ComponentPropsWithoutRef<"main">;

export function PageWrapper(props: PageWrapperProps) {
  return <main {...props} />;
}
