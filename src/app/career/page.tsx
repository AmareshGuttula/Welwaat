"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./career.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { Search, X, Send } from "lucide-react";
import { jobListings, departments } from "./career-data";
import FilterSidebar from "@/components/career/FilterSidebar";
import JobCard from "@/components/career/JobCard";
import Link from "next/link";

export default function CareerPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedExperience, setSelectedExperience] = useState("All Levels");
  const [selectedType, setSelectedType] = useState("All Types");
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const filteredJobs = useMemo(() => {
    return jobListings.filter((job) => {
      const matchesSearch =
        searchQuery === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.department.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDept =
        selectedDepartment === "All Departments" ||
        job.department === selectedDepartment;

      const matchesLoc =
        selectedLocation === "All Locations" ||
        job.location === selectedLocation;

      const matchesExp =
        selectedExperience === "All Levels" ||
        job.experience === selectedExperience;

      const matchesType =
        selectedType === "All Types" || job.type === selectedType;

      return matchesSearch && matchesDept && matchesLoc && matchesExp && matchesType;
    });
  }, [searchQuery, selectedDepartment, selectedLocation, selectedExperience, selectedType]);

  const clearFilters = () => {
    setSelectedDepartment("All Departments");
    setSelectedLocation("All Locations");
    setSelectedExperience("All Levels");
    setSelectedType("All Types");
    setSearchQuery("");
  };

  const hasActiveFilters =
    selectedDepartment !== "All Departments" ||
    selectedLocation !== "All Locations" ||
    selectedExperience !== "All Levels" ||
    selectedType !== "All Types";

  return (
    <div className={styles.careerPage}>
      <Header />

      <section className={styles.hero}>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.badge}
        >
          We&apos;re Hiring
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={styles.title}
        >
          Build the <span className={styles.accent}>Future</span> <br />
          With Us.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={styles.heroDescription}
        >
          Join a team of architects, engineers, and designers who are redefining
          how brands exist in the digital world.
        </motion.p>

        <div className={styles.titleDivider}></div>
      </section>

      <div className={styles.divider}></div>

      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardLayout}>
          <FilterSidebar
            selectedDepartment={selectedDepartment}
            setSelectedDepartment={setSelectedDepartment}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedExperience={selectedExperience}
            setSelectedExperience={setSelectedExperience}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            clearFilters={clearFilters}
            hasActiveFilters={hasActiveFilters}
          />

          <main className={styles.mainContent}>
            <div className={styles.searchBar}>
              <div className={styles.searchInputWrapper}>
                <Search className={styles.searchIcon} />
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder="Search by role, department, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <span className={styles.resultsCount}>
                <span className={styles.resultsCountNumber}>
                  {filteredJobs.length}
                </span>{" "}
                results
              </span>
            </div>

            {hasActiveFilters && (
              <div className={styles.activeFilters}>
                {selectedDepartment !== "All Departments" && (
                  <span className={styles.activeFilterTag}>
                    {selectedDepartment}
                    <button
                      className={styles.removeFilter}
                      onClick={() => setSelectedDepartment("All Departments")}
                    >
                      <X size={12} />
                    </button>
                  </span>
                )}
                {selectedLocation !== "All Locations" && (
                  <span className={styles.activeFilterTag}>
                    {selectedLocation}
                    <button
                      className={styles.removeFilter}
                      onClick={() => setSelectedLocation("All Locations")}
                    >
                      <X size={12} />
                    </button>
                  </span>
                )}
                {selectedExperience !== "All Levels" && (
                  <span className={styles.activeFilterTag}>
                    {selectedExperience}
                    <button
                      className={styles.removeFilter}
                      onClick={() => setSelectedExperience("All Levels")}
                    >
                      <X size={12} />
                    </button>
                  </span>
                )}
                {selectedType !== "All Types" && (
                  <span className={styles.activeFilterTag}>
                    {selectedType}
                    <button
                      className={styles.removeFilter}
                      onClick={() => setSelectedType("All Types")}
                    >
                      <X size={12} />
                    </button>
                  </span>
                )}
              </div>
            )}

            <div className={styles.jobGrid}>
              <AnimatePresence mode="popLayout">
                {filteredJobs.length > 0 ? (
                  selectedDepartment === "All Departments" ? (
                    departments.filter(d => d !== "All Departments").map((dept) => {
                      const deptJobs = filteredJobs.filter(j => j.department === dept);
                      if (deptJobs.length === 0) return null;
                      return (
                        <div key={dept} className={styles.deptGroup}>
                          <h2 className={styles.deptHeading}>{dept}</h2>
                          {deptJobs.map((job, index) => (
                            <JobCard
                              key={job.id}
                              job={job}
                              index={index}
                              isExpanded={expandedJob === job.id}
                              onToggle={() =>
                                setExpandedJob(expandedJob === job.id ? null : job.id)
                              }
                            />
                          ))}
                        </div>
                      );
                    })
                  ) : (
                    filteredJobs.map((job, index) => (
                      <JobCard
                        key={job.id}
                        job={job}
                        index={index}
                        isExpanded={expandedJob === job.id}
                        onToggle={() =>
                          setExpandedJob(expandedJob === job.id ? null : job.id)
                        }
                      />
                    ))
                  )
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={styles.emptyState}
                  >
                    <Search className={styles.emptyIcon} />
                    {jobListings.length === 0 ? (
                      <>
                        <h3 className={styles.emptyTitle}>Our Team is Currently Full.</h3>
                        <p className={styles.emptyText}>
                          We aren&apos;t actively hiring for new positions at this moment. 
                          However, we never stop looking for exceptional talent. 
                          If you believe you can bring something unique to Welwaat, send us your portfolio below.
                        </p>
                      </>
                    ) : (
                      <>
                        <h3 className={styles.emptyTitle}>No Matching Positions</h3>
                        <p className={styles.emptyText}>
                          No openings match your current filters. Try adjusting
                          your search or clearing filters.
                        </p>
                        <button className={styles.resetBtn} onClick={clearFilters}>
                          Reset All Filters
                        </button>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.ctaSection}
            >
              <div className={styles.ctaContent}>
                <h2 className={styles.ctaTitle}>Don&apos;t See Your Role?</h2>
                <p className={styles.ctaText}>
                  We&apos;re always looking for exceptional talent. Send us your
                  portfolio and we&apos;ll reach out when the right opportunity
                  comes along.
                </p>
              </div>
              <Link href="/career/apply" className={styles.ctaBtn}>
                Send Your Portfolio <Send size={16} />
              </Link>
            </motion.div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
