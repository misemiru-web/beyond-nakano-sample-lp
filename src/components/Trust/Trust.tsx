import Image from "next/image";
import { Reveal } from "@/components/Reveal/Reveal";
import { assetPath } from "@/lib/assetPath";

import styles from "./Trust.module.css";

const currentAwards = [
  { category: "TRAINER", title: "優良賞", detail: "トレーナー部門" },
  { category: "STORE", title: "優秀賞", detail: "店舗部門" },
] as const;

const getfitAwards = [
  {
    year: "2021",
    src: assetPath("/images/awards/award_getfit_2021_beginner_no1_optimized.webp"),
    alt: "Getfit AWARD 2021 ダイエット初心者から選ばれているパーソナルジム1位",
    width: 2048,
    height: 2046,
  },
  {
    year: "2022",
    src: assetPath("/images/awards/award_getfit_2022_selected_no1_optimized.webp"),
    alt: "Getfit AWARD 2022 みんなに選ばれているパーソナルジム1位",
    width: 720,
    height: 720,
  },
  {
    year: "2023",
    src: assetPath("/images/awards/award_getfit_2023_selected_no1_optimized.webp"),
    alt: "Getfit AWARD 2023 みんなに選ばれているパーソナルジム1位",
    width: 1284,
    height: 1290,
  },
] as const;

export function Trust() {
  return (
    <section className={styles.section} aria-labelledby="trust-heading">
      <div className="container-wide">
        <div className={styles.mainRecognition}>
          <header className={styles.header}>
            <Reveal as="p" className={`eyebrow font-en ${styles.eyebrow}`}>
              TRUST / AWARDS
            </Reveal>
            <Reveal as="h2" id="trust-heading" className={styles.heading} delay={70}>
              <span>積み重ねた実績を、</span>
              <span>評価のかたちに。</span>
            </Reveal>
          </header>

          <Reveal className={styles.mainVisual} variant="fade" delay={70}>
            <Image
              src={assetPath("/images/awards/award_team_2025_optimized.webp")}
              alt="BEYOND AWARD 2025でトレーナー部門優良賞と店舗部門優秀賞を受賞したメンバー"
              fill
              loading="lazy"
              quality={90}
              sizes="(max-width: 767px) calc(100vw - 40px), 42vw"
            />
          </Reveal>

          <Reveal className={styles.currentDetails} delay={140}>
            <p className={`font-en ${styles.awardProgram}`}>
              BEYOND AWARD 2025
            </p>
            <dl className={styles.awards}>
              {currentAwards.map((award) => (
                <div className={styles.award} key={award.category}>
                  <dt className="font-en">{award.category}</dt>
                  <dd>
                    <strong>{award.title}</strong>
                    <span>{award.detail}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className={styles.externalRecognition}>
          <Reveal as="p" className={`eyebrow font-en ${styles.externalLabel}`}>
            RECOGNITION HISTORY
          </Reveal>

          <div className={styles.externalGroups}>
            <Reveal
              as="section"
              className={styles.bestGymGroup}
              aria-labelledby="best-gym-heading"
            >
              <h3 id="best-gym-heading" className={`font-en ${styles.groupHeading}`}>
                BEST GYM AWARD
              </h3>
              <div className={styles.bestEntry}>
                <p className={`font-en ${styles.year}`}>2020</p>
                <div className={styles.bestGymVisual}>
                  <Image
                    src={assetPath("/images/awards/award_best_gym_2020_optimized.webp")}
                    alt="BEST GYM AWARD 2020 優良ジム受賞"
                    width={571}
                    height={155}
                    loading="lazy"
                    sizes="(max-width: 767px) calc(100vw - 40px), 22vw"
                  />
                </div>
              </div>
            </Reveal>

            <section className={styles.getfitGroup} aria-labelledby="getfit-heading">
              <Reveal
                as="h3"
                id="getfit-heading"
                className={`font-en ${styles.groupHeading}`}
                delay={70}
              >
                GETFIT AWARD <span>2021–2023 / 3 YEARS</span>
              </Reveal>
              <div className={styles.timeline}>
                {getfitAwards.map((award, index) => (
                  <Reveal
                    as="figure"
                    className={styles.getfitAward}
                    delay={index * 70}
                    key={award.year}
                  >
                    <figcaption className={`font-en ${styles.year}`}>
                      {award.year}
                    </figcaption>
                    <div className={styles.getfitVisual}>
                      <Image
                        src={award.src}
                        alt={award.alt}
                        width={award.width}
                        height={award.height}
                        loading="lazy"
                        sizes="(max-width: 767px) 28vw, 13vw"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
