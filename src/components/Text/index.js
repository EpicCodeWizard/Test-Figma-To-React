import React from "react";
const variantClasses = {
  h1: "font-bold lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-[35px]",
  h2: "3xl:text-[10px] text-[20px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
