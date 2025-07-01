import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

const EarthCTASection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="earth-cta" style={{ position: 'relative', height: '80vh', overflow: 'hidden' }}>
      <motion.video
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
        }}
        initial="hidden"
        animate={controls}
        autoPlay
        loop
        muted
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src="/google_earth_1.webm" type="video/webm" />
        <source src="/google_earth_1.mp4" type="video/mp4" />
      </motion.video>
      <motion.div
        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { delay: 0.8 } } }}
        initial="hidden"
        animate={controls}
        style={{ position: 'absolute', bottom: '12%', left: '0', right: '0', textAlign: 'center' }}
      >
        <Link to="/explore" className="cta-btn">
          Find Things to Do in Jaco
        </Link>
      </motion.div>
    </section>
  );
};

export default EarthCTASection; 