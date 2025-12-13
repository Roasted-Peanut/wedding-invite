import { m, motion } from "framer-motion";

export default function CoupleSection() {
  return (
    <section className="section">
      <div
        style={{
                  maxWidth: 360,
            overflow: "hidden"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* NHÀ TRAI */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            style={{
              flex: 1,
              textAlign: "right",
            }}
          >
            <h3>NHÀ TRAI</h3>
            <p>
              <strong>Ông:</strong> Phạm Văn Quang
            </p>
            <p>
              <strong>Bà:</strong> Hoàng Thị Thư
            </p>
            <p>
              Nhà văn hoá thôn Ứng Cử, xã Chuyên Mỹ, huyện Phú Xuyên, TP Hà Nội
            </p>
          </motion.div>
          <motion.div>
            <div style={{ width: 20 }}></div>
          </motion.div>

          {/* NHÀ GÁI */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            style={{
              flex: 1,
              textAlign: "left",
            }}
          >
            <h3>NHÀ GÁI</h3>
            <p>
              <strong>Ông:</strong> Nguyễn Văn Bính
            </p>
            <p>
              <strong>Bà:</strong> Nguyễn The
            </p>
            <p>096 Nguyễn Hải Thanh, xã Thanh Hà, TP Hải Dương</p>
          </motion.div>
        </div>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Trân Trọng Báo Tin Lễ Thành Hôn Của
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            style={{ textAlign: "left", margin: "0" }}
          >
            Văn Phụng
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ margin: "0" }}
          >
            &
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            style={{ textAlign: "right", margin: "0" }}
          >
            Hồng Gấm
          </motion.h2>
          
          <motion.img
            src="..assets/wedding/031A6703.jpg"
            alt="Wedding"
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9 }}
            style={{
              width: "100%",
              borderRadius: 16,
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              marginTop: 16,
            }}
          />
          <motion.h2
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            Save The Date
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
