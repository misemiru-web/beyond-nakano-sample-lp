"use client";

import { ArrowRight, CalendarDays, Clock, MapPin, Phone, Train } from "lucide-react";
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

import styles from "./Access.module.css";

const steps = [
  {
    number: "01",
    image: assetPath("/images/access/access_01_nakano_station_north_exit.webp"),
    alt: "中野駅北口改札を出た場所の風景",
    text: "中野駅北口改札に出ます。",
  },
  {
    number: "02",
    image: assetPath("/images/access/access_02_bunmeido_turn.webp"),
    alt: "文明堂の角を左折する道順",
    text: "商店街には入らず文明堂を左折し、突き当たりを右折。",
  },
  {
    number: "03",
    image: assetPath("/images/access/access_03_starbucks_street.webp"),
    alt: "スターバックスがある通りの風景",
    text: "スターバックスがある通りを道なりに進みます。",
  },
  {
    number: "04",
    image: assetPath("/images/access/access_04_lantern_building.webp"),
    alt: "BEYOND中野店が入る提灯の見えるビル",
    text: "提灯が見えてくるので、そのビル内にBEYOND中野店があります。",
  },
  {
    number: "05",
    image: assetPath("/images/access/access_05_elevator_entrance.webp"),
    alt: "BEYOND中野店へ上がる赤いエレベーターの入口",
    text: "真ん中の入口を進み、赤いエレベーターで4階までお上がりください。",
  },
] as const;

const shopDetails = [
  {
    icon: MapPin,
    label: "所在地",
    lines: nakanoStore.addressLines,
  },
  {
    icon: Train,
    label: "アクセス",
    lines: nakanoStore.accessLines,
  },
  {
    icon: Clock,
    label: "営業時間",
    lines: [`営業時間 ${nakanoStore.hours}`],
  },
  {
    icon: CalendarDays,
    label: "定休日",
    lines: [nakanoStore.businessDays],
  },
] as const;

export function Access() {
  const [sampleNotice, setSampleNotice] = useState("");

  return (
    <section id="access" className={styles.section} aria-labelledby="access-heading">
      <div className={`container-wide ${styles.container}`}>
        <header className={styles.header}>
          <Reveal as="p" className={`eyebrow font-en ${styles.eyebrow}`}>
            ACCESS
          </Reveal>
          <Reveal as="h2" id="access-heading" className={styles.heading} delay={70}>
            <span>2つの店舗への</span>
            <span>アクセス。</span>
          </Reveal>
          <Reveal as="p" className={styles.lead} delay={140}>
            中野店は写真付きの5STEP、中野ANNEX店は確認済みの店舗情報でご案内します。
          </Reveal>
        </header>

        <Reveal className={styles.accessBlockHeading}>
          <p className={`font-en ${styles.accessLabel}`}>NAKANO ACCESS</p>
          <h3>中野駅北口から、徒歩1分。</h3>
          <p>初めての方でも迷わずお越しいただけるよう、写真で道順をご案内します。</p>
        </Reveal>

        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <Reveal
              as="li"
              className={styles.step}
              delay={index * 80}
              key={step.number}
            >
              <div className={styles.photo}>
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  loading="lazy"
                  quality={90}
                  sizes="(max-width: 767px) 43vw, 20vw"
                />
              </div>
              <div className={styles.stepBody}>
                <div className={styles.stepIndex}>
                  <span className={`font-en ${styles.number}`}>{step.number}</span>
                  {index < steps.length - 1 ? (
                    <>
                      <span className={styles.routeLine} aria-hidden="true" />
                      <ArrowRight
                        className={styles.routeArrow}
                        aria-hidden="true"
                        size={17}
                        strokeWidth={1.5}
                      />
                    </>
                  ) : null}
                </div>
                <p>{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className={styles.location}>
          <Reveal className={styles.map} variant="fade">
            <iframe
              src={externalLinks.nakanoGoogleMapsEmbed}
              title="BEYOND中野店のGoogle Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>

          <Reveal className={styles.shopInfo} delay={80}>
            <p className={`font-en ${styles.shopLabel}`}>SHOP INFORMATION</p>
            <h4>{nakanoStore.name}</h4>
            <dl className={styles.shopDetails}>
              {shopDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div className={styles.shopDetail} key={detail.label}>
                    <dt>
                      <Icon aria-hidden="true" size={20} strokeWidth={1.75} />
                      <span className="visually-hidden">{detail.label}</span>
                    </dt>
                    <dd>
                      {detail.lines.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </dd>
                  </div>
                );
              })}
            </dl>
            <a
              className={`button button--primary ${styles.mapsButton}`}
              href={externalLinks.nakanoGoogleMaps}
              target="_blank"
              rel="noopener noreferrer"
            >
              中野店をGoogle Mapsで見る
              <ArrowRight aria-hidden="true" size={18} strokeWidth={1.75} />
            </a>
          </Reveal>
        </div>

        <article className={styles.annexAccess} aria-labelledby="annex-access-heading">
          <Reveal className={styles.annexPhoto} variant="fade">
            <Image
              src={assetPath("/images/stores/store_annex_main.webp")}
              alt="BEYOND中野ANNEX店のトレーニング空間"
              fill
              loading="lazy"
              quality={90}
              sizes="(max-width: 767px) calc(100vw - 40px), 52vw"
            />
          </Reveal>

          <Reveal className={styles.annexInfo} delay={80}>
            <p className={`font-en ${styles.accessLabel}`}>NAKANO ANNEX ACCESS</p>
            <h3 id="annex-access-heading">{annexStore.shortName}</h3>
            <p className={styles.annexAccessLead}>{annexStore.access}</p>

            <dl className={styles.annexDetails}>
              <div>
                <dt>
                  <MapPin aria-hidden="true" size={20} strokeWidth={1.75} />
                  <span className="visually-hidden">所在地</span>
                </dt>
                <dd>{annexStore.address}</dd>
              </div>
              <div>
                <dt>
                  <Train aria-hidden="true" size={20} strokeWidth={1.75} />
                  <span className="visually-hidden">アクセス</span>
                </dt>
                <dd>
                  {annexStore.accessLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </dd>
              </div>
              <div>
                <dt>
                  <Clock aria-hidden="true" size={20} strokeWidth={1.75} />
                  <span className="visually-hidden">営業時間</span>
                </dt>
                <dd>
                  {annexStore.hours} / {annexStore.businessDays}
                </dd>
              </div>
              <div>
                <dt>
                  <Phone aria-hidden="true" size={20} strokeWidth={1.75} />
                  <span className="visually-hidden">電話</span>
                </dt>
                <dd>
                  <a href={annexStore.telHref}>{annexStore.telDisplay}</a>
                </dd>
              </div>
            </dl>

            <button
              className={`button ${styles.annexMapsButton}`}
              type="button"
              onClick={() => setSampleNotice(sampleNotices.annexMap)}
            >
              ANNEX店のGoogle Maps
              <span>正式制作時に設定</span>
            </button>
            <p className={styles.sampleNotice} role="status" aria-live="polite">
              {sampleNotice}
            </p>
          </Reveal>
        </article>
      </div>
    </section>
  );
}
