import { useState } from "react";

export default function TextReveal() {
    const [counter, setCounter] = useState(0);
    const WORD = "Hello, world!";
    return (
        <div className="flex flex-col items-center gap-4">
            <div key={counter}>
                {WORD.split("").map((char, index) => (
                    <span key={index} style={{ "--index": index } as React.CSSProperties}>{char}</span>
                ))}
            </div>
            <button className="button-text-reveal" onClick={() => setCounter(counter + 1)}>
                Replay animation
            </button>
        </div>
    )
}