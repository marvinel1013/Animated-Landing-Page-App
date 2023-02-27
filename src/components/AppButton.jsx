import React from "react";

function AppButton(props) {
  const { title, className } = props;
  return (
    <button
      className={
        "bg-primary border-2 border-primary hover:bg-transparent duration-300 ease-in rounded-md" +
        " " +
        className
      }
      onClick={() => alert("No Functionality For Educational Purposes Only")}
    >
      {title}
    </button>
  );
}

export default AppButton;
