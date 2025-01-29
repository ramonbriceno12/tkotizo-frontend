import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomeBanner = () => {
    return (
        <section className="relative z-10 flex flex-col items-center justify-center bg-gray-100">
            <Carousel
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
                className="w-full h-full"
            >
                <div className="relative">
                    <img src="/images/carousel/banner.png" alt="Banner 1" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                        <h1 className="text-4xl font-bold text-white mb-4">Genera Cotizaciones Rápidamente</h1>
                        <p className="text-lg text-gray-200 mb-8">Con nuestra herramienta, puedes generar cotizaciones en minutos y ahorrar tiempo valioso.</p>
                    </div>
                </div>
                <div className="relative">
                    <img src="/images/carousel/banner1.png" alt="Banner 2" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                        <h1 className="text-4xl font-bold text-white mb-4">Los Mejores Precios</h1>
                        <p className="text-lg text-gray-200 mb-8">Obtén las mejores cotizaciones con precios competitivos y ajustados a tus necesidades.</p>
                    </div>
                </div>
                <div className="relative">
                    <img src="/images/carousel/banner2.png" alt="Banner 3" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                        <h1 className="text-4xl font-bold text-white mb-4">Cotiza Totalmente Gratis</h1>
                        <p className="text-lg text-gray-200 mb-8">No necesitas pagar nada para cotizar, solo adjunta tu archivo de cotización y nosotros nos encargamos del resto.</p>
                    </div>
                </div>
                <div className="relative">
                    <img src="/images/carousel/banner3.png" alt="Banner 4" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                        <h1 className="text-4xl font-bold text-white mb-4">Atencion Directa</h1>
                        <p className="text-lg text-gray-200 mb-8">Ya no tienes que lidiar con proveedores, precios ni dolores de cabeza, dejanos el trabajo duro a nosotros.</p>
                    </div>
                </div>
                <div className="relative">
                    <img src="/images/carousel/banner4.png" alt="Banner 4" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                        <h1 className="text-4xl font-bold text-white mb-4">Soporte 24/7</h1>
                        <p className="text-lg text-gray-200 mb-8">Nuestro equipo de soporte está disponible las 24 horas del día, los 7 días de la semana para ayudarte con cualquier consulta.</p>
                    </div>
                </div>
            </Carousel>
        </section>
    );
};

export default HomeBanner;