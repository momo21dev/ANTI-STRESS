export default function Menu() {
    const items = [
        {
            name: "جبنة بيضاء بالطماطم والزيت",
            description:
                "جبنة بلدي فريش متقدمة مع طماطم وزيت زيتون وعيش بلدي سخن.",
            price: "45 جنيه",
            image:
                "https://res.cloudinary.com/dr5cfk7qh/image/upload/v1761409337/960_up8nkr.jpg",
        },
        {
            name: "بيض مقلي",
            description:
                "بيض بلدي طازج متحمر في زبدة بلدي، بيتقدم مع عيش وملح خفيف.",
            price: "40 جنيه",
            image:
                "https://res.cloudinary.com/dr5cfk7qh/image/upload/v1761409507/2508_paanfp.jpg",
        },
        {
            name: "لانشون بالجبنة",
            description: "شرائح لانشون مدخن مع جبنة رومي سايحة وعيش توست.",
            price: "55 جنيه",
            image:
                "https://res.cloudinary.com/dr5cfk7qh/image/upload/v1761409646/2149514110_itrdp6.jpg",
        },
        {
            name: "فول بالزيت الحار",
            description: "فول مدمس متبهر بزيت حار وكمون وليمون، بيتقدم مع طحينة.",
            price: "35 جنيه",
            image:
                "https://res.cloudinary.com/dr5cfk7qh/image/upload/v1761409769/2148739182_wfnmxi.jpg",
        },
        {
            name: "شاي باللبن",
            description: "شاي كوشري أصيل بالحليب المغلي، على الطريقة المصرية.",
            price: "25 جنيه",
            image:
                "https://res.cloudinary.com/dr5cfk7qh/image/upload/v1761409850/4030_ektzba.jpg",
        },
        {
            name: "قهوة تركي",
            description: "قهوة تركي على نار هادية، برغوة تقيلة ومذاق مزاج.",
            price: "30 جنيه",
            image:
                "https://res.cloudinary.com/dr5cfk7qh/image/upload/v1761409950/2148336806_eglgdp.jpg",
        },
    ];

    return (
        <section className="py-16 bg-yellow-50" dir="rtl">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-yellow-700 mb-10">
                    منيو الفطار
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-56 object-cover"
                            />

                            
                            <div className="absolute top-4 left-4 bg-yellow-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                                {item.price}
                            </div>

                           
                            <div className="p-6 text-right">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {item.name}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
