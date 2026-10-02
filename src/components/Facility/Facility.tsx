import Image from "next/image";
import { Reveal } from "@/components/Reveal/Reveal";
import { assetPath } from "@/lib/assetPath";
import styles from "./Facility.module.css";

const details = [
  {
    label: "SPACE",
    lines: ["落ち着いて集中できる、", "洗練された空間。"],
    image: assetPath("/images/facility/facility_black_studio.webp"),
    alt: "BEYOND中野店の落ち着いたブラックスタジオ",
    className: styles.space,
  },
  {
    label: "EQUIPMENT",
    lines: ["目的に合わせて使える、", "充実した設備。"],
    image: assetPath("/images/facility/facility_dumbbells.webp"),
    alt: "BEYOND中野店に並ぶダンベル設備",
    className: styles.equipment,
  },
  {
    label: "AMENITY",
    lines: ["トレーニング前後まで", "快適に。"],
    image: assetPath("/images/facility/facility_sink_amenities.webp"),
    alt: "BEYOND中野店の洗面台とアメニティ",
    className: styles.amenity,
  },
];

export function Facility() {
  return (
    <section id="facility" className={styles.section} aria-labelledby="facility-heading">
      <div className="container-wide">
        <div className={styles.intro}>
          <header className={styles.copy}>
            <Reveal as="p" className={`eyebrow font-en ${styles.eyebrow}`}>
              FACILITY
            </Reveal>
            <Reveal as="h2" id="facility-heading" className={styles.heading} delay={70}>
              <span>洗練された空間で、</span>
              <span>通う時間まで心地よく。</span>
            </Reveal>
            <Reveal as="p" className={styles.lead} delay={140}>
              <span>トレーニングに集中できる空間と、</span>
              <span>快適に通える環境を整えています。</span>
            </Reveal>
          </header>

          <Reveal className={styles.mainImageWrap} variant="fade">
            <Image
              className={styles.image}
              src={assetPath("/images/facility/facility_main_floor.webp")}
              alt="BEYOND中野店のトレーニングフロア全景"
              fill
              loading="lazy"
              quality={90}
              sizes="(max-width: 767px) calc(100vw - 40px), 64vw"
            />
          </Reveal>
        </div>

        <div className={styles.details}>
          {details.map((detail, index) => (
            <Reveal
              as="figure"
              className={`${styles.detail} ${detail.className}`}
              delay={index * 70}
              variant="fade"
              key={detail.label}
            >
              <div className={styles.detailImageWrap}>
                <Image
                  className={styles.image}
                  src={detail.image}
                  alt={detail.alt}
                  fill
                  loading="lazy"
                  quality={90}
                  sizes="(max-width: 767px) calc(50vw - 26px), 52vw"
                />
              </div>
              <figcaption className={styles.caption}>
                <span className={styles.accent} aria-hidden="true" />
                <span className={`font-en ${styles.label}`}>{detail.label}</span>
                <span className={styles.description}>
                  {detail.lines.map((line) => (
                    <span className={styles.descriptionLine} key={line}>
                      {line}
                    </span>
                  ))}
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
