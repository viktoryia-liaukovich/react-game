import React, { useEffect, useRef, useState } from "react";
import { musicbank } from "../../configs/sounds";
import Portal from "../Portal/Portal";

import "./Obstacles.scss";

export default function Obstacles(props) {
  const { config, setOnTop, setJumpPortal, onFinish } = props;

  let finishState = false;

  const [elements, setElements] = useState([]);

  const ref = useRef(null);

  useEffect(() => {
    let int = null;

    if (!elements.length) {
      setElements(Array.from(document.querySelectorAll(".obstacles .rectangle")));
    } else {
      const shift = config.reduce((acc, val) => acc + val.pos + 100, 0) + 100;
      const time = `${shift / 600}s`;
      ref.current.style.transitionDuration = time;

      setTimeout(() => {
        ref.current.style.transform = `translateX(-${shift}px)`

        ref.current.ontransitionend = () => {
          const x = -ref.current.getBoundingClientRect().x;
          setJumpPortal(true)
        }
      }, 1000);

      int = setInterval(() => {
        const charEl = document.querySelector(".character");
        const char = charEl && charEl.getBoundingClientRect();

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

            if (
              Math.floor(char.y + char.height) <= rect.y + 20 &&
              charEl.classList.contains("falling")
            ) {
              charEl.style.transform = `translateY(-${window.innerHeight - rect.bottom - rect.height}px)`;
              charEl.style.transitionDuration = '';

              setOnTop(true);
            } else if (!charEl.classList.contains("on-top")) {
              onFinish('lost')
              onFinish('lost')
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
      }, 5);

      ref.current.addEventListener("transitionend", () => {
        clearInterval(int);
      });
    }

    return () => clearInterval(int);
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
