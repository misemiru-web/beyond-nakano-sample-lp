import { ArrowRight, CalendarDays, Clock, MapPin, Train } from "lucide-react";
import Image from "next/image";

import { externalLinks, nakanoStore } from "@/data/siteContent";
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
    label: "営業日",
    lines: [nakanoStore.businessDays],
  },
] as const;

export function Access() {
  return (
    <section id="access" className={styles.section} aria-labelledby="access-heading">
      <div className={`container-wide ${styles.container}`}>
        <header className={styles.header}>
          <p className={`eyebrow font-en ${styles.eyebrow}`}>ACCESS</p>
          <h2 id="access-heading" className={styles.heading}>
            <span>中野駅から、</span>
            <span>徒歩1分。</span>
          </h2>
          <p className={styles.lead}>
            初めての方でも迷わずお越しいただけるよう、
            <span>写真付きで道順をご案内します。</span>
          </p>
        </header>

        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li className={styles.step} key={step.number}>
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
            </li>
          ))}
        </ol>

        <div className={styles.location}>
          <div className={styles.map}>
            <iframe
              src={externalLinks.googleMapsEmbed}
              title="BEYOND中野店のGoogle Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className={styles.shopInfo}>
            <p className={`font-en ${styles.shopLabel}`}>SHOP INFORMATION</p>
            <h3>{nakanoStore.name}</h3>
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
              href={externalLinks.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Mapsで見る
              <ArrowRight aria-hidden="true" size={18} strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
