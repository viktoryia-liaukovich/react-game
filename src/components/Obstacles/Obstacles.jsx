import React, { useEffect, useRef, useState } from "react";
import Portal from "../Portal/Portal";

import "./Obstacles.scss";

export default function Obstacles(props) {
  const { config, setOnTop, setJumpPortal } = props;

  const [elements, setElements] = useState([]);

  const ref = useRef(null);

  useEffect(() => {
    if (!elements.length) {
      setElements(Array.from(document.querySelectorAll(".obstacles .rectangle")));
    }

    const shift = config.reduce((acc, val) => acc + val.pos + 100, 0) + 100;
    setTimeout(() => {
      ref.current.style.transform = `translateX(-${shift}px)`
      ref.current.ontransitionend = () => setJumpPortal(true)
    }, 1000);

    const int = setInterval(() => {
      const charEl = document.querySelector(".character");
      const char = charEl.getBoundingClientRect();

      const el = elements.find((el) => {
        const rect = el.getBoundingClientRect();
        return rect.x > 0 && rect.x <= char.x + char.width;
      });

      if (el) {
        const rect = el.getBoundingClientRect();

        if (
          char.x + char.width > rect.x &&
          char.x <= rect.x + rect.width &&
          char.y + char.height >= rect.y &&
          char.y <= rect.y + rect.height
        ) {
          el.style.backgroundColor = "white";

          if (Math.floor(char.y + char.height) <= rect.y + 20 &&
              charEl.classList.contains("falling")
          ) {
            charEl.style.transform = `translateY(-${window.innerHeight - rect.bottom - rect.height}px)`;
            charEl.style.transitionDuration = '';

            setOnTop(true);
          } else {
            // lose
          }
        } else {
          if (
            charEl.style.transform !== "" &&
            !charEl.classList.contains("falling") &&
            !charEl.classList.contains("jumping")
          ) {
            charEl.classList.add("falling")

            const deltaTime = (window.innerHeight - charEl.getBoundingClientRect().bottom - 200) / 800;
            charEl.style.transitionDuration = `${deltaTime}s`;

            charEl.style.transform = "";
          }
          setOnTop(false);
        }
      }
    }, 16);

    ref.current.addEventListener("transitionend", () => {
      clearInterval(int);
    });
  }, [config, elements]);

  return (
    <div className="obstacles" ref={ref}>
      {config.map((el, i) => {
        return (
          <div
            key={i}
            className={el.type.class}
            style={{
              marginLeft: el.pos,
              marginBottom: el.y,
            }}
          ></div>
        );
      })}
      <Portal />
    </div>
  );
}
