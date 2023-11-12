import Link from "next/link";
import styles from "./styles.module.scss";

export default function Ad() {
  return (
    <Link href="/browse">
      <h2 className={styles.ad}></h2>
    </Link>
  );
}
