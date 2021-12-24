import React, { useEffect } from "react";

const Notification = ({ isShow, setShow, playable }) => {
  let message = "Game Over. try a different word?";

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [isShow]);

  return (
    <div className={`notification-container ${isShow ? "show" : ""}`}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
