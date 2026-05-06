"use client";

import { motion } from "framer-motion";
import styles from "@/app/career/career.module.css";
import {
  departments,
  locations,
  experienceLevels,
  jobTypes,
  jobListings,
} from "@/app/career/career-data";

interface FilterSidebarProps {
  selectedDepartment: string;
  setSelectedDepartment: (val: string) => void;
  selectedLocation: string;
  setSelectedLocation: (val: string) => void;
  selectedExperience: string;
  setSelectedExperience: (val: string) => void;
  selectedType: string;
  setSelectedType: (val: string) => void;
  clearFilters: () => void;
  hasActiveFilters: boolean;
}

export default function FilterSidebar({
  selectedDepartment,
  setSelectedDepartment,
  selectedLocation,
  setSelectedLocation,
  selectedExperience,
  setSelectedExperience,
  selectedType,
  setSelectedType,
  clearFilters,
  hasActiveFilters,
}: FilterSidebarProps) {
  const getCountForDepartment = (dept: string) =>
    dept === "All Departments"
      ? jobListings.length
      : jobListings.filter((j) => j.department === dept).length;

  const getCountForLocation = (loc: string) =>
    loc === "All Locations"
      ? jobListings.length
      : jobListings.filter((j) => j.location === loc).length;

  const getCountForExperience = (exp: string) =>
    exp === "All Levels"
      ? jobListings.length
      : jobListings.filter((j) => j.experience === exp).length;

  const getCountForType = (type: string) =>
    type === "All Types"
      ? jobListings.length
      : jobListings.filter((j) => j.type === type).length;

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className={styles.sidebar}
    >
      <div className={styles.filterPanel}>
        <div className={styles.filterHeader}>
          <span className={styles.filterTitle}>
            <span className={styles.filterDot}></span>
            Filters
          </span>
          {hasActiveFilters && (
            <button className={styles.clearBtn} onClick={clearFilters}>
              Clear All
            </button>
          )}
        </div>

        {/* Department Filter */}
        <div className={styles.filterGroup}>
          <div className={styles.filterGroupTitle}>Department</div>
          {departments.map((dept) => (
            <div
              key={dept}
              className={`${styles.filterOption} ${
                selectedDepartment === dept ? styles.filterOptionActive : ""
              }`}
              onClick={() => setSelectedDepartment(dept)}
            >
              <span
                className={`${styles.filterRadio} ${
                  selectedDepartment === dept ? styles.filterRadioActive : ""
                }`}
              >
                <span className={styles.filterRadioDot}></span>
              </span>
              {dept}
              <span className={styles.filterCount}>
                {getCountForDepartment(dept)}
              </span>
            </div>
          ))}
        </div>

        {/* Location Filter */}
        <div className={styles.filterGroup}>
          <div className={styles.filterGroupTitle}>Location</div>
          {locations.map((loc) => (
            <div
              key={loc}
              className={`${styles.filterOption} ${
                selectedLocation === loc ? styles.filterOptionActive : ""
              }`}
              onClick={() => setSelectedLocation(loc)}
            >
              <span
                className={`${styles.filterRadio} ${
                  selectedLocation === loc ? styles.filterRadioActive : ""
                }`}
              >
                <span className={styles.filterRadioDot}></span>
              </span>
              {loc}
              <span className={styles.filterCount}>
                {getCountForLocation(loc)}
              </span>
            </div>
          ))}
        </div>

        {/* Experience Filter */}
        <div className={styles.filterGroup}>
          <div className={styles.filterGroupTitle}>Experience</div>
          {experienceLevels.map((exp) => (
            <div
              key={exp}
              className={`${styles.filterOption} ${
                selectedExperience === exp ? styles.filterOptionActive : ""
              }`}
              onClick={() => setSelectedExperience(exp)}
            >
              <span
                className={`${styles.filterRadio} ${
                  selectedExperience === exp ? styles.filterRadioActive : ""
                }`}
              >
                <span className={styles.filterRadioDot}></span>
              </span>
              {exp}
              <span className={styles.filterCount}>
                {getCountForExperience(exp)}
              </span>
            </div>
          ))}
        </div>

        {/* Job Type Filter */}
        <div className={styles.filterGroup}>
          <div className={styles.filterGroupTitle}>Job Type</div>
          {jobTypes.map((type) => (
            <div
              key={type}
              className={`${styles.filterOption} ${
                selectedType === type ? styles.filterOptionActive : ""
              }`}
              onClick={() => setSelectedType(type)}
            >
              <span
                className={`${styles.filterRadio} ${
                  selectedType === type ? styles.filterRadioActive : ""
                }`}
              >
                <span className={styles.filterRadioDot}></span>
              </span>
              {type}
              <span className={styles.filterCount}>
                {getCountForType(type)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}
