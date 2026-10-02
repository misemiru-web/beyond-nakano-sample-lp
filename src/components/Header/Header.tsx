"use client";

import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { assetPath } from "@/lib/assetPath";
import styles from "./Header.module.css";

const desktopNavigationItems = [
  { label: "コンセプト", href: "#concept" },
  { label: "トレーナー", href: "#trainers" },
  { label: "施設紹介", href: "#facility" },
  { label: "2店舗", href: "#locations" },
  { label: "アクセス", href: "#access" },
  { label: "よくある質問", href: "#faq" },
] as const;

const mobileNavigationItems = [
  { label: "CONCEPT", href: "#concept" },
  { label: "TRAINERS", href: "#trainers" },
  { label: "FACILITY", href: "#facility" },
  { label: "LOCATIONS", href: "#locations" },
  { label: "ACCESS", href: "#access" },
  { label: "FAQ", href: "#faq" },
  { label: "BLOG", href: "#blog" },
] as const;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false);
    };
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleViewportChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleViewportChange);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const useDarkLogo = isScrolled && !isMenuOpen;

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${
        isMenuOpen ? styles.menuOpen : ""
      }`}
    >
      <div className={`container-wide ${styles.inner}`}>
        <a
          className={styles.logoLink}
          href="#top"
          aria-label="BEYOND中野 ページ上部へ"
          onClick={closeMenu}
        >
          <Image
            className={styles.logo}
            src={
              useDarkLogo
                ? assetPath(
                    "/images/brand/beyond_nakano_logo_black_transparent_hq.webp",
                  )
                : assetPath("/images/brand/beyond_nakano_logo_white.png")
            }
            width={useDarkLogo ? 1942 : 290}
            height={useDarkLogo ? 809 : 111}
            alt="BEYOND NAKANO"
            priority
          />
        </a>

        <nav className={styles.desktopNav} aria-label="メインナビゲーション">
          <ul>
            {desktopNavigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className={`button button--primary ${styles.headerCta}`}
          href="#reservation"
          onClick={closeMenu}
        >
          <span className={styles.desktopCtaLabel}>無料体験を予約する</span>
          <span className={styles.mobileCtaLabel}>無料体験</span>
          <ArrowRight aria-hidden="true" size={18} strokeWidth={1.75} />
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? (
            <X aria-hidden="true" size={30} strokeWidth={1.75} />
          ) : (
            <Menu aria-hidden="true" size={30} strokeWidth={1.75} />
          )}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={styles.mobileNav}
        aria-label="モバイルナビゲーション"
        aria-hidden={!isMenuOpen}
      >
        <div className={styles.mobileNavInner}>
          <ul>
            {mobileNavigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="button button--primary"
            href="#reservation"
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            無料体験を予約する
            <ArrowRight aria-hidden="true" size={18} strokeWidth={1.75} />
          </a>
        </div>
      </nav>
    </header>
  );
}
