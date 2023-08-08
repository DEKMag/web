import { useState } from 'react';
import Pagination from '../Pagination';
import styles from './Web.module.scss';

const Web = () => {
  const contentList = [
    <div className={styles.webSiteOne}>Web 1</div>,
    <div className={styles.webSiteTwo}>Web 2</div>,
    <div className={styles.webSiteFree}>Web 3</div>,
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
          <div className={styles.nameTextContent}>Web Gallery</div>
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

export default Web;
