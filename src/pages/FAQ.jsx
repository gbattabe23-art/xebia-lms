import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQ() {

  const [open, setOpen] = useState(null);

    const faqs = [
  {
    question: "Can I enroll in multiple courses at once?",
    answer:
      "Yes. Learners can enroll in multiple courses simultaneously and progress through them at their own pace. Your dashboard tracks course completion, progress, deadlines, and certifications for each enrolled course."
  },

  {
    question: "What kind of support can I expect from instructors?",
    answer:
      "Learners receive guidance through discussion forums, live Q&A sessions, course announcements, and instructor feedback. Support availability may vary depending on the course and learning program."
  },

  {
    question: "Are the courses self-paced or do they have specific start and end dates?",
    answer:
      "Most courses are self-paced, allowing learners to study according to their schedules. Certain certification programs, bootcamps, and instructor-led training sessions may follow fixed timelines and deadlines."
  },

  {
    question: "Are there any prerequisites for the courses?",
    answer:
      "Prerequisites vary by course. Each course page clearly outlines recommended background knowledge, technical skills, and learning requirements to help learners succeed in the program."
  }
];

  return (
    <>
      <Navbar />

     <section className="faq-hero">

  <div className="faq-left">

    <motion.h1
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
    >
      Frequently
      <br />
      Asked Questions
    </motion.h1>

    <p>
      Still have any questions?
      Contact our team via
      <span> support@xebialms.com</span>
    </p>

    <button className="faq-btn">
      See All FAQ's
    </button>

  </div>

  <div className="faq-right">

    {faqs.map((faq, index) => (

      <motion.div
        key={index}
        className="faq-card"
        whileHover={{ scale: 1.02 }}
      >

        <div
          className="faq-question"
          onClick={() =>
            setOpen(
              open === index
                ? null
                : index
            )
          }
        >

          <h3>{faq.question}</h3>

          <span>
            {open === index
              ? "−"
              : "+"}
          </span>

        </div>

        {open === index && (

          <motion.div
            className="faq-answer"
            initial={{
              opacity: 0,
              height: 0
            }}
            animate={{
              opacity: 1,
              height: "auto"
            }}
          >

            <p>{faq.answer}</p>

          </motion.div>

        )}

      </motion.div>

    ))}

  </div>

</section>
<section className="support-cards">

  <div className="support-card">
    <h3>💻 Technical Support</h3>

    <p>
      Get help with login issues,
      account access, password resets,
      and platform troubleshooting.
    </p>
  </div>

  <div className="support-card">
    <h3>🎓 Learning Support</h3>

    <p>
      Assistance with course enrollment,
      learning paths, assignments,
      and progress tracking.
    </p>
  </div>

  <div className="support-card">
    <h3>🏆 Certification Help</h3>

    <p>
      Questions related to certificates,
      assessments, badges,
      and completion criteria.
    </p>
  </div>

</section>
<Footer /> </> ); }