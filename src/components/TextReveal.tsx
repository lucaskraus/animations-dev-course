import { useState } from "react";

export default function TextReveal() {
    const [counter, setCounter] = useState(0);
    const WORD = "Hello, world!";
    return (
        <div>
            <div key={counter}>
                {WORD.split("").map((char, index) => (
                    <span key={index} style={{ "--index": index }}>{char}</span>
                ))}
            </div>
            <button className="button" onClick={() => setCounter(counter + 1)}>
                Replay animation
            </button>
        </div>
    )
}