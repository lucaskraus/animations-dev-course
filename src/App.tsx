import TextReveal from "./components/TextReveal";
import OrbitLoader from "./components/OrbitLoader";
import ButtonReveal from "./components/ButtonReveal";
import CopyToClipboard from "./components/CopyToClipboard";
import AnimatedModals from "./components/AnimatedModals";
import { TAB_MENU } from "./constants";
import { useState } from "react";
import { motion } from "motion/react";
import { clsx } from "clsx";

function App() {
  const [activeTab, setActiveTab] = useState<string>(TAB_MENU[0].id);

  return (
    <div className="flex flex-col h-screen items-center p-4 lg:p-20 gap-12">
      <div className="flex flex-col items-center gap-2.5">
        <div className="flex flex-row items-center">
          <h1 className="text-3xl font-medium">animations.dev</h1>
          <div className="blink"></div>
        </div>
        <span className="text-base text-gray-500">
          Exercises from{" "}
          <a
            href="https://animations.dev"
            target="_blank"
            className="text-blue-500"
          >
            Animations on the Web
          </a>{" "}
          course by @emilkowalski_
        </span>
      </div>

      <div className="flex flex-row items-center gap-2">
        {TAB_MENU.map((tab) => (
          <motion.div
            layout
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={clsx(
              "relative cursor-pointer px-2 py-1 text-sm outline-none transition-colors",
              activeTab === tab.id ? "text-gray-800" : "text-gray-700"
            )}
          >
            {activeTab === tab.id ? (
              <motion.div
                layoutId="tab-indicator"
                className="absolute inset-0 rounded-lg bg-black/5"
              />
            ) : null}
            <span className="relative text-inherit">{tab.title}</span>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col">
        {activeTab === "text-reveal" ? <TextReveal /> : null}

        {activeTab === "orbit-loader" ? <OrbitLoader /> : null}

        {activeTab === "reveal-clip-path" ? <ButtonReveal /> : null}

        {activeTab === "copy-to-clipboard" ? <CopyToClipboard /> : null}

        {activeTab === "modals" ? <AnimatedModals /> : null}
      </div>
    </div>
  );
}

export default App;
