import { useState } from "react";

export default function TextReveal() {
    const [counter, setCounter] = useState(0);
    const WORD = "Hello, world!";
    return (
        <div className="flex flex-col items-center">
            <div key={counter}>
            <h1 className="h1-reveal">
                {WORD.split("").map((char, index) => (
                    <span key={index} className="span-reveal" style={{ "--index": index } as React.CSSProperties}>{char}</span>
                ))}
                </h1>
            </div>
            <button className="button-reveal" onClick={() => setCounter(counter + 1)}>
                Replay animation
            </button>
        </div>
    )
}