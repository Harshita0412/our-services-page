import { motion } from 'framer-motion';

export default function ServiceSection() {
  return (
    <section>
      <motion.div whileHover={{ scale: 1.1 }}>
        <h2>Service Title</h2>
        <p>Description of the service.</p>
      </motion.div>
    </section>
  );
}
