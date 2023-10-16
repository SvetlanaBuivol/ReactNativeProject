import * as React from "react";
const SvgAdd = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <circle cx={12.5} cy={12.5} r={12} fill="#fff" stroke="#FF6C00" />
    <path
      fill="#FF6C00"
      fillRule="evenodd"
      d="M13 6h-1v6H6v1h6v6h1v-6h6v-1h-6V6Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAdd;

