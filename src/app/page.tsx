"use client";

import Book from "@/components/Book/Book";
import Page from "@/components/Page/Page";

export default function Home() {
  return (
    <div>
      <Book>
        <Page content="Title" />
        <Page content="1" />
        <Page content="2" />
        <Page content="3" />
        <Page content="4" />
        <Page content="5" />
        <Page content="6" />
        <Page content="7" />
      </Book>
    </div>
  );
}
