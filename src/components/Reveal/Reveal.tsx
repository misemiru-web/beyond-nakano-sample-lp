"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import styles from "./Reveal.module.css";

type RevealVariant = "up" | "fade";

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
  delay?: number;
  duration?: number;
  href?: string;
  variant?: RevealVariant;
};

type RevealStyle = CSSProperties & {
  "--reveal-delay": string;
  "--reveal-duration": string;
};

const revealCallbacks = new Map<Element, () => void>();
let sharedObserver: IntersectionObserver | null = null;

function getObserver() {
  if (sharedObserver) return sharedObserver;

  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        revealCallbacks.get(entry.target)?.();
        revealCallbacks.delete(entry.target);
        sharedObserver?.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12,
    },
  );

  return sharedObserver;
}

export function Reveal({
  as = "div",
  children,
  className = "",
  delay = 0,
  duration = 600,
  style,
  variant = "up",
  ...props
}: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isArmed, setIsArmed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const revealImmediately = () => {
      revealCallbacks.delete(element);
      sharedObserver?.unobserve(element);
      setIsVisible(true);
    };

    const bounds = element.getBoundingClientRect();
    const isInitiallyVisible =
      bounds.bottom >= 0 && bounds.top <= window.innerHeight * 0.94;

    if (
      motionPreference.matches ||
      !("IntersectionObserver" in window) ||
      isInitiallyVisible
    ) {
      setIsVisible(true);
      return;
    }

    setIsArmed(true);
    revealCallbacks.set(element, revealImmediately);
    getObserver().observe(element);
    motionPreference.addEventListener("change", revealImmediately, {
      once: true,
    });

    return () => {
      revealCallbacks.delete(element);
      sharedObserver?.unobserve(element);
      motionPreference.removeEventListener("change", revealImmediately);
    };
  }, []);

  const revealStyle: RevealStyle = {
    ...style,
    "--reveal-delay": `${delay}ms`,
    "--reveal-duration": `${duration}ms`,
  };
  const Component = as;

  return (
    <Component
      {...props}
      ref={elementRef}
      className={[
        styles.reveal,
        styles[variant],
        isArmed ? styles.armed : "",
        isVisible ? styles.visible : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={revealStyle}
      data-reveal={variant}
      data-reveal-visible={isVisible ? "true" : "false"}
    >
      {children}
    </Component>
  );
}
