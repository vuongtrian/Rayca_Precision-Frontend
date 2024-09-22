"use client";
import React, { useState } from "react";
import styles from "./IndividualSharing.module.css";
import SearchComponent from "./SearchComponent";
import Users from "./Users";

function IndividualSharing({ users, onAccessChange }) {
  return (
    <div className={styles.individualSharing}>
      <h3>Individual inbox sharing</h3>
      <SearchComponent users={users} />
      <Users users={users} onAccessChange={onAccessChange} />
    </div>
  );
}

export default IndividualSharing;
