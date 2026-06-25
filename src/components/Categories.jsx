import { motion } from "framer-motion";

export default function Categories() {
  const categories = [
    "AI & ML",
    "Cloud Computing",
    "DevOps",
    "Cyber Security",
    "Data Analytics",
    "Software Engineering",
  ];

  return (
    <section className="categories-section">
      <h1>Popular Learning Areas</h1>

      <div className="category-grid">
        {categories.map((item, index) => (
          <motion.div
            className="category-card"
            key={index}
            whileHover={{ y: -10 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}