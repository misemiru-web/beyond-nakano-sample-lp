"use client";

import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { nakanoStore, sampleNotices } from "@/data/siteContent";
import { assetPath } from "@/lib/assetPath";

import styles from "./FinalCta.module.css";

type SampleAction = "reservation" | "line";

export function FinalCta() {
  const [sampleNotice, setSampleNotice] = useState("");

  const showSampleNotice = (action: SampleAction) => {
    setSampleNotice(
      action === "reservation" ? sampleNotices.reservation : sampleNotices.line,
    );
  };

  return (
    <section
      id="reservation"
      className={styles.section}
      aria-labelledby="reservation-heading"
    >
      <picture className={styles.picture}>
        <source
          media="(max-width: 767px)"
          srcSet={assetPath("/images/hero/hero_01_training_coaching_mobile.webp")}
          type="image/webp"
        />
        <Image
          className={styles.image}
          src={assetPath("/images/hero/hero_01_training_coaching_v2.webp")}
          alt="BEYOND中野店でトレーナーのサポートを受けながらトレーニングする様子"
          fill
          loading="lazy"
          quality={90}
          sizes="100vw"
        />
      </picture>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`container-wide ${styles.container}`}>
        <div className={styles.content}>
          <p className={`font-en ${styles.eyebrow}`}>
            <span aria-hidden="true" />
            START YOUR JOURNEY
            <span aria-hidden="true" />
          </p>
          <h2 id="reservation-heading" className={styles.heading}>
            <span>まずは、</span>
            <span>体験から。</span>
          </h2>
          <p className={styles.lead}>
            <span>無理な勧誘はなく、現在のお悩みや目標に合わせてご相談いただけます。</span>
            <span>まずは無料体験・無料カウンセリングから、お気軽にお越しください。</span>
          </p>

          <div className={styles.actions}>
            <button
              className={`button button--primary ${styles.primaryButton}`}
              type="button"
              onClick={() => showSampleNotice("reservation")}
            >
              <span>無料体験を予約する</span>
              <ArrowRight aria-hidden="true" size={19} strokeWidth={1.65} />
            </button>
            <button
              className={`button ${styles.lineButton}`}
              type="button"
              onClick={() => showSampleNotice("line")}
            >
              <span>LINEで相談する</span>
              <ArrowRight aria-hidden="true" size={19} strokeWidth={1.65} />
            </button>
          </div>

          <a className={styles.phoneLink} href={nakanoStore.telHref}>
            <Phone aria-hidden="true" size={20} strokeWidth={1.65} />
            <span>電話で問い合わせる</span>
            <ArrowRight aria-hidden="true" size={18} strokeWidth={1.65} />
          </a>

          <p className={styles.sampleNotice} role="status" aria-live="polite">
            {sampleNotice}
          </p>
        </div>
      </div>
    </section>
  );
}
