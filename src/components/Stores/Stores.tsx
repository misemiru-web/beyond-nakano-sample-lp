import Image from "next/image";
import { annexStore, nakanoStore } from "@/data/siteContent";
import { assetPath } from "@/lib/assetPath";
import styles from "./Stores.module.css";

const stores = [
  {
    name: nakanoStore.shortName,
    access: nakanoStore.access,
    hours: `${nakanoStore.hours} / 年中無休`,
    image: assetPath("/images/stores/store_nakano_main.webp"),
    alt: "BEYOND中野店の明るい受付空間",
    className: styles.nakano,
  },
  {
    name: annexStore.shortName,
    access: annexStore.access,
    hours: `${annexStore.hours} / ${annexStore.businessDays}`,
    image: assetPath("/images/stores/store_annex_main.webp"),
    alt: "BEYOND中野ANNEX店のトレーニング空間",
    className: styles.annex,
  },
];

export function Stores() {
  return (
    <section className={styles.section} aria-labelledby="stores-heading">
      <div className="container-wide">
        <header className={styles.header}>
          <p className={`eyebrow font-en ${styles.eyebrow}`}>STORES</p>
          <h2 id="stores-heading" className={styles.heading}>
            中野で、続けやすい2つの拠点。
          </h2>
        </header>

        <div className={styles.grid}>
          {stores.map((store) => (
            <article className={`${styles.store} ${store.className}`} key={store.name}>
              <div className={styles.imageWrap}>
                <Image
                  className={styles.image}
                  src={store.image}
                  alt={store.alt}
                  fill
                  loading="lazy"
                  quality={90}
                  sizes="(max-width: 767px) calc(100vw - 40px), 62vw"
                />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{store.name}</h3>
                <div className={styles.details}>
                  <p>{store.access}</p>
                  <p className={`font-en ${styles.hours}`}>{store.hours}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
