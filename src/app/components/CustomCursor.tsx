"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const amount = 20;
  const sineDots = Math.floor(amount * 0.3);
  const width = 26;
  const idleTimeout = 150;
  let lastFrame = 0;
  let mousePosition = { x: 0, y: 0 };
  let dots: any[] = [];
  let timeoutID: any;
  let idle = false;

  class Dot {
    index: number;
    element: HTMLSpanElement;
    anglespeed: number;
    x: number;
    y: number;
    scale: number;
    range: number;
    limit: number;
    lockX?: number;
    lockY?: number;
    angleX?: number;
    angleY?: number;

    constructor(index = 0) {
      this.index = index;
      this.anglespeed = 0.05;
      this.x = 0;
      this.y = 0;
      this.scale = 1 - 0.05 * index;
      this.range = width / 2 - (width / 2) * this.scale + 2;
      this.limit = width * 0.75 * this.scale;
      this.element = document.createElement("span");
      gsap.set(this.element, { scale: this.scale });
      cursorRef.current!.appendChild(this.element);
    }

    lock() {
      this.lockX = this.x;
      this.lockY = this.y;
      this.angleX = Math.PI * 2 * Math.random();
      this.angleY = Math.PI * 2 * Math.random();
    }

    draw(delta: number) {
      if (!idle || this.index <= sineDots) {
        gsap.set(this.element, { x: this.x, y: this.y });
      } else {
        this.angleX = (this.angleX ?? 0) + this.anglespeed;
        this.angleY = (this.angleY ?? 0) + this.anglespeed;
        this.y = (this.lockY ?? 0) + Math.sin(this.angleY) * this.range;
        this.x = (this.lockX ?? 0) + Math.sin(this.angleX) * this.range;
        gsap.set(this.element, { x: this.x, y: this.y });
      }
    }
  }

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const startIdleTimer = () => {
      timeoutID = setTimeout(goInactive, idleTimeout);
      idle = false;
    };

    const resetIdleTimer = () => {
      clearTimeout(timeoutID);
      startIdleTimer();
    };

    const goInactive = () => {
      idle = true;
      dots.forEach((dot) => dot.lock());
    };

    const onMouseMove = (event: MouseEvent) => {
      mousePosition.x = event.clientX - width / 2;
      mousePosition.y = event.clientY - width / 2;
      resetIdleTimer();
    };

    const onTouchMove = (event: TouchEvent) => {
      mousePosition.x = event.touches[0].clientX - width / 2;
      mousePosition.y = event.touches[0].clientY - width / 2;
      resetIdleTimer();
    };

    const buildDots = () => {
      for (let i = 0; i < amount; i++) {
        dots.push(new Dot(i));
      }
    };

    const render = (timestamp: number) => {
      const delta = timestamp - lastFrame;
      positionCursor(delta);
      lastFrame = timestamp;
      requestAnimationFrame(render);
    };

    const positionCursor = (delta: number) => {
      let x = mousePosition.x;
      let y = mousePosition.y;
      dots.forEach((dot, index, dots) => {
        const nextDot = dots[index + 1] || dots[0];
        dot.x = x;
        dot.y = y;
        dot.draw(delta);
        if (!idle || index <= sineDots) {
          const dx = (nextDot.x - dot.x) * 0.35;
          const dy = (nextDot.y - dot.y) * 0.35;
          x += dx;
          y += dy;
        }
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);

    startIdleTimer();
    buildDots();
    requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return <div ref={cursorRef} id="cursor" className="dot-cursor"></div>;
};

export default CustomCursor;
