export default function Header() {

    const handleMenuClick = () => {
        document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
    };

    const handleContactClick = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className="bg-[#F2E2B1] shadow-md">
                <div
                    dir="rtl"
                    className="flex flex-col md:flex-row justify-between items-center mx-6 md:mx-8 py-4 gap-4 md:gap-0"
                >
                    <div
                        className="flex items-center gap-4 md:gap-5 cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        <img
                            src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1761405981/5024555_ugctk7.png"
                            alt="logo"
                            width="80px"
                            className="drop-shadow-md"
                        />
                        <h1
                            className="text-4xl md:text-5xl font-bold text-[#5A3E2B] tracking-wide hover:text-[#8B5E3C] transition-colors duration-300"
                            style={{ fontFamily: "logo" }}
                        >
                            الدنيا فطار
                        </h1>
                    </div>

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
            </div>
        </>
    );
}
