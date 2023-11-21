/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const Server03 = ({ color = "black", className }: Props): JSX.Element => {
  return (
    <svg
      className={`server-03 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M7.44071 2H16.5593C17.3148 1.99999 17.9401 1.99998 18.4518 2.04056C18.9847 2.08281 19.4751 2.17346 19.9417 2.39923C20.6683 2.75072 21.2715 3.31378 21.6722 4.01443C21.9295 4.46446 22.0537 4.94747 22.1325 5.47614C22.2082 5.98387 22.2512 6.60768 22.3032 7.36142L22.5289 10.635C22.5707 11.2401 22.5915 11.5426 22.5094 11.6782C22.4272 11.8137 22.3399 11.8756 22.1848 11.9082C22.0297 11.9409 21.7089 11.8028 21.0674 11.5267C20.2798 11.1878 19.4118 11 18.5 11H5.5C4.58818 11 3.72021 11.1878 2.93264 11.5267C2.29108 11.8028 1.9703 11.9409 1.81524 11.9082C1.66013 11.8756 1.57279 11.8137 1.49062 11.6781C1.40848 11.5426 1.42934 11.2401 1.47107 10.635L1.69684 7.36138C1.74881 6.60766 1.79182 5.98387 1.86751 5.47614C1.94633 4.94747 2.0705 4.46446 2.32784 4.01443C2.72848 3.31378 3.33172 2.75072 4.05827 2.39923C4.52494 2.17346 5.01535 2.08281 5.54819 2.04056C6.05991 1.99998 6.68523 1.99999 7.44071 2Z"
        fill={color}
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M23 17.5037L23 17.4979C22.9999 17.2988 22.9869 17.1026 22.9617 16.9103C22.6729 14.7037 20.7854 13 18.5 13H5.5C3.21462 13 1.32716 14.7036 1.0383 16.9102C1.01304 17.1032 1 17.3001 1 17.5C1 19.9853 3.01472 22 5.5 22H18.5C20.9841 22 22.998 19.9873 23 17.5037ZM12 16.5C11.4477 16.5 11 16.9477 11 17.5C11 18.0523 11.4477 18.5 12 18.5H18C18.5523 18.5 19 18.0523 19 17.5C19 16.9477 18.5523 16.5 18 16.5H12ZM6 16.25C5.30964 16.25 4.75 16.8096 4.75 17.5C4.75 18.1904 5.30964 18.75 6 18.75C6.69036 18.75 7.25 18.1904 7.25 17.5C7.25 16.8096 6.69036 16.25 6 16.25Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Server03.propTypes = {
  color: PropTypes.string,
};
