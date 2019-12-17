import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  /**
   * Description for the label prop
   */
  label: ReactNode;
}

const Button: FunctionComponent<Props> = ({ label }) => (
  <button
    style={{
      fontSize: 16,
      border: 0,
      background: "rebeccapurple",
      padding: 20,
      color: "white"
    }}
  >
    {label}
  </button>
);

export default Button;
