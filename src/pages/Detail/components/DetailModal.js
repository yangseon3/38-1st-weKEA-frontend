import React, { useState } from "react";
import "./DetailModal.scss";

function DetailModal({ images, isModalOpen, closeModal, unmountModal }) {
  const [sliderTranslateX, setSliderTranslateX] = useState(
    (isModalOpen - 1) * -80
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
      className={`detail-modal-bg${
        unmountModal ? " detail-modal-bg-unmount" : ""
      }`}
      onClick={e => closeModal(e)}
    >
      <div
        className={`detail-modal${unmountModal ? " detail-modal-unmount" : ""}`}
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
        <div className="detail-modal-slider-wrapper">
          <div
            className="detail-modal-slider"
            style={{
              width: `${sliderWidth}vw`,
              transform: `translateX(${sliderTranslateX}vw)`,
            }}
          >
            {images.map(img => {
              return (
                <div className="detail-modal-img-wrapper" key={img.id}>
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

export default DetailModal;
