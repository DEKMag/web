import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onChangePage }) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className={styles.buttonStyles}>
      {/* Отображаем кнопки для переключения страниц */}
      {pageNumbers.map((pageNumber) => (
        <button
          className={styles.button}
          key={pageNumber}
          onClick={() => onChangePage(pageNumber)}
          disabled={currentPage === pageNumber}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
