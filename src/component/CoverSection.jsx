import { motion } from "framer-motion";

export default function CoverSection() {
  return (
    <section className="section" style={{}}>
      <div style={{ maxWidth: 360 }}>
        <motion.p
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ letterSpacing: 2 }}
        >
          TRÂN TRỌNG KÍNH MỜI
        </motion.p>
        {/* Tên cô dâu chú rể */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{ margin: "0" }}
        >
          Văn Phụng
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ margin: "0" }}
        >
          ❤️
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{ margin: "0" }}
        >
          Hồng Gấm
        </motion.h1>

        {/* Text từ phải */}
        <motion.p
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          12 • 01 • 2026
        </motion.p>
        {/* Ảnh từ dưới lên */}
        <motion.img
          src="..assets/wedding/031A7086.jpg"
          alt="Wedding"
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            width: "100%",
            borderRadius: 16,
            margin: "0",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          }}
        />
      </div>
    </section>
  );
}
