import { motion } from "framer-motion";
import { Button } from "./design/Button";

const Collaborations = () => {
  return (
    <section className="py-20 bg-n-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-n-1 mb-4">Let's Work Together</h2>
          <p className="text-n-2 mb-8 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              href="https://www.canva.com/design/DAGdZ61TyAQ/Si6ZdQuLjDWudBjE-_i_LQ/view?utm_content=DAGdZ61TyAQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h65dca02bb4"
              white
              className="font-mono tracking-wider text-base relative overflow-hidden group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.span
                className="relative z-10 inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                View Resume
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/20 via-[#B06AB3]/20 to-[#4A90E2]/20"
                initial={{ x: "100%" }}
                whileHover={{ x: "-100%" }}
                transition={{ duration: 0.5 }}
              />
            </Button>
            <Button
              href="#contact"
              white
              className="font-mono tracking-wider text-base relative overflow-hidden group"
            >
              <motion.span
                className="relative z-10 inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Contact Me
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/20 via-[#B06AB3]/20 to-[#4A90E2]/20"
                initial={{ x: "100%" }}
                whileHover={{ x: "-100%" }}
                transition={{ duration: 0.5 }}
              />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Collaborations; 