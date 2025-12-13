import { motion } from "framer-motion";

export default function WeddingCalendar() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weddingDays = [27, 28];

  return (
    <motion.div
      style={styles.wrapper}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ amount: 0.3, once: false }}
    >
      {/* Background */}
      <div style={styles.bg} />

      {/* Content */}
      <div style={styles.content}>
        <div style={styles.right}>
          {/* Header */}
          <motion.div
            style={styles.header}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: false }}
          >
            {["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </motion.div>

          {/* Days */}
          <motion.div
            style={styles.grid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.03,
                },
              },
            }}
          >
            {days.map((day) => {
              const isWeddingDay = weddingDays.includes(day);

              return (
                <motion.div
                  key={day}
                  style={styles.day}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.25 }}
                >
                  {isWeddingDay ? (
                    <motion.span
                      style={styles.heart}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: [0, 1.3, 1] }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: false }}
                    >
                      {day}
                    </motion.span>
                  ) : (
                    day
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    background: "#fff",
    maxWidth: "360px",
    marginTop: "24px",
  },
  bg: {
    position: "absolute",
    inset: 0,
    backgroundImage: "url(./wedding/031A6703.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  content: {
    position: "relative",
    display: "flex",
    padding: 16,
    gap: 16,
  },
  left: {
    fontSize: 28,
    fontWeight: 600,
    lineHeight: 1.2,
  },
  right: {
    flex: 1,
    fontSize: 12,
  },
  header: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    marginBottom: 8,
    fontWeight: 600,
    textAlign: "center",
    color: "#ffff",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: 6,
    textAlign: "center",
  },
  day: {
    padding: 4,
    color: "#ffff",
  },
  heart: {
    color: "#ff4d6d",
    fontWeight: 700,
    fontSize: 20,
    textShadow: "0 2px 6px rgba(0,0,0,0.3)",
  },
};
