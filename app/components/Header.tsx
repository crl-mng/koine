"use client";
import styles from "./header.module.css";
import { useState } from "react";
import Nav from "./Nav";
import Image from "next/image";
// import { AnimatePresence } from 'motion/react';
import Link from "next/link";
import Button from "./Button";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const closeMenu = () => setIsActive(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/logo-koine-white.svg"
              alt="Logo Koinè"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>
        </div>

        <Button
          onClick={() => setIsActive(!isActive)}
          className={isActive ? styles.active : ""}
        >
          {isActive ? "Chiudi" : "Menu"}
        </Button>

        {/* <AnimatePresence> */}
        {isActive && <Nav closeMenu={setIsActive} />}
        {/* </AnimatePresence> */}
      </header>
    </>
  );
}
