import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [menuAnim, setMenuAnim] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setMenuAnim(true);
    setTimeout(() => {
      setMenuAnim(false);
      navigate("/menu");
    }, 800); 
  };

  return (
    <>
      <div className="relative h-[90vh] flex items-center justify-center text-center">
       
        <img
          src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1761407671/12539_bzstpq.jpg"
          alt="الدنيا فطار"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        
        <div className="relative z-10 text-white max-w-3xl px-6">
          <h1
            className="text-6xl font-bold mb-6 drop-shadow-md text-white"
            style={{ fontFamily: "second" }}
          >
            الدنيا فطار
          </h1>
          <p
            className="text-2xl leading-relaxed font-semibold drop-shadow"
            style={{ fontFamily: "2nd" }}
          >
            بداية يومك محتاجة مزاج رايق، لقمة سخنة، وقهوة على أصولها ☕  
            في <span className="text-[#FFD47F]">الدنيا فطار</span> هتلاقي روح البيت المصري  
            ونكهة الفطار البلدي اللي بيرجعلك الحنين والراحة.
          </p>

          <button
            onClick={handleMenuClick}
            className="mt-10 bg-[#F2E2B1] text-[#5A3E2B] px-8 py-3 rounded-full text-xl font-bold hover:bg-[#E9D48A] transition duration-300"
          >
            شوف المنيو
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuAnim && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-full bg-yellow-500 z-50 flex justify-center items-center text-white text-6xl font-bold"
          >
            منيو
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
