export default function Hero() {
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

         
        </div>
      </div>

      
    </>
  );
}
