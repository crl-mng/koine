// components/Button.js
import Link from 'next/link';
import styles from './button.module.css';

export default function Button({ href, onClick, children, variant = '', className = '', type = 'button' }) {
  const combinedClass = `${styles.button} ${styles[variant] || ''} ${className}`;

  if (href) {
    return (
      <Link href={href}>
        <button className={combinedClass} type={type}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass} type={type}>
      {children}
    </button>
  );
}