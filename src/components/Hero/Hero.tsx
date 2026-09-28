"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Pause,
  Play,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
  type TouchEvent,
} from "react";
import { sampleNotices } from "@/data/siteContent";
import { assetPath } from "@/lib/assetPath";
import styles from "./Hero.module.css";

const SLIDE_DURATION = 4_000;

const heroImages = [
  {
    src: assetPath("/images/hero/hero_01_training_coaching_v2.webp"),
    mobileSrc: assetPath("/images/hero/hero_01_training_coaching_mobile.webp"),
    alt: "BEYOND中野店でトレーナーが利用者のトレーニングをサポートしている様子",
    positionClass: "positionCoaching",
    overlayClass: "overlayCoaching",
  },
  {
    src: assetPath("/images/hero/hero_02_treadmill_v2.webp"),
    alt: "BEYOND中野店の落ち着いた空間でトレッドミルを使うトレーナー",
    positionClass: "positionTreadmill",
    overlayClass: "overlayTreadmill",
  },
  {
    src: assetPath("/images/hero/hero_03_barbell_back_v2.webp"),
    alt: "BEYOND中野店でバーベルトレーニングに取り組むトレーナーの後ろ姿",
    positionClass: "positionBarbell",
    overlayClass: "overlayBarbell",
  },
  {
    src: assetPath("/images/hero/hero_04_brand_female_wide_v2.webp"),
    alt: "トレーニングの準備をする女性のブランドビジュアル",
    positionClass: "positionBrand",
    overlayClass: "overlayBrand",
  },
] as const;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFocusPaused, setIsFocusPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [sequenceKey, setSequenceKey] = useState(0);
  const [sampleNotice, setSampleNotice] = useState("");
  const touchStartX = useRef<number | null>(null);

  const isSequenceStopped =
    isPaused || isFocusPaused || prefersReducedMotion;
  const activeImage = heroImages[activeIndex];

  const showNext = useCallback(() => {
    setIsFocusPaused(false);
    setActiveIndex((current) => (current + 1) % heroImages.length);
    setSequenceKey((current) => current + 1);
  }, []);

  const showPrevious = useCallback(() => {
    setIsFocusPaused(false);
    setActiveIndex(
      (current) => (current - 1 + heroImages.length) % heroImages.length,
    );
    setSequenceKey((current) => current + 1);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (isSequenceStopped) return;

    const timer = window.setTimeout(showNext, SLIDE_DURATION);
    return () => window.clearTimeout(timer);
  }, [activeIndex, isSequenceStopped, sequenceKey, showNext]);

  const showSampleNotice = (type: "reservation" | "line") => {
    setSampleNotice(type === "reservation" ? sampleNotices.reservation : sampleNotices.line);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  };

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsFocusPaused(false);
      if (!isPaused && !prefersReducedMotion) {
        setSequenceKey((current) => current + 1);
      }
    }
  };

  const togglePlayback = () => {
    if (isPaused) {
      setIsPaused(false);
      setIsFocusPaused(false);
      setSequenceKey((current) => current + 1);
      return;
    }

    setIsPaused(true);
  };

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) return;

    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 48) return;

    if (distance > 0) {
      showPrevious();
    } else {
      showNext();
    }
  };

  return (
    <section
      id="top"
      className={styles.hero}
      aria-labelledby="hero-heading"
      aria-roledescription="カルーセル"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onFocusCapture={() => setIsFocusPaused(true)}
      onBlurCapture={handleBlur}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.media}>
        {heroImages.map((image, index) => {
          const isActive = index === activeIndex;
          const imageElement = (
            <Image
              className={`${styles.image} ${styles[image.positionClass]}`}
              src={image.src}
              alt={isActive ? image.alt : ""}
              fill
              preload={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              quality={90}
              sizes="(max-width: 767px) 250vw, 100vw"
            />
          );

          return (
            <div
              className={`${styles.slide} ${isActive ? styles.slideActive : ""}`}
              role="group"
              aria-roledescription="スライド"
              aria-label={`${index + 1} / ${heroImages.length}`}
              aria-hidden={!isActive}
              key={image.src}
            >
              {"mobileSrc" in image ? (
                <picture className={styles.picture}>
                  <source
                    media="(max-width: 767px)"
                    srcSet={image.mobileSrc}
                    type="image/webp"
                  />
                  {imageElement}
                </picture>
              ) : (
                imageElement
              )}
            </div>
          );
        })}
      </div>

      <div
        className={`${styles.overlay} ${styles[activeImage.overlayClass]}`}
        aria-hidden="true"
      />

      <div className={`container-wide ${styles.content}`}>
        <div className={styles.copy}>
          <p className={`eyebrow ${styles.eyebrow}`}>
            <span aria-hidden="true" />
            BEYOND GYM 中野店
          </p>
          <h1 id="hero-heading" className={styles.heading}>
            <span className={styles.headingLine}>中野で、</span>
            <span className={styles.headingPhrase}>
              <strong>理想を</strong>超える。
            </span>
          </h1>
          <p className={styles.lead}>
            <span>トレーニングと食事サポートで、</span>
            <span>
              <span>理想のカラダを、</span>
              <span>無理なく、着実に。</span>
            </span>
          </p>

          <p className={`font-en ${styles.trustLine}`}>
            <span>BEYOND AWARD 2025</span>
            <span aria-hidden="true" />
            <span>優秀賞・店舗部門</span>
          </p>

          <div id="hero-actions" className={styles.actions}>
            <button
              className="button button--primary"
              type="button"
              onClick={() => showSampleNotice("reservation")}
            >
              無料体験を予約する
              <ArrowRight aria-hidden="true" size={19} strokeWidth={1.75} />
            </button>
            <button
              className="button button--secondary-inverse"
              type="button"
              onClick={() => showSampleNotice("line")}
            >
              <MessageCircle aria-hidden="true" size={19} strokeWidth={1.75} />
              LINEで相談する
            </button>
          </div>
          <p className={styles.sampleNotice} role="status">
            {sampleNotice}
          </p>
        </div>

        <div className={styles.sequenceControls} aria-label="Hero画像の操作">
          <p className={`font-en ${styles.sequenceCount}`} aria-live="polite">
            <span>{String(activeIndex + 1).padStart(2, "0")}</span>
            <span aria-hidden="true">/</span>
            <span>{String(heroImages.length).padStart(2, "0")}</span>
          </p>

          <div className={styles.progressTrack} aria-hidden="true">
            <span
              className={`${styles.progressFill} ${
                isSequenceStopped ? styles.progressPaused : ""
              }`}
              key={`${activeIndex}-${sequenceKey}`}
            />
          </div>

          <div className={styles.sequenceActions}>
            <button type="button" onClick={showPrevious} aria-label="前の画像を表示">
              <ArrowLeft aria-hidden="true" size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={togglePlayback}
              aria-label={isPaused ? "自動再生を再開" : "自動再生を一時停止"}
            >
              {isPaused ? (
                <Play aria-hidden="true" size={17} strokeWidth={1.5} />
              ) : (
                <Pause aria-hidden="true" size={17} strokeWidth={1.5} />
              )}
            </button>
            <button type="button" onClick={showNext} aria-label="次の画像を表示">
              <ArrowRight aria-hidden="true" size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
