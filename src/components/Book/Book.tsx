// components/Book.tsx
import React, { useState } from "react";
import styles from "./Book.module.css";

const pagesContent = [
  "Open Me, please!",
  "Hello!",
  "Hello there!",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

const Page: React.FC<{
  content: string;
  index: number;
  flipped: boolean;
  onClick: () => void;
}> = ({ content, index, flipped, onClick }) => (
  <div
    className={`${styles.page} ${flipped ? styles.flipped : ""}`}
    style={{ zIndex: pagesContent.length - index }}
    onClick={onClick}
  >
    <div className={styles.pageContent}>
      <p>{content}</p>
    </div>
  </div>
);

const Book: React.FC = () => {
  const [flippedPages, setFlippedPages] = useState<boolean[]>(
    new Array(pagesContent.length).fill(false)
  );

  const togglePageFlip = (index: number) => {
    const newFlippedPages = [...flippedPages];
    newFlippedPages[index] = !newFlippedPages[index];
    if (index % 2 === 0 && index < pagesContent.length - 1) {
      newFlippedPages[index + 1] = newFlippedPages[index];
    } else if (index % 2 !== 0 && index > 0) {
      newFlippedPages[index - 1] = newFlippedPages[index];
    }
    setFlippedPages(newFlippedPages);
  };

  return (
    <div className={styles.book}>
      <div className={styles.pages}>
        {pagesContent.map((content, i) => (
          <Page
            key={i}
            content={content}
            index={i}
            flipped={flippedPages[i]}
            onClick={() => togglePageFlip(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Book;
