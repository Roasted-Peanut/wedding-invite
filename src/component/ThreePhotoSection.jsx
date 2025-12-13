import { motion } from "framer-motion";

export default function ThreePhotoSection() {
  return (
    <section className="section">
      <div style={styles.wrapper}>
        {/* LEFT */}
        <motion.img
          src="./wedding/031A7329.jpg"
          alt="LEFT"
          style={styles.sideImage}
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
        />

        {/* CENTER */}
        <motion.img
          src="./wedding/031A7424.jpg"
          alt="CENTER"
          style={styles.centerImage}
          initial={{ opacity: 0, scale: 0.85, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
        />

        {/* RIGHT */}
        <motion.img
          src="./wedding/031A7389.jpg"
          alt="RIGHT"
          style={styles.sideImage}
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
        />
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    maxWidth: 360,
    overflow: "hidden",
    marginTop: 24,
  },
  sideImage: {
    width: 100,
    height: 170,
    objectFit: "cover",
    borderRadius: 12,
    flexShrink: 0,
    opacity: 0.9,
  },
  centerImage: {
    width: 120,
    height: 200,
    objectFit: "cover",
    borderRadius: 16,
    boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
    zIndex: 2,
  },
};
