import React, { useState } from "react";
import styles from "./Setting.module.css";
import accessIcon from "../../asserts/access_icon.png";
import ConfigurationOption from "./ConfigurationOption";
function ConfigurationOptions() {
  const [selectedOption, setSelectedOption] = useState("full-access");

  return (
    <div className={styles.configuration}>
      <h3>Default sharing configuration</h3>
      <div className={styles.configurationOptions}>
        <ConfigurationOption
          image={accessIcon}
          content="Metadata only"
          subcontent="Only subject lines will be visible and timestamp with anyone in your
          workspace"
          isPlus={false}
          isSelected={selectedOption === "metadata"}
          onSelect={() => setSelectedOption("metadata")}
        />
        <ConfigurationOption
          image={accessIcon}
          content="Subject line and metadata"
          subcontent="We'll share the subject, participants and timestamp with anyone in your workspace"
          isPlus={false}
          isSelected={selectedOption === "metadata-line"}
          onSelect={() => setSelectedOption("metadata-line")}
        />
        <ConfigurationOption
          image={accessIcon}
          content="Full access"
          subcontent="Everything is shared with your workspace members (including the body, subject line, attachments)"
          isPlus={true}
          isSelected={selectedOption === "full-access"}
          onSelect={() => setSelectedOption("full-access")}
        />
      </div>
    </div>
  );
}

export default ConfigurationOptions;
