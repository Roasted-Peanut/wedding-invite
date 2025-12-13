import { motion } from "framer-motion";
import { a, g } from "framer-motion/client";
import WeddingCalendar from "./WeddingCalendar";
import { EVENT_LOCATIONS } from "../constants/weddingData";

export default function EventSection() {
  return (
    <section className="section">
      <>
        <div
          style={{
            maxWidth: 360,
            gap: 20,
            overflow: "hidden",
            flex: 1,
          }}
        >
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <h3 style={{ margin: 5 }}>LỄ VU QUY</h3>
            <div style={{ flex: 1, height: 1, background: "#999" }} />
          </div>

          <div
            style={{
              flexDirection: "row",
              display: "flex",
              gap: 8,
            }}
          >
            {/* BÊN TRÁI */}
            <div style={{ flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                <img
                  src="./wedding/031A7236.jpg"
                  alt="Bride"
                  style={{
                    width: "100%",
                    borderRadius: 16,
                    boxShadow: "0 10px 24px rgba(0,0,0,0.15)",
                    marginTop: "8px",
                  }}
                />
              </motion.div>
            </div>

            {/* BÊN PHẢI */}
            <div style={{ flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                {/* Thông tin */}
                <div style={{ lineHeight: 1.8 }}>
                  <strong>11:30 - Thứ 7</strong>
                  <div>27-12-2025</div>
                  <div style={{ fontStyle: "italic", fontSize: 14 }}>
                    (Tức 08-11 năm Ất Tị )
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <strong>Tại tư gia nhà gái</strong>
                  </div>
                  <div className="event-map">
                    <iframe
                      title="Google Map"
                      src={EVENT_LOCATIONS.BRIDE.mapUrl}
                      width="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* LỄ THÀNH HÔN */}
        <div
          style={{
            maxWidth: 360,
            gap: 20,
            overflow: "hidden",
            flex: 1,
            marginTop: 24,
          }}
        >
          <div
            style={{
              flexDirection: "row-reverse",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <h3 style={{ margin: 5 }}>LỄ THÀNH HÔN</h3>
            <div style={{ flex: 1, height: 1, background: "#999" }} />
          </div>

          <div
            style={{
              flexDirection: "row-reverse",
              display: "flex",
              gap: 8,
            }}
          >
            {/* BÊN TRÁI */}
            <div style={{ flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <img
                  src="./wedding/031A7396.jpg"
                  alt="Groom"
                  style={{
                    width: "100%",
                    borderRadius: 16,
                    boxShadow: "0 10px 24px rgba(0,0,0,0.15)",
                    marginTop: "8px",
                  }}
                />
              </motion.div>
            </div>

            {/* BÊN PHẢI */}
            <div style={{ flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {/* Thông tin */}
                <div style={{ lineHeight: 1.8 }}>
                  <strong>11:30 - Chủ Nhật</strong>
                  <div>28-12-2025</div>
                  <div style={{ fontStyle: "italic", fontSize: 14 }}>
                    (Tức 09-11 năm Ất Tị )
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <strong>Tại tư gia nhà trai</strong>
                  </div>
                  <iframe
                    title="Google Map"
                    src={EVENT_LOCATIONS.GROOM.mapUrl}
                    width="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <WeddingCalendar />
      </>
    </section>
  );
}
