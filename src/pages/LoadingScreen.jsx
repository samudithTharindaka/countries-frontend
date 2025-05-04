import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import worldImg from "../assets/world.png";

export default function LoadingScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main");
    }, 5000); // 3 seconds delay
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >

 
    <motion.img
      src={worldImg}
      alt="Earth"
      className="w-1/2 max-w-xs object-contain"
      initial={{ scale: 0.5, rotate: 0 }}
      animate={{ scale: 1, rotate: 800 }}
      transition={{ duration: 7, 
        ease: "easeInOut" }}
    />
  {/* </div> */}
  
 </motion.div>
  );
}
