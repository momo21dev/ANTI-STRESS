export default function Footer() {
        return (
            <footer className="bg-yellow-50 text-gray-700 py-8 mt-12 border-t">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-bold text-yellow-600">eldonia fetar Restaurant</h2>
                            <p className="text-sm mt-2">
                                تجربة فطور وغداء بطعم البيت وبجودة فندقية.
                            </p>
                        </div>

                       
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="hover:text-yellow-600 transition-colors"
                                aria-label="Instagram"
                            >
                                <i className="fa-brands fa-instagram fa-lg"></i>
                            </a>
                            <a
                                href="#"
                                className="hover:text-yellow-600 transition-colors"
                                aria-label="Facebook"
                            >
                                <i className="fa-brands fa-facebook fa-lg"></i>
                            </a>
                            <a
                                href="#"
                                className="hover:text-yellow-600 transition-colors"
                                aria-label="Tiktok"
                            >
                                <i className="fa-brands fa-tiktok fa-lg"></i>
                            </a>
                        </div>
                    </div>

                    
                    <div className="border-t border-gray-200 mt-6 pt-4 text-center text-sm text-gray-500">
                        <p>© 2025 Edeny Restaurant. All Rights Reserved.</p>
                        <p className="mt-1">
                            Designed & Developed by <span className="text-yellow-600 font-semibold">Mohamed Mostafa</span>
                        </p>
                    </div>
                </div>
            </footer>
        );
    }

