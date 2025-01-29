import React, { useEffect, useState } from 'react';

interface Product {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
}

interface Category {
    id: string;
    name: string;
    products: Product[];
}

const Page = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchCategoriesAndProducts = async () => {
            try {
                const response = await fetch('http://localhost:8000/categories');
                const data = await response.json();
                const categoriesWithProducts = await Promise.all(
                    data.map(async (category: any) => {
                        const productsResponse = await fetch(`http://localhost:8000/categories/${category.id}/products`);
                        const productsData = await productsResponse.json();
                        return {
                            ...category,
                            products: productsData,
                        };
                    })
                );
                setCategories(categoriesWithProducts);
            } catch (error) {
                console.error('Error fetching categories and products:', error);
            }
        };

        fetchCategoriesAndProducts();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            {categories.map(category => (
                <div key={category.id} className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {category.products.map(product => (
                            <div key={product.id} className="border p-4 rounded-lg shadow-lg">
                                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                                <h3 className="text-xl font-medium">{product.name}</h3>
                                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Page;