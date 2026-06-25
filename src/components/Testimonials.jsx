import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="testimonial-section">

      <h1>What Learners Say</h1>

      <div className="testimonial-grid">

        <motion.div
          className="testimonial-card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>★★★★★</h3>

          <p>
            The LMS helped me earn my
            Azure certification.
          </p>

          <span>- Employee</span>
        </motion.div>

        <motion.div
          className="testimonial-card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>★★★★★</h3>

          <p>
            Great platform for
            upskilling employees.
          </p>

          <span>- Manager</span>
        </motion.div>

      </div>

    </section>
  );
}