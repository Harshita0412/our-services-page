import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';
import { motion } from 'framer-motion';

export default function OurServices() {
  return (
    <div>
      <Header />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <ServiceSection />
      </motion.main>
      <Footer />
    </div>
  );
}
