"use client";

import Book from "@/components/Book/Book";
import Page from "@/components/Page/Page";

export default function Home() {
  return (
    <div>
      <Book>
        <Page content="Open Me, Please!" />
        <Page content="Hello" />
        <Page content="Hello there!" />
        <Page content="1" />
        <Page content="2" />
        <Page content="3" />
        <Page content="4" />
        <Page content="5" />
      </Book>
    </div>
  );
}
