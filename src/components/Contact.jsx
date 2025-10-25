import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFDF5] p-6">
      <h1 className="text-4xl font-bold mb-8">تواصل معنا</h1>

      
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center space-y-4">
        <p className="text-lg"><span className="font-semibold">الهاتف:</span> 0100-000-0000</p>
        <p className="text-lg"><span className="font-semibold">العنوان:</span> شارع الوهمي، القاهرة، مصر</p>
        <p className="text-lg"><span className="font-semibold">البريد الإلكتروني:</span> info@eldonyaftar.com</p>

       
        <div className="flex justify-center gap-6 mt-4 text-2xl text-[#555]">
          <a href="#" aria-label="Facebook"><FaFacebookF className="hover:text-blue-600 transition-colors" /></a>
          <a href="#" aria-label="Instagram"><FaInstagram className="hover:text-pink-500 transition-colors" /></a>
          <a href="#" aria-label="TikTok"><FaTiktok className="hover:text-black transition-colors" /></a>
        </div>
      </div>
    </div>
  );
}
