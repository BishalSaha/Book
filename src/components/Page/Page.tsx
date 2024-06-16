import React from "react";
import styles from "./Page.module.css";

interface PageProps {
  content: string;
}

const Page: React.FC<PageProps> = ({ content }) => {
  return <div className={styles.pageContent}>{content}</div>;
};

export default Page;
