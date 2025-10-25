import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [animType, setAnimType] = useState("")
    const navigate = useNavigate();

    const handleMenuClick = () => {
        setAnimType("menu");
        setTimeout(() => {
            setAnimType("");
            navigate("/menu");
        }, 800);
    };

    const handleContactClick = () => {
        setAnimType("contact");
        setTimeout(() => {
            setAnimType("");
            navigate("/contact");
        }, 800);
    };

    return (
        <>
            <div className="bg-[#F2E2B1] shadow-md">
                <div
                    dir="rtl"
                    className="flex flex-col md:flex-row justify-between items-center mx-6 md:mx-8 py-4 gap-4 md:gap-0"
                >
                    <Link to={'/'}>

                        <div className="flex items-center gap-4 md:gap-5">
                            <motion.img
                                src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1761405981/5024555_ugctk7.png"
                                alt="logo"
                                width="80px"
                                className="drop-shadow-md"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.h1
                                className="text-4xl md:text-5xl font-bold text-[#5A3E2B] tracking-wide hover:text-[#8B5E3C] transition-colors duration-300"
                                style={{ fontFamily: "logo" }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                الدنيا فطار
                            </motion.h1>

                        </div>
                    </Link>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-10 text-xl md:text-2xl font-bold text-[#5A3E2B]">
                        <button
                            onClick={handleMenuClick}
                            className="hover:text-[#8B5E3C] transition duration-300 hover:scale-105"
                            style={{ fontFamily: "2nd" }}
                        >
                            منيو
                        </button>
                        <button
                            onClick={handleContactClick}
                            className="bg-[#5A3E2B] text-[#F2E2B1] px-5 py-2 rounded-full hover:bg-[#8B5E3C] transition duration-300"
                        >
                            تواصل معنا
                        </button>
                    </div>
                </div>
            </div >

            <AnimatePresence>
                {animType && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="fixed top-0 left-0 w-full h-full bg-yellow-500 z-50 flex justify-center items-center text-white text-6xl font-bold"
                    >
                        {animType === "menu" ? "منيو" : "تواصل معنا"}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
