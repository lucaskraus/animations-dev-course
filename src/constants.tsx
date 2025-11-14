import OrbitLoader from "./components/OrbitLoader";
import ButtonReveal from "./components/ButtonReveal";
import TextReveal from "./components/TextReveal";
import CopyToClipboard from "./components/CopyToClipboard";
import AnimatedModals from "./components/AnimatedModals";

export const TAB_MENU = [
  {
    title: "Text Reveal",
    id: "text-reveal",
    component: () => <TextReveal />,
  },
  {
    title: "Orbit Loader",
    id: "orbit-loader",
    component: () => <OrbitLoader />,
  },
  {
    title: "Reveal clip-path",
    id: "reveal-clip-path",
    component: () => <ButtonReveal />,
  },
  {
    title: "Copy to Clipboard",
    id: "copy-to-clipboard",
    component: () => <CopyToClipboard />,
  },
  {
    title: "Modals",
    id: "modals",
    component: () => <AnimatedModals />,
  },
];
