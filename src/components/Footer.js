import React from "react";

export default function Footer({ className, footerLabel }) {
  return <footer className={className}><div className="footer-text">{footerLabel}</div></footer>;
}

