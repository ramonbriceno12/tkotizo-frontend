import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
    id: string;
    userId: string;
    name: string;
    description: string;
    stockQuantity: number;
    status: string;
    subCategoryId: string;
    partnerId: string;
    img: string;
    price: number;
    participants: number;
    totalParticipants: number;
}

const HotProducts = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8000/products/public');
                const data = await response.json();
                setProducts(data.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    console.log(products);

    return (
        <section className="py-16 bg-white">
            <h2 className="text-3xl font-semibold text-center mb-8">Hot Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map(product => (
                    <div key={product.id} className="flex flex-col items-center">
                        <Image
                            src={product.img}
                            alt={product.name}
                            width={200}
                            height={200}
                            className="rounded-lg shadow-lg"
                        />
                        <h3 className="text-xl font-medium mt-4">{product.name}</h3>
                        <p className="mt-2" style={{ color: 'rgb(4 165 16)', fontWeight: 'bold', fontSize: '18px' }}>
                            {product.participants}/{product.totalParticipants} participants
                        </p>
                        <p className="text-gray-600 mt-2">${product.price}</p>
                        <button className="mt-4 bg-white text-black border border-gray-400 p-2 hover:bg-gray-100">
                            Enter Raffle
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default HotProducts;