"use client";
import React, { useState } from "react";
import styles from "./Setting.module.css";
import Image from "next/image";
import settingIcon from "../../asserts/setting_icon.png";
import settingIconActive from "../../asserts/setting_icon-active.png";
import userIcon from "../../asserts/user_icon.png";
import userIconActive from "../../asserts/user_icon-active.png";
import ConfigurationOptions from "./ConfigurationOptions";

function Setting({ onAccessChange }) {
  const [activeTab, setActiveTab] = useState("#general");
  const handleTabClick = (e) => {
    const target = e.currentTarget.getAttribute("data-target");
    setActiveTab(target);
  };

  return (
    <div className={styles.settings}>
      {/* ====== Tabs ======*/}
      <div className={styles.settingTabs}>
        <div
          className={`${styles.settingTabButton} ${
            activeTab === "#general" ? styles.settingTabActive : ""
          }`}
          data-target="#general"
          onClick={handleTabClick}
        >
          <Image
            className={styles.settingTabIcon}
            src={activeTab === "#general" ? settingIconActive : settingIcon}
            alt="Setting Icon"
          />
          General
        </div>
        <div
          className={`${styles.settingTabButton} ${
            activeTab === "#blocklist" ? styles.settingTabActive : ""
          }`}
          data-target="#blocklist"
          onClick={handleTabClick}
        >
          <Image
            className={styles.settingTabIcon}
            src={activeTab === "#blocklist" ? userIconActive : userIcon}
            alt="Setting Icon"
          />
          Blocklist <span>12</span>
        </div>
      </div>

      {/* ====== Content ======*/}
      <div className={styles.settingContent}>
        {/* ====== General ======*/}
        <div className={styles.generalSetting} id="general">
          <ConfigurationOptions />
        </div>
        {/* ====== Blocklist ======*/}
        {/* <div className={styles.blocklistSetting} id="blocklist">
          Blocklist Setting
        </div> */}
      </div>
    </div>
  );
}

export default Setting;
