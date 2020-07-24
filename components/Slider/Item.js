import React from "react";
import cx from "classnames";
import SliderContext from "./context";
import "./Item.scss";

const Item = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.id;

      return (
        <div
          ref={elementRef}
          className={cx("item", {
            "item--active": isActive
          })}
          onClick={() => onSelectSlide(movie)}
        >
          <img src={movie.image} alt="" />
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
