import React, { useEffect, useRef } from 'react';

const Modal = ({ src, alt, onHandleClick, onHandleKey }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    modalRef.current.focus();
  }, []);

  return (
    <div
      className="overlay"
      tabIndex="0"
      ref={modalRef}
      onClick={onHandleClick}
      onKeyDown={onHandleKey}
    >
      <div className="modal">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export { Modal };
