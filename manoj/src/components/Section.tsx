import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

export default function Section(props: PropsWithChildren<{ id?: string; title?: string }>) {
  const { id, title, children } = props;
  return (
    <section id={id} className="py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {title ? <h2 className="section-title">{title}</h2> : null}
        {children}
      </motion.div>
    </section>
  );
}
