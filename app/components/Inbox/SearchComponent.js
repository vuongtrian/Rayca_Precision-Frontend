"use client";
import React, { useState } from "react";
import styles from "./IndividualSharing.module.css";
import userIconLight from "../../asserts/user_icon-light.png";
import Image from "next/image";
function SearchComponent({ users }) {
  const [selectedUser, setSelectedUser] = useState({
    name: "Jeremy Enderson",
    avatar: "J",
  });
  const [accessLevel, setAccessLevel] = useState("Full Access");
  const [searchInput, setSearchInput] = useState("");

  const handleRemoveUser = () => {
    setSelectedUser("");
    setSearchInput("");
  };

  const handleInputBlur = () => {
    const searchValue = searchInput.toLowerCase();

    const filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchValue) ||
        user.email.toLowerCase().includes(searchValue)
    );

    if (filteredUsers.length > 0) {
      setSelectedUser({
        name: filteredUsers[0].name,
        avatar: filteredUsers[0].avatar,
      });
      setAccessLevel(filteredUsers[0].accessLevel);
    } else {
      setSelectedUser({ name: "No user found", avatar: "" });
    }
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

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
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        {selectedUser ? (
          <div className={styles.selectedUser}>
            <span
              className={`${styles.avatar} ${getAvatarClass(
                selectedUser.avatar
              )}`}
            >
              {selectedUser.avatar}
            </span>
            <input
              className={`${styles.searchInput} ${styles.searchInputValue}`}
              type="text"
              value={selectedUser.name}
              disabled
            />
            <button className={styles.removeBtn} onClick={handleRemoveUser}>
              ✕
            </button>
          </div>
        ) : (
          <input
            className={`${styles.searchInput} ${styles.noBorder}`}
            type="text"
            value={searchInput}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder="Search users..."
          />
        )}

        <select
          className={styles.accessLevel}
          value={accessLevel}
          onChange={(e) => setAccessLevel(e.target.value)}
        >
          <option value="Full access">Full Access </option>
          <option value="Metadata only">Metadata Only</option>
          <option value="Line and metadata">Subject line & Metadata</option>
        </select>
      </div>

      <button className={styles.shareAccessBtn}>
        <Image
          className={styles.shareAccessBtnIcon}
          src={userIconLight}
          alt="User icon light"
        />
        Share access
      </button>
    </div>
  );
}

export default SearchComponent;
