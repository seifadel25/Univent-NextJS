"use client";
import React from "react";
import StickyScroll from "../components/sticky-scroll-reveal";

export default function About() {
  const pageContent = [
    {
      title: "Introduction",
      description: "This is the introduction to our cool feature.",
      content: <img src="www.example.com" alt="Introduction" />,
    },
    {
      title: "Features",
      description: "Here are the exciting features we offer.",
      content: <img src="www.example.com" alt="Features" />,
    },
    {
      title: "Conclusion",
      description: "Thank you for reading about our features!",
      content: <img src="/path/to/image3.jpg" alt="Conclusion" />,
    },
  ];

  return (
    <div className="h-[100vh]">
      <div>
        <StickyScroll content={pageContent} />
      </div>
      <div>
        <h1>Test</h1>
        <p>Test</p>
      </div>
    </div>
  );
}
