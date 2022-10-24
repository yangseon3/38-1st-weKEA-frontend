import React from "react";
import "./ImageModal.scss";

function ImageModal({
  images,
  imageModalIndex,
  closeModal,
  isUnmountModal,
  setImageModalIndex,
}) {
  const sliderTranslateX = (imageModalIndex - 1) * -80;
  const canGoForward = imageModalIndex < images.length;
  const canGoBack = imageModalIndex > 1;
  console.log(canGoForward);
  const sliderMoveForward = () => {
    canGoForward && setImageModalIndex(index => index + 1);
  };
  const sliderMoveBack = () => {
    canGoBack && setImageModalIndex(index => index - 1);
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
            {images.map(productImage => {
              return (
                <div className="image-modal-img-wrapper" key={productImage.id}>
                  <img src={productImage.url} />
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
