import { useEffect, useState } from "react";

import styles from "@/styles/Loader.module.scss";
import quotes from "@/data/quotes.json";

export function Loader() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const linesToShow = [
    quotes[currentLineIndex],
    quotes[(currentLineIndex + 1) % quotes.length],
    quotes[(currentLineIndex + 2) % quotes.length],
    quotes[(currentLineIndex + 3) % quotes.length],
    quotes[(currentLineIndex + 4) % quotes.length],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLineIndex((previousState) => (previousState + 1) % quotes.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [setCurrentLineIndex]);

  return (
    <ul className={styles.loader}>
      {linesToShow.map((quote, index) => (
        <li
          key={quote}
          className={index === 2 ? styles.middle : index === 0 || index === 4 ? styles.invisible : styles.side}
          style={{
            transform: `translateY(${(index - 2) * 1.75}rem)`,
          }}
        >
          {quote}
        </li>
      ))}
    </ul>
  );
}
