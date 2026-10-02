"use client";

import { ArrowUpRight, Camera, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import {
  annexStore,
  externalLinks,
  nakanoStore,
  sampleNotices,
} from "@/data/siteContent";
import { assetPath } from "@/lib/assetPath";

import styles from "./Footer.module.css";

const navigationItems = [
  { label: "CONCEPT", href: "#concept" },
  { label: "TRAINERS", href: "#trainers" },
  { label: "FACILITY", href: "#facility" },
  { label: "LOCATIONS", href: "#locations" },
  { label: "ACCESS", href: "#access" },
  { label: "FAQ", href: "#faq" },
] as const;

export function Footer() {
  const [sampleNotice, setSampleNotice] = useState("");

  const showSampleNotice = (service: "Instagram" | "LINE" | "AnnexMap") => {
    if (service === "Instagram") setSampleNotice(sampleNotices.instagram);
    if (service === "LINE") setSampleNotice(sampleNotices.line);
    if (service === "AnnexMap") setSampleNotice(sampleNotices.annexMap);
  };

  return (
    <footer className={styles.footer}>
      <div className={`container-wide ${styles.container}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#top" aria-label="BEYOND中野 ページ上部へ">
              <Image
                src={assetPath(
                  "/images/brand/beyond_nakano_logo_black_transparent_hq.webp",
                )}
                width={1942}
                height={809}
                alt="BEYOND NAKANO"
              />
            </a>
            <p>中野店を主拠点とする、2店舗統合の営業提案用サンプルです。</p>
          </div>

          <div className={styles.locations}>
            <section className={styles.location} aria-labelledby="footer-nakano-heading">
              <p className={`font-en ${styles.locationLabel}`}>NAKANO / PRIMARY</p>
              <h2 id="footer-nakano-heading">{nakanoStore.shortName}</h2>
              <address>
                <span>{nakanoStore.address}</span>
                {nakanoStore.accessLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
                <span>
                  {nakanoStore.hours} / {nakanoStore.businessDays}
                </span>
              </address>
              <div className={styles.locationActions}>
                <a href={nakanoStore.telHref}>
                  <Phone aria-hidden="true" size={17} strokeWidth={1.7} />
                  {nakanoStore.telDisplay}
                </a>
                <a
                  href={externalLinks.nakanoGoogleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin aria-hidden="true" size={17} strokeWidth={1.7} />
                  Google Maps
                  <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.7} />
                </a>
              </div>
            </section>

            <section className={styles.location} aria-labelledby="footer-annex-heading">
              <p className={`font-en ${styles.locationLabel}`}>NAKANO ANNEX / SECONDARY</p>
              <h2 id="footer-annex-heading">{annexStore.shortName}</h2>
              <address>
                <span>{annexStore.address}</span>
                {annexStore.accessLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
                <span>
                  {annexStore.hours} / {annexStore.businessDays}
                </span>
              </address>
              <div className={styles.locationActions}>
                <a href={annexStore.telHref}>
                  <Phone aria-hidden="true" size={17} strokeWidth={1.7} />
                  {annexStore.telDisplay}
                </a>
                <button type="button" onClick={() => showSampleNotice("AnnexMap")}>
                  <MapPin aria-hidden="true" size={17} strokeWidth={1.7} />
                  Google Mapsは正式制作時に設定
                </button>
              </div>
            </section>
          </div>
        </div>

        <div className={styles.utility}>
          <nav aria-label="フッターナビゲーション">
            <ul>
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.socials} aria-label="未設定の関連導線">
            <button type="button" onClick={() => showSampleNotice("Instagram")}>
              <Camera aria-hidden="true" size={18} strokeWidth={1.7} />
              Instagram
            </button>
            <button type="button" onClick={() => showSampleNotice("LINE")}>
              <MessageCircle aria-hidden="true" size={18} strokeWidth={1.7} />
              LINE
            </button>
          </div>
        </div>

        <p className={styles.sampleNotice} role="status" aria-live="polite">
          {sampleNotice}
        </p>

        <div className={styles.bottom}>
          <p>このページは営業提案用サンプルです。</p>
          <small>© BEYOND NAKANO</small>
        </div>
      </div>
    </footer>
  );
}
