import { useState } from 'react';
import Pagination from '../Pagination';
import styles from './PersonalPage.module.scss';

const PersonalPage = () => {
  const contentList = [
    <div className={styles.animeListOne}></div>,
    <div className={styles.animeListTwo}></div>,
    <div className={styles.animeListFree}></div>,
  ];

  const itemsPerPage = 1;
  const totalItems = contentList.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentContent = contentList.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className={styles.logo}>
        <div className={styles.shell}>
          <div className={styles.nameTextContent}>Animation</div>
          <div className={styles.contentCenter}>
            <div className={styles.menuContent}>
              <div className={styles.menuCircleOne}></div>
              <div className={styles.menuCircleTwo}></div>
              <div className={styles.menuCircleFree}></div>
            </div>
            <div className={styles.topBorder}></div>
            <div className={styles.leftBorder}></div>
            <div className={styles.bottomBorder}></div>
            <>
              {currentContent.map((content, index) => (
                <div key={index}>{content}</div>
              ))}
            </>
          </div>
          <div className={styles.bottomPag}>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onChangePage={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalPage;
