import React, { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface SubCategory {
    id: string;
    name: string;
}

interface Category {
    id: string;
    name: string;
    subCategories?: SubCategory[];
}

interface CategoriesResponse {
    data: Category[];
}

const CategoriesBar = () => {
    const [categories, setCategories] = useState<CategoriesResponse>({ data: [] });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSubDropdownOpen, setIsSubDropdownOpen] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:8000/categories/list/main/', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}` // Add Bearer token to headers
                    }
                });
                const data = await response.json();
                setCategories({ data });
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    console.log(categories);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleSubDropdown = (categoryId: string) => {
        setIsSubDropdownOpen(isSubDropdownOpen === categoryId ? null : categoryId);
    }

    return (
        <div className="py-4 bg-[#00387e] shadow-md p-4">
            <div className="hidden md:flex justify-around items-center">
                {categories.data.data && categories.data.data.map(category => (
                    <div key={category.id} className="relative group">
                        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => toggleSubDropdown(category.id)}>
                            <a href="#" className="text-white hover:text-gray-300">{category.name}</a>
                            {category.subCategories && category.subCategories.length > 0 && (
                                <FaChevronDown className="text-white" />
                            )}
                        </div>
                        {isSubDropdownOpen === category.id && category.subCategories && category.subCategories.length > 0 && (
                            <div
                                style={{ marginTop: '2.5rem', marginRight: '1.5rem' }}
                                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md transition-opacity duration-300"
                            >
                                {category.subCategories.map(subCategory => (
                                    <a
                                        key={subCategory.id}
                                        href="#"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    >
                                        {subCategory.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="md:hidden">
                <div className="flex justify-between items-center px-4" onClick={toggleDropdown}>
                    <span className="text-white">Categories</span>
                    <FaChevronDown className="text-white" />
                </div>
                {isDropdownOpen && (
                    <div className="mt-2 bg-white shadow-lg rounded-md">
                        {categories.data.data && categories.data.data.map(category => (
                            <div key={category.id} className="relative group">
                                <div className="flex items-center space-x-2 px-4 py-2 cursor-pointer" onClick={() => toggleSubDropdown(category.id)}>
                                    <a href="#" className="text-gray-700 hover:text-gray-900">{category.name}</a>
                                    {category.subCategories && category.subCategories.length > 0 && (
                                        <FaChevronDown className="text-gray-700" />
                                    )}
                                </div>
                                {isSubDropdownOpen === category.id && category.subCategories && category.subCategories.length > 0 && (
                                    <div className="pl-4">
                                        {category.subCategories.map(subCategory => (
                                            <a
                                                key={subCategory.id}
                                                href="#"
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                {subCategory.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoriesBar;