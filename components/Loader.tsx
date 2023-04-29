import React, { Component } from "react";
import styles from "@/styles/Loader.module.scss";
import quotes from "@/data/quotes.json";

type LoaderState = {
  currentLineIndex: number;
};

class Loader extends Component<{}, LoaderState> {
  private interval: NodeJS.Timeout | undefined;

  constructor(props: {}) {
    super(props);
    
    this.state = {
      currentLineIndex: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((previousState) => ({
        currentLineIndex: (previousState.currentLineIndex + 1) % quotes.length,
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
      quotes[currentLineIndex],
      quotes[(currentLineIndex + 1) % quotes.length],
      quotes[(currentLineIndex + 2) % quotes.length],
      quotes[(currentLineIndex + 3) % quotes.length],
      quotes[(currentLineIndex + 4) % quotes.length],
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
