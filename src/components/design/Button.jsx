import { motion } from "framer-motion";

export const Button = ({ className = "", href, onClick, children, white = false, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-medium transition-all duration-300";
  const colorClasses = white 
    ? "bg-n-1 text-n-8 hover:bg-n-2" 
    : "bg-n-8 text-n-1 hover:bg-n-7";
  const classes = `${baseClasses} ${colorClasses} ${className}`;

  const content = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative z-10"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
};

 