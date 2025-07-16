import styles from "./nav.module.css";
import Link from "next/link";
// import { motion } from 'montion/react';
import Image from "next/image";
import Button from "./Button";

export default function Index() {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Servizi",
      href: "/servizi",
    },
    {
      title: "Chi siamo",
      href: "/chi-siamo",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
  ];

  return (
    <nav
      className={styles.menu}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={styles.mark}
        initial={{ opacity: 0, transform: "translateX(15px)" }}
        animate={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src="/mark-koine.svg"
          alt="Koinè"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <div className={styles.nav}>
        {navItems.map((item, index) => (
          <div
            key={index}
            initial={{ opacity: 0, transform: "translateY(15px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link
              href={item.href}
              className={styles.link}
              onClick={() => closeMenu(false)}
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>

      <div
        initial={{ opacity: 0, transform: "translateY(15px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <Button href="" children="Scarica il curriculum" variant="" />
      </div>

      <div
        className={styles.socialLinks}
        initial={{ opacity: 0, transform: "translateY(15px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <a>Linkedin</a> <a>Instagram</a> <a>Facebook</a>
      </div>
    </nav>
  );
}
