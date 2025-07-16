import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer >
        <div className={styles.footer}>
          <div className={styles.first}>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src="/logo-koine.svg"
                  alt="Logo Koinè"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </Link>
            </div>

            <div className={styles.mark}>
              <Image
                src="/mark-koine.svg"
                alt="Koinè"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>

          <div>
            TORINO Laboratorio Via Valprato 68 – 10155
            Email:torino@koine-restauro.eu Tel: 335 6639215 - 335 7078853 åFax:
            011 8226210
          </div>
          <div>
            TORINO - Laboratorio Via Valprato 68 – 10155 Email:
            torino@koine-restauro.eu Tel: 335 6639215 - 335 7078853 Fax: 011
            8226210
          </div>

          <div>
            TORINO - Laboratorio Via Valprato 68 – 10155 Email:
            torino@koine-restauro.eu Tel: 335 6639215 - 335 7078853 Fax: 011
            8226210
          </div>

          <div>
            TORINO - Laboratorio Via Valprato 68 – 10155 Email:
            torino@koine-restauro.eu Tel: 335 6639215 - 335 7078853 Fax:
            0118226210
          </div>
        </div>
      </footer>
    </>
  );
}
