export const navVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", damping: 20, delay: 0.15 },
  },
  closed: {
    y: "-100vh",
    opacity: 0,
    transition: { type: "spring", damping: 20, delay: 0.15 },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: { type: "spring", damping: 20, delay: 0.15 },
  },
};
