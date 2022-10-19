import React from "react";
import "./Footer";

function FooterRightComponent({
  title,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
}) {
  return (
    <div className="component-frame2">
      <div className="title item">{title}</div>
      <div className="item1 item">{item1}</div>
      <div className="item2 item">{item2}</div>
      <div className="item3 item">{item3}</div>
      <div className="item4 item">{item4}</div>
      <div className="item5 item">{item5}</div>
      <div className="item6 item">{item6}</div>
      <div className="item7 item">{item7}</div>
      <div className="item8 item">{item8}</div>
      <div className="item9 item">{item9}</div>
    </div>
  );
}
export default FooterRightComponent;
