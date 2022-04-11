import PropTypes from "prop-types";
import React from "react";
import { BasicBtn } from "./btnStyle";

export const Button = ({
  label,
  labelColor = "#fff",
  background = "linear-gradient(#333, #111)",
  onClick,
  size = "md",
  ...rest
}) => {
  return (
    <BasicBtn background={background} labelColor={labelColor} size={size} {...rest}>
      {label}
    </BasicBtn>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  labelColor: PropTypes.string,
  background: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
