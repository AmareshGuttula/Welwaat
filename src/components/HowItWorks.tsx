"use client";

import React from "react";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    number: 1,
    title: "Discovery",
    description:
      "We understand your business goals, target audience, and project requirements through in-depth consultation.",
  },
  {
    number: 2,
    title: "Design & Develop",
    description:
      "Our team crafts pixel-perfect designs and builds robust solutions tailored to your brand identity.",
  },
  {
    number: 3,
    title: "Launch & Grow",
    description:
      "We deploy your project live and provide ongoing support to ensure continuous growth and success.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            How It <span className={styles.accent}>Works?</span>
          </h2>
          <p className={styles.subtitle}>
            Simple steps to transform your digital presence
          </p>
        </div>

        <div className={styles.stepsRow}>
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className={styles.step}>
                <div className={styles.circle}>
                  <span>{step.number}</span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className={styles.connector}>
                  <div className={styles.dottedLine} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
