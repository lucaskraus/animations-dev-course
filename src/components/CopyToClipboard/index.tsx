import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import "./index.css";

export default function CopyToClipboard() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <button aria-label="Copy code snippet" className="copy-button" onClick={copyToClipboard}>
        <AnimatePresence mode="wait" initial={false}>
            {copied ? (
            <motion.span
                key="checkmark"
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                style={{ color: "green" }}
            >
                <CheckIcon className="w-5 h-5" />
            </motion.span>
            ) : (
            <motion.span
                key="copy"
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                style={{ color: "gray" }}
            >
                <CopyIcon className="w-5 h-5" />
            </motion.span>
            )}
        </AnimatePresence>
    </button>
  );
}