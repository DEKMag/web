import { useState } from 'react';
import Pagination from '../Pagination';
import styles from './Gallery.module.scss';

const Gallery = () => {
  const images = [
    'https://images.wallpaperscraft.ru/image/single/les_tuman_derevia_128751_1920x1080.jpg',
    'https://images.wallpaperscraft.ru/image/single/les_chelovek_odinochestvo_116306_1920x1080.jpg',
    'https://images.wallpaperscraft.ru/image/single/pejzazh_gory_solntse_140434_1280x720.jpg',
    'https://images.wallpaperscraft.ru/image/single/les_tuman_derevia_126479_1280x720.jpg',
    'https://images.wallpaperscraft.ru/image/single/domik_les_leto_123013_1280x720.jpg',
    'https://images.wallpaperscraft.ru/image/single/holmy_trava_gory_990873_1280x720.jpg',
    'https://images.wallpaperscraft.ru/image/single/zvezdnoe_nebo_derevo_pesok_124955_1280x720.jpg',
    'https://images.wallpaperscraft.ru/image/single/gory_nebo_bali_95497_1280x720.jpg',
    'https://images.wallpaperscraft.ru/image/single/les_tropinka_osen_132571_1280x720.jpg',
    'https://images.wallpaperscraft.ru/image/single/les_tuman_derevia_140541_1280x720.jpg',
    'https://images.wallpaperscraft.ru/image/single/pole_zakat_trava_129566_1280x720.jpg',
    'https://images.wallpaperscraft.ru/image/single/osen_tuman_derevia_87104_1280x720.jpg',
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
                <img
                  className={styles.imgBlock}
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                />
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
