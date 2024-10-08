import React, { ElementType, ComponentProps, PropsWithChildren } from "react";

export type ButtonProps<AS extends ElementType> = PropsWithChildren<{
  as?: AS;
}> &
  Omit<ComponentProps<AS>, "as">;

export const Button = <AS extends ElementType>(props: ButtonProps<AS>) => {
  const { as: Element = "button", children, ...attrs } = props;
  return <Element {...attrs}>{children}</Element>;
};

export function usage() {
  return (
    <>
      <Button onClick={() => alert("Clicked!")}>Click me</Button>
      <Button as="a" href="https://example.com">
        Visit Example
      </Button>
    </>
  );
}
