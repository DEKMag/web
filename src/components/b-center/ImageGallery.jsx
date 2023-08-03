import { useState } from 'react';

const ImageGallery = ({ images, imagesPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Функция для изменения текущей страницы
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Вычисление индекса первой и последней картинки на текущей странице
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  return (
    <div>
      {/* Отображаем текущий список картинок */}
      {currentImages.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageGallery;
