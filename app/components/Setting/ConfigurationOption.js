import React from "react";
import styles from "./Setting.module.css";
import Image from "next/image";

function ConfigurationOption({
  image,
  content,
  subcontent,
  isPlus,
  isSelected,
  onSelect,
}) {
  return (
    <div
      className={`${styles.configurationOption} ${
        isSelected ? styles.selectedOption : ""
      }`}
      onClick={onSelect}
    >
      <div className={styles.configurationOptionImage}>
        <Image src={image} alt="Configuration image" />
      </div>

      <div className={styles.configurationOptionContent}>
        {content}
        {isPlus ? (
          <span className={styles.configurationOptionContent_plus}>Plus</span>
        ) : (
          ""
        )}
        <span className={styles.configurationOptionContent_subcontent}>
          {subcontent}
        </span>
      </div>
      <div className={styles.configurationOptionRadiusBtn}>
        <input
          type="radio"
          name="sharing"
          checked={isSelected}
          onChange={onSelect}
        />
      </div>
    </div>
  );
}

export default ConfigurationOption;
