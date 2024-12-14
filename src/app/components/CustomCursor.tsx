"use client";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/cursor.module.css";

const CustomCursor = () => {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorEnlarged, setCursorEnlarged] = useState(false);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const outlineRef = useRef<HTMLDivElement | null>(null);

  const [isBrowser, setIsBrowser] = useState(false);

  const delay = 8;
  let _x = 0;
  let _y = 0;
  let endX = 0;
  let endY = 0;

  useEffect(() => {
    // Check if we're on the client-side to avoid `window` reference issues during SSR
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    if (isBrowser) {
      endX = window.innerWidth / 2;
      endY = window.innerHeight / 2;

      const updateCursor = (e: MouseEvent) => {
        setCursorVisible(true);

        endX = e.pageX;
        endY = e.pageY;

        if (dotRef.current) {
          dotRef.current.style.top = `${endY}px`;
          dotRef.current.style.left = `${endX}px`;
        }
      };

      const handleMouseEnter = () => {
        setCursorVisible(true);
        if (dotRef.current && outlineRef.current) {
          dotRef.current.style.opacity = "1";
          outlineRef.current.style.opacity = "1";
        }
      };

      const handleMouseLeave = () => {
        setCursorVisible(false);
        if (dotRef.current && outlineRef.current) {
          dotRef.current.style.opacity = "0";
          outlineRef.current.style.opacity = "0";
        }
      };

      const handleMouseOverLink = () => {
        setCursorEnlarged(true);
      };

      const handleMouseOutLink = () => {
        setCursorEnlarged(false);
      };

      // Event listeners
      document.addEventListener("mousemove", updateCursor);
      document.addEventListener("mouseenter", handleMouseEnter);
      document.addEventListener("mouseleave", handleMouseLeave);
      document.querySelectorAll("a").forEach((el) => {
        el.addEventListener("mouseover", handleMouseOverLink);
        el.addEventListener("mouseout", handleMouseOutLink);
      });

      return () => {
        document.removeEventListener("mousemove", updateCursor);
        document.removeEventListener("mouseenter", handleMouseEnter);
        document.removeEventListener("mouseleave", handleMouseLeave);
        document.querySelectorAll("a").forEach((el) => {
          el.removeEventListener("mouseover", handleMouseOverLink);
          el.removeEventListener("mouseout", handleMouseOutLink);
        });
      };
    }
  }, [isBrowser]);

  useEffect(() => {
    if (isBrowser) {
      const animateOutline = () => {
        if (outlineRef.current) {
          _x += (endX - _x) / delay;
          _y += (endY - _y) / delay;
          outlineRef.current.style.top = `${_y}px`;
          outlineRef.current.style.left = `${_x}px`;
        }
        requestAnimationFrame(animateOutline);
      };

      animateOutline();
    }
  }, [isBrowser]);

  const toggleCursorSize = () => {
    if (dotRef.current && outlineRef.current) {
      if (cursorEnlarged) {
        dotRef.current.style.transform = "translate(-50%, -50%) scale(0.75)";
        outlineRef.current.style.transform = "translate(-50%, -50%) scale(1.5)";
      } else {
        dotRef.current.style.transform = "translate(-50%, -50%) scale(1)";
        outlineRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      }
    }
  };

  useEffect(() => {
    toggleCursorSize();
  }, [cursorEnlarged]);

  return (
    <>
      <div
        ref={dotRef}
        className={`${styles.cursorDot} ${cursorVisible ? styles.visible : ""}`}
      ></div>
      <div
        ref={outlineRef}
        className={`${styles.cursorOutline} ${
          cursorVisible ? styles.visible : ""
        }`}
      ></div>
    </>
  );
};

export default CustomCursor;
