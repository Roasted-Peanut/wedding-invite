import { motion } from "framer-motion";

export default function EventSection() {
  return (
    <section className="section" style={{ background: "#f8f3ef" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>TIỆC CƯỚI</h2>
        <p>🕒 18:00 | 12/01/2026</p>
        <p>📍 Nhà hàng ABC</p>
      </motion.div>
    </section>
  );
}
