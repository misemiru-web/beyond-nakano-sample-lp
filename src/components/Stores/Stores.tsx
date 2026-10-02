"use client";

import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Phone,
  TrainFront,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Reveal } from "@/components/Reveal/Reveal";
import {
  annexStore,
  externalLinks,
  nakanoStore,
  sampleNotices,
} from "@/data/siteContent";
import { assetPath } from "@/lib/assetPath";

import styles from "./Stores.module.css";

const stores = [
  {
    key: "nakano",
    label: "NAKANO / PRIMARY",
    store: nakanoStore,
    image: assetPath("/images/stores/store_nakano_main.webp"),
    alt: "BEYOND中野店の受付空間",
    mapUrl: externalLinks.nakanoGoogleMaps,
  },
  {
    key: "annex",
    label: "NAKANO ANNEX / SECONDARY",
    store: annexStore,
    image: assetPath("/images/stores/store_annex_main.webp"),
    alt: "BEYOND中野ANNEX店のトレーニング空間",
    mapUrl: null,
  },
] as const;

export function Stores() {
  const [sampleNotice, setSampleNotice] = useState("");

  return (
    <section
      id="locations"
      className={styles.section}
      aria-labelledby="stores-heading"
    >
      <div className="container-wide">
        <header className={styles.header}>
          <Reveal as="p" className={`eyebrow font-en ${styles.eyebrow}`}>
            LOCATIONS / 2 STORES
          </Reveal>
          <Reveal as="h2" id="stores-heading" className={styles.heading} delay={70}>
            中野で、続けやすい2つの拠点。
          </Reveal>
          <Reveal as="p" className={styles.lead} delay={140}>
            中野店と中野ANNEX店、それぞれの所在地とアクセスをご案内します。
          </Reveal>
        </header>

        <div className={styles.stores}>
          {stores.map(({ key, label, store, image, alt, mapUrl }) => (
            <article
              className={`${styles.store} ${key === "annex" ? styles.secondary : ""}`}
              key={key}
            >
              <Reveal className={styles.imageWrap} variant="fade">
                <Image
                  className={styles.image}
                  src={image}
                  alt={alt}
                  fill
                  loading="lazy"
                  quality={90}
                  sizes="(max-width: 767px) calc(100vw - 40px), 58vw"
                />
              </Reveal>

              <Reveal className={styles.info} delay={80}>
                <p className={`font-en ${styles.storeLabel}`}>{label}</p>
                <h3 className={styles.name}>{store.shortName}</h3>

                <dl className={styles.details}>
                  <div>
                    <dt>
                      <MapPin aria-hidden="true" size={19} strokeWidth={1.7} />
                      <span>所在地</span>
                    </dt>
                    <dd>
                      {store.postalCode ? (
                        <>
                          〒{store.postalCode}
                          <br />
                        </>
                      ) : null}
                      {store.address}
                    </dd>
                  </div>
                  <div>
                    <dt>
                      <TrainFront aria-hidden="true" size={19} strokeWidth={1.7} />
                      <span>アクセス</span>
                    </dt>
                    <dd>
                      {store.accessLines.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt>
                      <Clock3 aria-hidden="true" size={19} strokeWidth={1.7} />
                      <span>営業時間</span>
                    </dt>
                    <dd>{store.hours}</dd>
                  </div>
                  <div>
                    <dt>
                      <CalendarDays aria-hidden="true" size={19} strokeWidth={1.7} />
                      <span>定休日</span>
                    </dt>
                    <dd>{store.businessDays}</dd>
                  </div>
                  <div>
                    <dt>
                      <Phone aria-hidden="true" size={19} strokeWidth={1.7} />
                      <span>電話</span>
                    </dt>
                    <dd>
                      <a href={store.telHref}>{store.telDisplay}</a>
                    </dd>
                  </div>
                </dl>

                {mapUrl ? (
                  <a
                    className={`button ${styles.mapButton}`}
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    中野店をGoogle Mapsで見る
                    <ArrowRight aria-hidden="true" size={18} strokeWidth={1.75} />
                  </a>
                ) : (
                  <button
                    className={`button ${styles.mapButton} ${styles.mapButtonPending}`}
                    type="button"
                    onClick={() => setSampleNotice(sampleNotices.annexMap)}
                  >
                    ANNEX店のGoogle Maps
                    <span className={styles.pendingLabel}>正式制作時に設定</span>
                  </button>
                )}
              </Reveal>
            </article>
          ))}
        </div>

        <p className={styles.sampleNotice} role="status" aria-live="polite">
          {sampleNotice}
        </p>
      </div>
    </section>
  );
}
