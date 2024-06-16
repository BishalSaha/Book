import React, { useEffect, useState } from "react";
import styles from "./Book.module.css";

interface BookProps {
  children: React.ReactNode;
}

const Book: React.FC<BookProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = React.Children.count(children);

  useEffect(() => {
    const pages = document.getElementsByClassName(styles.page);

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i] as HTMLElement;
      if (i % 2 === 0) {
        page.style.zIndex = String(pages.length - i);
      }
    }

    const handlePageClick = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLElement;
      const pageNum = (target as any).pageNum;

      if (pageNum % 2 === 0) {
        target.classList.remove(styles.flipped);
        if (target.previousElementSibling) {
          (target.previousElementSibling as HTMLElement).classList.remove(styles.flipped);
        }
        setCurrentPage((prevPage) => prevPage - 1);
      } else {
        target.classList.add(styles.flipped);
        if (target.nextElementSibling) {
          (target.nextElementSibling as HTMLElement).classList.add(styles.flipped);
        }
        setCurrentPage((prevPage) => prevPage + 1);
      }
    };

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i] as HTMLElement;
      (page as any).pageNum = i + 1;
      page.addEventListener("click", handlePageClick);
    }

    return () => {
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i] as HTMLElement;
        page.removeEventListener("click", handlePageClick);
      }
    };
  }, []);

  useEffect(() => {
    const book = document.querySelector(`.${styles.book}`) as HTMLElement;

    if (currentPage === 0) {
      book.style.transform = "translateX(-25%)";
    } else if (currentPage === totalPages / 2) {
      book.style.transform = "translateX(25%)";
    } else {
      book.style.transform = "translateX(0)";
    }
  }, [currentPage, totalPages]);

  return (
    <div className={styles.book}>
      <div id={styles.pages} className={styles.pages}>
        {React.Children.map(children, (child, i) => (
          <div key={i} className={styles.page}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
