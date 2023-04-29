import React, { Component } from "react";

import styles from "@/styles/Loader.module.scss";
import quotes from "@/data/quotes.json";

type LoaderState = {
  currentLineIndex: number;
};

class Loader extends Component<{}, LoaderState> {
  private quotes = quotes as string[];
  private interval: NodeJS.Timeout | undefined;

  constructor(props: {}) {
    super(props);
    
    this.quotes = quotes.sort(() => Math.random() - 0.5);
    this.state = {
      currentLineIndex: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((previousState) => ({
        currentLineIndex: (previousState.currentLineIndex + 1) % this.quotes.length,
      }));
    }, 2500);
  }

  componentWillUnmount() {
    if (this.interval !== null) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { currentLineIndex } = this.state;
    const linesToShow = [
      this.quotes[currentLineIndex],
      this.quotes[(currentLineIndex + 1) % this.quotes.length],
      this.quotes[(currentLineIndex + 2) % this.quotes.length],
      this.quotes[(currentLineIndex + 3) % this.quotes.length],
      this.quotes[(currentLineIndex + 4) % this.quotes.length],
    ];

    return (
      <ul className={`${styles.loader}`}>
        {linesToShow.map((quote, index) => (
          <li
            key={quote}
            className={
              index === 2
                ? styles.middle
                : index === 0 || index === 4
                ? styles.invisible
                : styles.side
            }
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
}

export default Loader;
