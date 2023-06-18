import React from "react";

const Message = ({ variant, children }) => {
  return <div style={{color: "red"}} className={`alert ${variant}`}>{children}</div>;
};

Message.defaultProps = {
  variant: "alert-info",
};

export default Message;
