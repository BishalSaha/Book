import React, { useEffect } from "react";
import styles from "./Book.module.css";

interface BookProps {
  children: React.ReactNode;
}

const Book: React.FC<BookProps> = ({ children }) => {
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
        (target.previousElementSibling as HTMLElement).classList.remove(styles.flipped);
      } else {
        target.classList.add(styles.flipped);
        (target.nextElementSibling as HTMLElement).classList.add(styles.flipped);
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
