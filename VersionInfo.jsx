import React from "react";

export const VersionInfo = () => {
  const info = process.env.REACT_APP_VERSION_INFO;
  if (!info) {
    console.info("No version information present at build time.");
    return <></>;
  }
  console.info(`version: ${info}`);
  return <div hidden>{info}</div>;
};