import { motion } from 'framer-motion';

interface StatCardProps {
  number: string;
  label: string;
  delay?: number;
}

const StatCard = ({ number, label, delay = 0 }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="text-4xl font-bold text-white mb-2">{number}</div>
      <div className="text-emerald-200">{label}</div>
    </motion.div>
  );
};

export default StatCard;