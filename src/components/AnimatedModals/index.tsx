import { useEffect, useState, useRef, type RefObject } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { motion, AnimatePresence } from "motion/react";
import { GAMES, type Game } from "./constants";
import styles from "./index.module.css";

export default function SharedLayout() {
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref as RefObject<HTMLElement>, () => setActiveGame(null));

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveGame(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <AnimatePresence>
        {activeGame ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.overlay}
          />
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {activeGame ? (
          <div className={styles.activeGame}>
            <motion.div
              layoutId={`card-${activeGame.title}`}
              className={styles.inner}
              style={{ borderRadius: 12 }}
              ref={ref}
            >
              <div className={styles.header}>
                <motion.img
                  layoutId={`image-${activeGame.title}`}
                  height={56}
                  width={56}
                  alt=""
                  src={activeGame.image}
                  style={{ borderRadius: 12 }}
                />
                <div className={styles.headerInner}>
                  <div className={styles.contentWrapper}>
                    <motion.h2
                      layoutId={`title-${activeGame.title}`}
                      className={styles.gameTitle}
                    >
                      {activeGame.title}
                    </motion.h2>
                    <motion.p
                      layoutId={`description-${activeGame.title}`}
                      className={styles.gameDescription}
                    >
                      {activeGame.description}
                    </motion.p>
                  </div>
                  <motion.button
                    layoutId={`button-${activeGame.title}`}
                    className={styles.button}
                  >
                    Get
                  </motion.button>
                </div>
              </div>
              <motion.p
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className={styles.longDescription}
              >
                {activeGame.longDescription}
              </motion.p>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className={styles.list}>
        {GAMES.map((game) => (
          <motion.li
            layoutId={`card-${game.title}`}
            key={game.title}
            onClick={() => setActiveGame(game)}
            style={{ borderRadius: 8 }}
          >
            <motion.img
              layoutId={`image-${game.title}`}
              height={56}
              width={56}
              alt=""
              src={game.image}
              style={{ borderRadius: 12 }}
            />
            <div className={styles.gameWrapper}>
              <div className={styles.contentWrapper}>
                <motion.h2
                  layoutId={`title-${game.title}`}
                  className={styles.gameTitle}
                >
                  {game.title}
                </motion.h2>
                <motion.p
                  layoutId={`description-${game.title}`}
                  className={styles.gameDescription}
                >
                  {game.description}
                </motion.p>
              </div>
              <motion.button
                layoutId={`button-${game.title}`}
                className={styles.button}
              >
                Get
              </motion.button>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}
