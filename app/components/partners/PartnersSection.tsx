import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Partner {
    id: string;
    name: string;
    email: string;
    status: string;
    img: string;
}

const PartnerSection = () => {
    const [partners, setPartners] = useState<Partner[]>([]);

    useEffect(() => {
        // Fetch partner data from an API or use static data
        const fetchPartners = async () => {
            try {
                const response = await fetch('http://localhost:8000/partners/public/');
                const data = await response.json();
                setPartners(data.data);
            } catch (error) {
                console.error('Error fetching partners:', error);
            }
        };

        fetchPartners();
    }, []);

    console.log(partners);

    return (
        <section className="py-16 bg-gray-100">
            <h2 className="text-3xl font-semibold text-center mb-8">Our Partners</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map(partner => (
                    <div key={partner.id} className="flex flex-col items-center">
                        <Image
                            src={partner.img}
                            alt={partner.name}
                            width={150}
                            height={150}
                            className="rounded-lg shadow-lg"
                        />
                        <h3 className="text-xl font-medium mt-4">{partner.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PartnerSection;