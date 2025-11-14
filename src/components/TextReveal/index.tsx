import { useState } from "react";
import styles from "./index.module.css";

export default function TextReveal() {
  const [counter, setCounter] = useState(0);
  const WORD = "Hello, world!";
  return (
    <div className="flex flex-col items-center border border-gray-100 shadow-md rounded-lg p-4">
      <div key={counter}>
        <h1 className={styles.h1Reveal}>
          {WORD.split("").map((char, index) => (
            <span
              key={index}
              className={styles.spanReveal}
              style={{ "--index": index } as React.CSSProperties}
            >
              {char}
            </span>
          ))}
        </h1>
      </div>
      <button
        className={styles.buttonTextReveal}
        onClick={() => setCounter(counter + 1)}
      >
        Replay animation
      </button>
    </div>
  );
}
