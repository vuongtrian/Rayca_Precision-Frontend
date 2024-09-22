import React from "react";
import styles from "./IndividualSharing.module.css";

function User({
  avatar,
  username,
  email,
  accessLevel,
  onAccessChange,
  userId,
}) {
  const getAvatarClass = (letter) => {
    switch (letter.toUpperCase()) {
      case "A":
        return styles.userAvatarA;
      case "N":
        return styles.userAvatarN;
      case "J":
        return styles.userAvatarJ;
      default:
        return styles.userAvatarJ;
    }
  };

  return (
    <div className={styles.userRow}>
      <div className={styles.userInfo}>
        <div className={`${styles.userAvatar} ${getAvatarClass(avatar)}`}>
          {avatar}
        </div>
        <div className={styles.userCommon}>
          <span className={styles.userName}>{username}</span>
          <span className={styles.userEmail}>{email}</span>
        </div>
      </div>
      <select
        className={styles.accessLevelSelect}
        value={accessLevel}
        onChange={(e) => onAccessChange(userId, e.target.value)}
      >
        <option value="Full access">Full access</option>
        <option value="Metadata only">Metadata only</option>
        <option value="Line and metadata">Subject line & Metadata</option>
      </select>
    </div>
  );
}

export default User;
