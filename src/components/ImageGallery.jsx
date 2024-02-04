import { ImageGalleryItem } from './ImageGalleryItem';

const ImageGallery = ({ list, onHandleClick }) => {
  return (
    <ul className="imageGallery" onClick={onHandleClick}>
      {list.map((item, index) => (
        <ImageGalleryItem
          src={item.webformatURL}
          alt={item.tags}
          key={index}
          largeImg={item.largeImageURL}
        />
      ))}
    </ul>
  );
};

export { ImageGallery };
