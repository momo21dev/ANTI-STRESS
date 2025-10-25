export default function OurValues() {
    return (
        <>
            <div dir="rtl" className="bg-[#F9F3E1] py-20 px-8 md:px-24 text-[#5A3E2B]">
                <h2
                    className="text-5xl font-bold text-center mb-16"
                    style={{ fontFamily: "logo" }}
                >
                    قيمنا في الدنيا فطار
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    
                    <div className="bg-[#F2E2B1] rounded-2xl shadow-md p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="text-5xl mb-4"></div>
                        <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: "2nd" }}>
                            الدفا
                        </h3>
                        <p className="text-xl font-semibold leading-relaxed" style={{ fontFamily: "2nd" }}>
                            عايزين كل عميل يحس إنه في بيت جدته — ريحة العيش السخن، والقهوة، والونس الصبح.
                        </p>
                    </div>

                    
                    <div className="bg-[#F2E2B1] rounded-2xl shadow-md p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="text-5xl mb-4"></div>
                        <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: "2nd" }}>
                            الأصالة
                        </h3>
                        <p className="text-xl font-semibold leading-relaxed" style={{ fontFamily: "2nd" }}>
                            بنقدّم الأكل بطابع مصري أصيل، بنفس نكهة زمان لكن بجودة النهارده.
                        </p>
                    </div>

                    
                    <div className="bg-[#F2E2B1] rounded-2xl shadow-md p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="text-5xl mb-4"></div>
                        <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: "2nd" }}>
                            البساطة
                        </h3>
                        <p className="text-xl font-semibold leading-relaxed" style={{ fontFamily: "2nd" }}>
                            الجمال في البساطة — لقمة حلوة، جو رايق، ومزاج فطار على أصوله.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
