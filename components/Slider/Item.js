import React from "react";
import cx from "classnames";
import SliderContext from "./context";
import "./Item.scss";

const Item = ({ video }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === video.id;

      return (
        <div
          ref={elementRef}
          className={cx("item", {
            "item--active": isActive
          })}
          onClick={() => onSelectSlide(video)}
        >
          <img src={video.image} alt="" />
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
