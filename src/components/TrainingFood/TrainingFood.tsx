import Image from "next/image";
import { Dumbbell, Infinity, Utensils } from "lucide-react";
import { assetPath } from "@/lib/assetPath";
import styles from "./TrainingFood.module.css";

export function TrainingFood() {
  return (
    <section className={styles.section} aria-labelledby="training-food-heading">
      <div className={`container-wide ${styles.layout}`}>
        <div className={styles.trainingVisual}>
          <Image
            className={styles.image}
            src={assetPath("/images/hero/hero_03_barbell_back_v2.webp")}
            alt="BEYOND中野店でバーベルトレーニングに取り組む様子"
            fill
            loading="lazy"
            quality={90}
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), 58vw"
          />
        </div>

        <div className={styles.content}>
          <header className={styles.header}>
            <p className={`eyebrow font-en ${styles.eyebrow}`}>
              TRAIN / EAT / CONTINUE
            </p>
            <h2 id="training-food-heading" className={styles.heading}>
              <span>鍛えるだけで、</span>
              <span>終わらせない。</span>
            </h2>
            <p className={styles.lead}>
              <span>
                <span className={styles.noBreak}>トレーニング</span>と食事の両面から、
              </span>
              <span>
                無理なく続けられる習慣づくりを
                <span className={styles.noBreak}>サポート。</span>
              </span>
            </p>
          </header>

          <div className={`${styles.point} ${styles.trainPoint}`}>
            <h3 className={`font-en ${styles.label}`}>
              <Dumbbell aria-hidden="true" size={20} strokeWidth={1.75} />
              TRAIN
            </h3>
            <p>
              <span>
                一人ひとりに合わせた
                <span className={styles.noBreak}>トレーニング</span>で、
              </span>
              <span>続けられる身体づくりを支える。</span>
            </p>
          </div>

          <div className={styles.foodVisual}>
            <div className={styles.foodImageWrap}>
              <Image
                className={styles.image}
                src={assetPath("/images/training-food/meal_support_01_hq.webp")}
                alt="無理なく続けられる食事をイメージした料理"
                fill
                loading="lazy"
                quality={90}
                sizes="(max-width: 767px) calc(100vw - 40px), 32vw"
              />
            </div>
          </div>

          <div className={styles.point}>
            <h3 className={`font-en ${styles.label}`}>
              <Utensils aria-hidden="true" size={20} strokeWidth={1.75} />
              EAT
            </h3>
            <p>
              <span>極端に制限するのではなく、</span>
              <span>
                <span className={styles.noBreak}>ライフスタイル</span>
                に合わせた食事を考える。
              </span>
            </p>
          </div>

          <div className={styles.point}>
            <h3 className={`font-en ${styles.label}`}>
              <Infinity
                className={styles.continueIcon}
                aria-hidden="true"
                size={22}
                strokeWidth={1.75}
              />
              CONTINUE
            </h3>
            <p>
              <span>一時的な変化ではなく、</span>
              <span>日常の中で続けられる習慣へ。</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
