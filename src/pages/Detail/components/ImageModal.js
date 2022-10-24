import React, { useState } from "react";
import "./ImageModal.scss";

function ImageModal({ images, imageModalIndex, closeModal, isUnmountModal }) {
  const [sliderTranslateX, setSliderTranslateX] = useState(
    (imageModalIndex - 1) * -80
  );
  const canGoForward = sliderTranslateX > (images.length - 1) * -80;
  const canGoBack = sliderTranslateX < 0;
  const sliderMoveForward = () => {
    canGoForward && setSliderTranslateX(x => x - 80);
  };
  const sliderMoveBack = () => {
    canGoBack && setSliderTranslateX(x => x + 80);
  };
  const sliderWidth = images.length * 80;
  return (
    <div
      className={`image-modal-bg${isUnmountModal ? " modal-bg-unmount" : ""}`}
      onClick={closeModal}
    >
      <div
        className={`image-modal${isUnmountModal ? " image-modal-unmount" : ""}`}
        onClick={e => e.stopPropagation()}
      >
        {canGoBack && (
          <button type="button" className="back-button">
            <span
              className="material-symbols-outlined"
              onClick={sliderMoveBack}
            >
              arrow_back
            </span>
          </button>
        )}
        {canGoForward && (
          <button
            type="button"
            className="forward-button"
            onClick={sliderMoveForward}
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        )}
        <div className="image-modal-slider-wrapper">
          <div
            className="image-modal-slider"
            style={{
              width: `${sliderWidth}vw`,
              transform: `translateX(${sliderTranslateX}vw)`,
            }}
          >
            {images.map(img => {
              return (
                <div className="image-modal-img-wrapper" key={img.id}>
                  <img src={img.url} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
