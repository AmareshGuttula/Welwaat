"use client";
import { useState, useEffect } from "react";
import styles from "./Mascot.module.css";

export default function Mascot() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay appearance slightly for effect
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.mascotContainer}>
      <div className={styles.speechBubble}>
        Hi! I'm the Welwaat Mascot!
      </div>
      <div className={styles.mascotWrapper}>
        <img 
          src="/mascot.png" 
          alt="Welwaat Mascot" 
          className={styles.mascotImage}
        />
      </div>
    </div>
  );
}
