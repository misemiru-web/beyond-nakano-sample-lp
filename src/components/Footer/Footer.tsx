"use client";

import {
  Camera,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  TrainFront,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { externalLinks, nakanoStore, sampleNotices } from "@/data/siteContent";
import { assetPath } from "@/lib/assetPath";

import styles from "./Footer.module.css";

const navigationItems = [
  { label: "CONCEPT", href: "#reasons-heading" },
  { label: "TRAINERS", href: "#trainers-heading" },
  { label: "FACILITY", href: "#facility-heading" },
  { label: "PRICE", href: "#price-heading" },
  { label: "ACCESS", href: "#access" },
  { label: "FAQ", href: "#faq" },
] as const;

export function Footer() {
  const [sampleNotice, setSampleNotice] = useState("");

  const showSampleNotice = (service: "Instagram" | "LINE") => {
    setSampleNotice(service === "Instagram" ? sampleNotices.instagram : sampleNotices.line);
  };

  return (
    <footer className={styles.footer}>
      <div className={`container-wide ${styles.container}`}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <a href="#top" aria-label="BEYOND中野 ページ上部へ">
              <Image
                src={assetPath("/images/brand/beyond_nakano_logo_white.png")}
                width={290}
                height={111}
                alt="BEYOND NAKANO"
              />
            </a>
          </div>

          <nav className={styles.navigation} aria-label="フッターナビゲーション">
            <ul>
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.shop}>
            <h2>
              <span>BEYOND（ビヨンド）ジム</span>
              <span>中野店</span>
            </h2>
            <ul className={styles.shopDetails}>
              <li>
                <MapPin aria-hidden="true" size={20} strokeWidth={1.65} />
                <span>{nakanoStore.address}</span>
              </li>
              <li>
                <TrainFront aria-hidden="true" size={20} strokeWidth={1.65} />
                <span>
                  {nakanoStore.accessLines[0]}
                  <br />
                  {nakanoStore.accessLines[1]}
                </span>
              </li>
              <li>
                <Clock3 aria-hidden="true" size={20} strokeWidth={1.65} />
                <span>営業時間 {nakanoStore.hours}</span>
              </li>
              <li>
                <Phone aria-hidden="true" size={20} strokeWidth={1.65} />
                <a href={nakanoStore.telHref}>TEL {nakanoStore.telDisplay}</a>
              </li>
            </ul>

            <div className={styles.socials} aria-label="関連リンク">
              <button type="button" onClick={() => showSampleNotice("Instagram")}>
                <Camera aria-hidden="true" size={20} strokeWidth={1.65} />
                <span>Instagram</span>
              </button>
              <a
                href={externalLinks.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin aria-hidden="true" size={20} strokeWidth={1.65} />
                <span>Google Maps</span>
              </a>
              <button type="button" onClick={() => showSampleNotice("LINE")}>
                <MessageCircle aria-hidden="true" size={20} strokeWidth={1.65} />
                <span>LINE</span>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.mobileNavigation}>
          <nav aria-label="モバイルフッターナビゲーション">
            <ul>
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className={styles.sampleNotice} role="status" aria-live="polite">
          {sampleNotice}
        </p>

        <div className={styles.bottom}>
          <div>
            <p>このページは営業提案用サンプルです。</p>
            <small>© BEYOND NAKANO</small>
          </div>
        </div>
      </div>
    </footer>
  );
}
