import styles from "./Header.module.css";
import googleIcon from "../../asserts/google_icon.png";
import Image from "next/image";
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.accountInfo}>
        <div className={styles.account}>
          <Image
            className={styles.accountIcon}
            src={googleIcon}
            alt="Google icon"
          />
          <h1 className={styles.accountEmail}>julian@attio.com</h1>
        </div>
        <p>
          Update your inbox permissions and settings. <a href="#">Learn more</a>
        </p>
      </div>
      <div className={styles.status}>
        <p className={styles.statusContent}>
          <span className={styles.statusIndicator}></span> In Sync
        </p>
      </div>
    </div>
  );
}

export default Header;
