"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, MotionConfig, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { COMPANY } from "@/data/company";

const BUILDING_OPTIONS = [
  "Website",
  "Business Software",
  "SaaS Product",
  "Mobile App",
  "AI / Automation",
  "Something Else",
];

const STAGE_OPTIONS = [
  "Concept / Strategy Phase",
  "Architecture & Technical Planning",
  "Existing Product / Active Users",
  "Scaling & Infrastructure Expansion",
  "Modernising Legacy Systems",
];

const NEED_OPTIONS = [
  "Product Engineering",
  "Product Design & UX",
  "Full-Stack Software Engineering",
  "AI & Automation",
  "Business Systems & Operations",
  "Cloud & Infrastructure",
];

const SCALE_OPTIONS = [
  "Focused",
  "Growth",
  "Complex",
  "Large / Multi-System",
  "Not Sure Yet",
];

const TIMELINE_OPTIONS = [
  "As Soon As Possible",
  "Flexible",
  "Exploring",
];

const OPTION_BTN = (isSelected: boolean) =>
  `text-left p-5 border transition-all duration-200 font-mono-tech text-xs tracking-wider uppercase ${
    isSelected
      ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-accent)] font-bold"
      : "border-[var(--color-rule)] bg-[var(--color-canvas)] text-[var(--color-ink-secondary)] hover:border-[var(--color-rule-strong)] font-medium"
  }`;

export default function StartAProjectPage() {
  const reducedMotion = useReducedMotion();
  const focusStepOnArrival = useRef(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 6;

  const [buildingType, setBuildingType] = useState<string>("");
  const [stage, setStage] = useState<string>("");
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [projectScale, setProjectScale] = useState<string>("");
  const [timeline, setTimeline] = useState<string>("");
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [successData, setSuccessData] = useState<{ id: string } | null>(null);
  const enquiryEmail = `mailto:${COMPANY.contact.projects}?subject=${encodeURIComponent(`Project enquiry — ${buildingType || "New project"}`)}&body=${encodeURIComponent([
    `Name: ${contactData.name}`,
    `Email: ${contactData.email}`,
    `Company: ${contactData.company}`,
    `Country: ${contactData.country}`,
    `Building: ${buildingType}`,
    `Stage: ${stage}`,
    `Support: ${selectedNeeds.join(", ")}`,
    `Scale: ${projectScale}`,
    `Timeline: ${timeline}`,
    "",
    contactData.description,
  ].join("\n"))}`;

  const toggleNeed = (need: string) => {
    setSelectedNeeds((prev) =>
      prev.includes(need) ? prev.filter((n) => n !== need) : [...prev, need]
    );
  };

  const focusStep = () => {
    if (!focusStepOnArrival.current) return;
    const heading = document.getElementById(`project-step-${currentStep}`);
    if (heading) {
      heading.focus({ preventScroll: true });
      focusStepOnArrival.current = false;
    }
  };

  const handleNext = () => {
    setErrorMsg("");
    if (currentStep === 1 && !buildingType) {
      setErrorMsg("Please select what you are building.");
      return;
    }
    if (currentStep === 2 && !stage) {
      setErrorMsg("Please select your current stage.");
      return;
    }
    if (currentStep === 3 && selectedNeeds.length === 0) {
      setErrorMsg("Please select at least one area.");
      return;
    }
    if (currentStep === 4 && !projectScale) {
      setErrorMsg("Please select a target project scale.");
      return;
    }
    if (currentStep === 5 && !timeline) {
      setErrorMsg("Please select a timeline.");
      return;
    }
    focusStepOnArrival.current = true;
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handlePrev = () => {
    setErrorMsg("");
    focusStepOnArrival.current = true;
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (contactData.name.trim().length < 2) {
      setErrorMsg("Please enter your full name (at least 2 characters).");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email.trim())) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (contactData.description.trim().length < 10) {
      setErrorMsg("Please provide a brief project description (at least 10 characters).");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          buildingType,
          stage,
          needs: selectedNeeds,
          budget: projectScale,
          timeline,
          ...contactData,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success || typeof data.enquiryId !== "string") {
        setErrorMsg(data.error || "An error occurred while submitting.");
        setIsSubmitting(false);
        return;
      }

      setSuccessData({ id: data.enquiryId });
      setIsSubmitting(false);
    } catch {
      setErrorMsg("Network error. Please try again or email projects@layzox.com directly.");
      setIsSubmitting(false);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
    <main className="relative min-h-screen w-full bg-[var(--color-canvas)] text-[var(--color-ink)] pt-36 pb-24">
      <div className="relative mx-auto max-w-4xl px-6 md:px-10">

        {/* Step header */}
        <div className="border-b-2 border-[var(--color-ink)] pb-8 mb-12">
          <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-[-0.04em] leading-tight mb-6">Tell us what comes next.</h1>
          <div className="flex items-center justify-between font-mono-tech text-xs text-[var(--color-ink)]/50 mb-4">
            <span className="text-[var(--color-accent)] uppercase tracking-widest font-bold">
              Talk to Layzox
            </span>
            <span className="font-semibold text-[var(--color-ink)]">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          <div className="h-[3px] w-full bg-[var(--color-rule)] overflow-hidden">
            <motion.div
              className="h-full bg-[var(--color-accent)]"
              initial={{ width: "16.6%" }}
              animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
              transition={{ duration: reducedMotion ? 0 : 0.3 }}
            />
          </div>
        </div>

        {/* Success state */}
        {successData ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-[var(--color-rule)] bg-[var(--color-canvas-subtle)] p-10 md:p-14 space-y-6"
          >
            <div className="flex items-center gap-3 text-[var(--color-growth)]">
              <CheckCircle2 size={32} />
              <span className="font-mono-tech text-xs tracking-widest uppercase font-bold">
                Enquiry received
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-[var(--color-ink)] tracking-tight leading-tight">
              We&apos;ll be in touch.
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-ink-secondary)] font-normal leading-relaxed">
              Thank you for contacting Layzox. We will review your project details and respond directly.
            </p>
            <div className="border-t border-[var(--color-rule)] pt-6 font-mono-tech text-xs text-[var(--color-ink-tertiary)] space-y-1">
              <div>Reference: <span className="text-[var(--color-accent)] font-bold">{successData.id}</span></div>
              <div>Direct contact: <span className="text-[var(--color-ink)] font-semibold">projects@layzox.com</span></div>
            </div>
            <div className="pt-2">
              <Link
                href="/"
                className="btn-ink inline-flex items-center gap-2"
              >
                <span>Return home</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        ) : (
          <div className="space-y-10">
            <AnimatePresence mode="wait">

              {/* STEP 1 */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  onAnimationComplete={focusStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <span className="font-mono-tech text-xs text-[var(--color-accent)] uppercase tracking-widest font-bold">Question 01</span>
                    <h2 id="project-step-1" tabIndex={-1} className="font-display text-3xl sm:text-5xl font-medium text-[var(--color-ink)] mt-2 tracking-tight leading-tight">
                      What are you building?
                    </h2>
                    <p className="mt-2 font-mono-tech text-xs text-[var(--color-ink-tertiary)]">
                      Select the primary category.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {BUILDING_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setBuildingType(opt)}
                        aria-pressed={buildingType === opt}
                        className={OPTION_BTN(buildingType === opt)}
                      >
                        <span className="mr-2 opacity-40">{buildingType === opt ? "●" : "○"}</span>
                        <span>{opt}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2 */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  onAnimationComplete={focusStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <span className="font-mono-tech text-xs text-[var(--color-accent)] uppercase tracking-widest font-bold">Question 02</span>
                    <h2 id="project-step-2" tabIndex={-1} className="font-display text-3xl sm:text-5xl font-medium text-[var(--color-ink)] mt-2 tracking-tight leading-tight">
                      What stage are you at?
                    </h2>
                    <p className="mt-2 font-mono-tech text-xs text-[var(--color-ink-tertiary)]">
                      Help us understand where your project is today.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {STAGE_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setStage(opt)}
                        aria-pressed={stage === opt}
                        className={OPTION_BTN(stage === opt)}
                      >
                        <span className="mr-2 opacity-40">{stage === opt ? "●" : "○"}</span>
                        <span>{opt}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 3 */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  onAnimationComplete={focusStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <span className="font-mono-tech text-xs text-[var(--color-accent)] uppercase tracking-widest font-bold">Question 03</span>
                    <h2 id="project-step-3" tabIndex={-1} className="font-display text-3xl sm:text-5xl font-medium text-[var(--color-ink)] mt-2 tracking-tight leading-tight">
                      What do you need?
                    </h2>
                    <p className="mt-2 font-mono-tech text-xs text-[var(--color-ink-tertiary)]">
                      Select all that apply.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {NEED_OPTIONS.map((opt) => {
                      const isSelected = selectedNeeds.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleNeed(opt)}
                          aria-pressed={isSelected}
                          className={OPTION_BTN(isSelected)}
                        >
                          <span className="text-[var(--color-accent)] font-bold mr-2">{isSelected ? "✔" : "+"}</span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 4 */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  onAnimationComplete={focusStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <span className="font-mono-tech text-xs text-[var(--color-accent)] uppercase tracking-widest font-bold">Question 04</span>
                    <h2 id="project-step-4" tabIndex={-1} className="font-display text-3xl sm:text-5xl font-medium text-[var(--color-ink)] mt-2 tracking-tight leading-tight">
                      Target project scale
                    </h2>
                    <p className="mt-2 font-mono-tech text-xs text-[var(--color-ink-tertiary)]">
                      Select the scope and engineering depth you envision.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SCALE_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setProjectScale(opt)}
                        aria-pressed={projectScale === opt}
                        className={OPTION_BTN(projectScale === opt)}
                      >
                        <span className="mr-2 opacity-40">{projectScale === opt ? "●" : "○"}</span>
                        <span>{opt}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 5 */}
              {currentStep === 5 && (
                <motion.div
                  key="step5"
                  onAnimationComplete={focusStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <span className="font-mono-tech text-xs text-[var(--color-accent)] uppercase tracking-widest font-bold">Question 05</span>
                    <h2 id="project-step-5" tabIndex={-1} className="font-display text-3xl sm:text-5xl font-medium text-[var(--color-ink)] mt-2 tracking-tight leading-tight">
                      Target timeline
                    </h2>
                    <p className="mt-2 font-mono-tech text-xs text-[var(--color-ink-tertiary)]">
                      When are you looking to start or go live?
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {TIMELINE_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setTimeline(opt)}
                        aria-pressed={timeline === opt}
                        className={OPTION_BTN(timeline === opt)}
                      >
                        <span className="mr-2 opacity-40">{timeline === opt ? "●" : "○"}</span>
                        <span>{opt}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 6: CONTACT */}
              {currentStep === 6 && (
                <motion.div
                  key="step6"
                  onAnimationComplete={focusStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <span className="font-mono-tech text-xs text-[var(--color-accent)] uppercase tracking-widest font-bold">Final step</span>
                    <h2 id="project-step-6" tabIndex={-1} className="font-display text-3xl sm:text-5xl font-medium text-[var(--color-ink)] mt-2 tracking-tight leading-tight">
                      Your details
                    </h2>
                    <p className="mt-2 font-mono-tech text-xs text-[var(--color-ink-tertiary)]">
                      Tell us who you are and briefly describe your project.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-mono-tech text-xs text-[var(--color-ink)] uppercase block mb-2 font-bold" htmlFor="name">
                          Your name *
                        </label>
                        <input
                          id="name"
                          maxLength={100}
                          type="text"
                          required
                          autoComplete="name"
                          value={contactData.name}
                          onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] px-4 py-3 text-sm text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] transition-colors font-mono-tech placeholder-[var(--color-rule-strong)]"
                        />
                      </div>
                      <div>
                        <label className="font-mono-tech text-xs text-[var(--color-ink)] uppercase block mb-2 font-bold" htmlFor="email">
                          Email address *
                        </label>
                        <input
                          id="email"
                          maxLength={254}
                          type="email"
                          required
                          autoComplete="email"
                          value={contactData.email}
                          onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                          placeholder="you@example.com"
                          className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] px-4 py-3 text-sm text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] transition-colors font-mono-tech placeholder-[var(--color-rule-strong)]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-mono-tech text-xs text-[var(--color-ink)] uppercase block mb-2 font-bold" htmlFor="company">
                          Company / Organization
                        </label>
                        <input
                          id="company"
                          maxLength={150}
                          type="text"
                          autoComplete="organization"
                          value={contactData.company}
                          onChange={(e) => setContactData({ ...contactData, company: e.target.value })}
                          placeholder="Your company (optional)"
                          className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] px-4 py-3 text-sm text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] transition-colors font-mono-tech placeholder-[var(--color-rule-strong)]"
                        />
                      </div>
                      <div>
                        <label className="font-mono-tech text-xs text-[var(--color-ink)] uppercase block mb-2 font-bold" htmlFor="country">
                          Country / Region
                        </label>
                        <input
                          id="country"
                          maxLength={150}
                          type="text"
                          autoComplete="country-name"
                          value={contactData.country}
                          onChange={(e) => setContactData({ ...contactData, country: e.target.value })}
                          placeholder="India, UK, USA... (optional)"
                          className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] px-4 py-3 text-sm text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] transition-colors font-mono-tech placeholder-[var(--color-rule-strong)]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-mono-tech text-xs text-[var(--color-ink)] uppercase block mb-2 font-bold" htmlFor="description">
                        Brief project description *
                      </label>
                      <textarea
                        id="description"
                        maxLength={3000}
                        required
                        rows={4}
                        value={contactData.description}
                        onChange={(e) => setContactData({ ...contactData, description: e.target.value })}
                        placeholder="Tell us what you are building, what problem it solves, and any specific requirements..."
                        className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] px-4 py-3 text-sm text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] transition-colors font-mono-tech placeholder-[var(--color-rule-strong)] resize-none"
                      />
                    </div>

                    {errorMsg && (
                      <div className="flex items-center gap-2 text-[var(--color-accent)] font-mono-tech text-xs bg-[var(--color-accent-soft)] p-3 border border-[var(--color-accent)]/30">
                        <AlertCircle size={14} aria-hidden="true" />
                        <span role="alert">{errorMsg}</span>
                      </div>
                    )}

                    <p className="text-sm leading-relaxed text-[var(--color-ink-secondary)]">
                      Prefer email? <a href={enquiryEmail} className="underline underline-offset-4 text-[var(--color-accent)]">Open your project brief in your email app</a> to review and send it. Read our <Link href="/legal/privacy" className="underline underline-offset-4">privacy policy</Link>.
                    </p>

                    <div className="flex items-center justify-between border-t border-[var(--color-rule)] pt-6">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="inline-flex items-center gap-2 font-mono-tech text-xs tracking-wider text-[var(--color-ink-tertiary)] uppercase hover:text-[var(--color-ink)] transition-colors font-semibold"
                      >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        <span>Back</span>
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary inline-flex items-center gap-2 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send enquiry</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

            </AnimatePresence>

            {/* Error for non-final steps */}
            {currentStep < 6 && errorMsg && (
              <div className="flex items-center gap-2 text-[var(--color-accent)] font-mono-tech text-xs bg-[var(--color-accent-soft)] p-3 border border-[var(--color-accent)]/30">
                <AlertCircle size={14} aria-hidden="true" />
                <span role="alert">{errorMsg}</span>
              </div>
            )}

            {/* Step navigation for steps 1-5 */}
            {currentStep < 6 && (
              <div className="flex items-center justify-between border-t border-[var(--color-rule)] pt-6">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center gap-2 font-mono-tech text-xs tracking-wider text-[var(--color-ink-tertiary)] uppercase hover:text-[var(--color-ink)] transition-colors font-semibold"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <span>Next step</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            )}

          </div>
        )}

      </div>
    </main>
    </MotionConfig>
  );
}
