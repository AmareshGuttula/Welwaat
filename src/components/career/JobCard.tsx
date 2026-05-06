"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  MapPin,
  Briefcase,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";
import styles from "@/app/career/career.module.css";
import type { JobListing } from "@/app/career/career-data";

interface JobCardProps {
  job: JobListing;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function JobCard({ job, index, isExpanded, onToggle }: JobCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className={`${styles.jobCard} ${isExpanded ? styles.jobCardExpanded : ""}`}
      onClick={onToggle}
    >
      <div className={styles.jobCardHeader}>
        <div className={styles.jobTitleGroup}>
          <h3 className={styles.jobTitle}>{job.title}</h3>
          <span className={styles.jobDepartment}>{job.department}</span>
        </div>
        <span className={styles.jobPosted}>
          <Clock size={12} style={{ marginRight: 4, opacity: 0.5 }} />
          {job.posted}
        </span>
      </div>

      <p className={styles.jobDescription}>{job.description}</p>

      <div className={styles.jobMeta}>
        <span className={`${styles.jobTag} ${styles.jobTagType}`}>{job.type}</span>
        <span className={styles.jobTag}>
          <MapPin size={10} style={{ marginRight: 4 }} />
          {job.location}
        </span>
        <span className={styles.jobTag}>
          <Briefcase size={10} style={{ marginRight: 4 }} />
          {job.experience} Level
        </span>
      </div>

      <div className={styles.jobCardFooter}>
        <div className={styles.jobPerks}>
          {job.perks.slice(0, 2).map((perk, i) => (
            <span key={i} className={styles.jobPerk}>
              <span className={styles.perkDot}></span>
              {perk}
            </span>
          ))}
        </div>
        <button
          className={styles.applyBtn}
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
        >
          {isExpanded ? (
            <>
              Collapse <ChevronUp size={14} />
            </>
          ) : (
            <>
              Details <ChevronDown size={14} className={styles.applyArrow} />
            </>
          )}
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className={styles.expandedContent}
          >
            <div className={styles.detailGrid}>
              <div className={styles.detailColumn}>
                <h4>Responsibilities</h4>
                <ul className={styles.detailList}>
                  {job.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.detailColumn}>
                <h4>Requirements</h4>
                <ul className={styles.detailList}>
                  {job.requirements.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.detailColumn}>
                <h4>Perks & Benefits</h4>
                <ul className={styles.detailList}>
                  {job.perks.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.expandedApply}>
              <button
                className={styles.expandedApplyBtn}
                onClick={(e) => e.stopPropagation()}
              >
                Apply Now <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
