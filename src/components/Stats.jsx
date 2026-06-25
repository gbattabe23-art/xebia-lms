import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { number: "50K+", label: "Learners" },
    { number: "120+", label: "Countries" },
    { number: "3000+", label: "Courses" },
    { number: "500+", label: "Trainers" },
  ];

  return (
    <section className="stats-section">
      {stats.map((item, index) => (
        <motion.div
          key={index}
          className="stat-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>{item.number}</h2>
          <p>{item.label}</p>
        </motion.div>
      ))}
    </section>
  );
}