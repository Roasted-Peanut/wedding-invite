import { useState } from "react";
import { motion } from "framer-motion";
import { ImageViewer } from "./ImageViewer";

export default function WeddingAlbumSection() {
  const photos = [
    "./wedding/031A6703.jpg",
    "./wedding/031A6567.jpg",
    "./wedding/031A6940.jpg",
    "./wedding/031A7025.jpg",
    "./wedding/031A7086.jpg",
    "./wedding/031A7236.jpg",
    "./wedding/031A7252.jpg",
    "./wedding/031A7270.jpg",
    "./wedding/031A7302.jpg",
    "./wedding/031A7329.jpg",
    "./wedding/031A7358.jpg",
    "./wedding/031A7389.jpg",
    "./wedding/031A7396.jpg",
    "./wedding/031A7417.jpg",
    "./wedding/031A7424.jpg",
  ];

  const [active, setActive] = useState(null);

  const blocks = [];
  let isDouble = true; // 2-1 xen kẽ

  for (let i = 0; i < photos.length; ) {
    // ===== DOUBLE IMAGE BLOCK =====
    if (isDouble && i + 1 < photos.length) {
      const leftIndex = i;
      const rightIndex = i + 1;

      blocks.push(
        <div key={`double-${i}`} style={styles.double}>
          {/* LEFT */}
          <motion.img
            src={photos[leftIndex]}
            loading="lazy"
            style={styles.doubleImg}
            onClick={() => setActive(leftIndex)}
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          />

          {/* RIGHT */}
          <motion.img
            src={photos[rightIndex]}
            loading="lazy"
            style={styles.doubleImg}
            onClick={() => setActive(rightIndex)}
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          />
        </div>
      );

      i += 2;
    }
    // ===== SINGLE IMAGE BLOCK =====
    else {
      const currentIndex = i;

      blocks.push(
        <motion.img
          key={`single-${i}`}
          src={photos[currentIndex]}
          loading="lazy"
          style={styles.singleImg}
          onClick={() => setActive(currentIndex)}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ amount: 0.35, once: false }}
        />
      );

      i += 1;
    }

    // đổi pattern 2 → 1 → 2 → 1
    isDouble = !isDouble;
  }

  return (
    
      <section className="section">
      <div style={styles.wrapper}>{blocks}</div>
      <ImageViewer
        images={photos}
        index={active}
        onClose={() => setActive(null)}
        onChange={setActive}
      />
      </section>

      
    
  );
}
const styles = {
  section: {
    padding: "60px 0",
    display: "flex",
    justifyContent: "center",
  },
  wrapper: {
    maxWidth: 360,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    overflowX: 'hidden',
  },
  double: {
    display: "flex",
    gap: 12,
    witdh: "100%",
  },
  doubleImg: {
    width: 180,
    height: 250,
    objectFit: "cover",
    borderRadius: 14,
    cursor: "pointer",
  },
  singleImg: {
    // width: "100%",
    flex: 1,
    height: 240,
    objectFit: "cover",
    borderRadius: 16,
    cursor: "pointer",
  },
};
