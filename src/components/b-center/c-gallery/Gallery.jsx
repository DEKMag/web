import { useState } from 'react';
import Pagination from '../Pagination';
import styles from './Gallery.module.css';

const Gallery = () => {
  const images = [
    'https://static.tildacdn.com/tild3136-6566-4534-b935-636636306331/i.jpg',
    'https://prv1.lori-images.net/shtorm-na-morskom-poberezhe-0002298233-preview.jpg',
    'https://prv0.lori-images.net/morskoi-peizazh-priboi-bolshoi-kamen-v-vode-u-berega-0004329620-preview.jpg',
    'https://prv0.lori-images.net/skalistyi-mrachnyi-bereg-atlanticheskogo-okeana-v-0001400788-preview.jpg',
    'https://static.tildacdn.com/tild3136-6566-4534-b935-636636306331/i.jpg',
    'https://prv1.lori-images.net/shtorm-na-morskom-poberezhe-0002298233-preview.jpg',
    'https://prv0.lori-images.net/morskoi-peizazh-priboi-bolshoi-kamen-v-vode-u-berega-0004329620-preview.jpg',
    'https://prv0.lori-images.net/skalistyi-mrachnyi-bereg-atlanticheskogo-okeana-v-0001400788-preview.jpg',
    'https://static.tildacdn.com/tild3136-6566-4534-b935-636636306331/i.jpg',
    'https://prv1.lori-images.net/shtorm-na-morskom-poberezhe-0002298233-preview.jpg',
    'https://prv0.lori-images.net/morskoi-peizazh-priboi-bolshoi-kamen-v-vode-u-berega-0004329620-preview.jpg',
    'https://prv0.lori-images.net/skalistyi-mrachnyi-bereg-atlanticheskogo-okeana-v-0001400788-preview.jpg',
  ];

  const imagesPerPage = 1;
  const totalItems = images.length;
  const totalPages = Math.ceil(totalItems / imagesPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastImage = currentPage * imagesPerPage;

  const indexOfFirstImage = indexOfLastImage - imagesPerPage;

  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  return (
    <>
      <div className={styles.logo}>
        <div className={styles.shell}>
          <div className={styles.nameTextContent}>Gallery</div>
          <div className={styles.contentCenter}>
            <div className={styles.menuContent}>
              <div className={styles.menuCircleOne}></div>
              <div className={styles.menuCircleTwo}></div>
              <div className={styles.menuCircleFree}></div>
            </div>
            <div className={styles.topBorder}></div>
            <div className={styles.leftBorder}></div>
            <div className={styles.bottomBorder}></div>
            <div className={styles.imageContent}>
              {currentImages.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} />
              ))}
            </div>
          </div>
          <div className={styles.bottomPag}>
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(images.length / imagesPerPage)}
              onChangePage={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
