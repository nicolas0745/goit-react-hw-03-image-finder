const ImageGalleryItem = ({ src, alt, largeImg }) => {
  return (
    <li className="imageGalleryItem">
      <img
        src={src}
        alt={alt}
        className="imageGalleryItem-image"
        data-largeurl={largeImg}
      />
    </li>
  );
};

export { ImageGalleryItem };
