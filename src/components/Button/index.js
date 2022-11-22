import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder20: "rounded-radius20" };
const variants = { FillYellow400: "bg-yellow_400 text-black_900" };
const sizes = { sm: "p-[16px] lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder20"]),
  variant: PropTypes.oneOf(["FillYellow400"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder20",
  variant: "FillYellow400",
  size: "sm",
};

export { Button };
