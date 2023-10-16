import * as React from "react";
const SvgPlus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M7.5.5h-1v6h-6v1h6v6h1v-6h6v-1h-6v-6Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlus;

