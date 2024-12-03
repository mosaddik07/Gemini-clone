import React from "react";

const Card = ({ para, img, cls }) => {
  return (
    <div className={cls}>
      <p>{para}</p>
      <img src={img} />
    </div>
  );
};

export default Card;
