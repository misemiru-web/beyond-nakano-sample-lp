import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { assetPath } from "@/lib/assetPath";

import styles from "./Blog.module.css";

const articles = [
  {
    date: "2026.08.28",
    title:
      "肩の痛みと肩甲骨の動き｜インピンジメントを防ぐために知っておきたいこと",
    href: "https://beyond-nakano.jp/%E8%82%A9%E3%81%AE%E7%97%9B%E3%81%BF%E3%81%A8%E8%82%A9%E7%94%B2%E9%AA%A8%E3%81%AE%E5%8B%95%E3%81%8D%EF%BD%9C%E3%82%A4%E3%83%B3%E3%83%94%E3%83%B3%E3%82%B8%E3%83%A1%E3%83%B3%E3%83%88%E3%82%92%E9%98%B2/",
  },
  {
    date: "2026.08.19",
    title: "㊗️ ２店舗目、BEYOND中野ANNEX店オープン！！🎉",
    href: "https://beyond-nakano.jp/%E3%8A%97%EF%B8%8F-%EF%BC%92%E5%BA%97%E8%88%97%E7%9B%AE%E3%80%81beyond%E4%B8%AD%E9%87%8Eannex%E5%BA%97%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%EF%BC%81%EF%BC%81%F0%9F%8E%89/",
  },
  {
    date: "2026.07.31",
    title:
      "ストレッチしても体が硬い理由は「水不足」？コーヒー好きがハマるコリの落とし穴",
    href: "https://beyond-nakano.jp/%E3%82%B9%E3%83%88%E3%83%AC%E3%83%83%E3%83%81%E3%81%97%E3%81%A6%E3%82%82%E4%BD%93%E3%81%8C%E7%A1%AC%E3%81%84%E7%90%86%E7%94%B1%E3%81%AF%E3%80%8C%E6%B0%B4%E4%B8%8D%E8%B6%B3%E3%80%8D%EF%BC%9F%E3%82%B3/",
  },
] as const;

const blogIndexUrl = "https://beyond-nakano.jp/news/";

export function Blog() {
  return (
    <section id="blog" className={styles.section} aria-labelledby="blog-heading">
      <div className={`container-wide ${styles.inner}`}>
        <div className={styles.headerLayout}>
          <header className={styles.header}>
            <p className={`eyebrow font-en ${styles.eyebrow}`}>BLOG</p>
            <h2 id="blog-heading" className={styles.heading}>
              <span>中野店から、</span>
              <span>身体づくりのヒントを。</span>
            </h2>
            <p className={styles.lead}>
              トレーニングや身体のこと、中野店の最新情報をお届けします。
            </p>
          </header>

          <div className={styles.headerVisual}>
            <Image
              src={assetPath("/images/brand/beyond_nakano_blog_logo.webp")}
              alt="BEYOND NAKANO"
              width={400}
              height={319}
              loading="lazy"
              quality={90}
              sizes="(max-width: 767px) 1px, 560px"
            />
          </div>
        </div>

        <div className={styles.articles}>
          {articles.map((article) => (
            <article className={styles.article} key={article.date}>
              <p className={`font-en ${styles.date}`}>{article.date}</p>
              <h3 className={styles.title}>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {article.title}
                </a>
              </h3>
              <a
                className={styles.readLink}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                記事を読む
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.6} />
              </a>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <a
            className={styles.indexLink}
            href={blogIndexUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            BLOG一覧を見る
            <ArrowRight aria-hidden="true" size={18} strokeWidth={1.6} />
          </a>
        </div>
      </div>
    </section>
  );
}
