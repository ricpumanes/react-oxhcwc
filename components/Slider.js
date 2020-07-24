import React, { useState } from "react";
import cx from "classnames";
import SliderContext from "./context";
import SlideButton from "./SlideButton";
import SliderWrapper from "./SliderWrapper";
import useSliding from "./useSliding";
import useSizeElement from "./useSizeElement";
import "./Slider.scss";

const Slider = ({ children, activeSlide }) => {
  const [currentSlide, setCurrentSlide] = useState(activeSlide);
  const { width, elementRef } = useSizeElement();
  const {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasNext,
    hasPrev
  } = useSliding(width, React.Children.count(children));

  const handleSelect = movie => {
    const isCurrentlySelected = movie.id === (currentSlide && currentSlide.id);
    setCurrentSlide(isCurrentlySelected ? null : movie);
  };

  const handleClose = () => {
    setCurrentSlide(null);
  };

  const contextValue = {
    onSelectSlide: handleSelect,
    onCloseSlide: handleClose,
    elementRef,
    currentSlide
  };

  return (
    <SliderContext.Provider value={contextValue}>
      <SliderWrapper>
        <div
          // className={cx('slider', { 'slider--open': currentSlide != null })}
          className={cx("slider")}
        >
          <div ref={containerRef} className="slider__container" {...slideProps}>
            {children}
          </div>
        </div>
        {hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
        {hasNext && <SlideButton onClick={handleNext} type="next" />}
      </SliderWrapper>
      {/* {currentSlide && <Content movie={currentSlide} onClose={handleClose} />} */}
    </SliderContext.Provider>
  );
};

export default Slider;
