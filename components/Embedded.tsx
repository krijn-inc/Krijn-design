import { useEffect, useRef } from "react";

import styles from "@/styles/Embedded.module.scss";

interface EmbeddedProps {
  html: string;
  css: string;
}

export function Embedded({ html, css }: EmbeddedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const document = iframeRef.current.contentWindow?.document!;

      // Add the /default.css stylesheet to the iframe
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/default.css";

      const style = document.createElement("style");

      style.textContent = css;

      document.head.appendChild(link);
      document.head.appendChild(style);
      document.body.innerHTML = html;
    }
  }, [html, css]);

  return (
    <iframe
      className={`${styles.embedded}`}
      ref={iframeRef}
      title="Embedded Frame"
      width="300" // Set the desired width
      height="200" // Set the desired height
      frameBorder="0"
    />
  );
}
