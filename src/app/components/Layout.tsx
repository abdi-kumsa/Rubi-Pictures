import { useLocation, useOutlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AnimatePresence, motion } from "framer-motion";

export function Layout() {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {outlet}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
