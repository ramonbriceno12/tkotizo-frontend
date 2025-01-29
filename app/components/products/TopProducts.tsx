import Image from "next/image";

const TopProducts = () => {
    return (
        <section className="py-16 bg-white">
            <h2 className="text-3xl font-semibold text-center mb-8">Top Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                    <Image
                        src="/product7.jpg"
                        alt="Product 7"
                        width={200}
                        height={200}
                        className="rounded-lg shadow-lg"
                    />
                    <h3 className="text-xl font-medium mt-4">Product 7</h3>
                    <p className="mt-2" style={{ color: 'rgb(4 165 16)', fontWeight: 'bold', fontSize: '18px' }}>6/15 participants</p>
                    <p className="text-gray-600 mt-2">$89.99</p>
                    <button className="mt-4 bg-white text-black border border-gray-400 p-2 hover:bg-gray-100">
                        Enter Raffle
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src="/product8.jpg"
                        alt="Product 8"
                        width={200}
                        height={200}
                        className="rounded-lg shadow-lg"
                    />
                    <h3 className="text-xl font-medium mt-4">Product 8</h3>
                    <p className="mt-2" style={{ color: 'rgb(4 165 16)', fontWeight: 'bold', fontSize: '18px' }}>6/15 participants</p>
                    <p className="text-gray-600 mt-2">$99.99</p>
                    <button className="mt-4 bg-white text-black border border-gray-400 p-2 hover:bg-gray-100">
                        Enter Raffle
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src="/product9.jpg"
                        alt="Product 9"
                        width={200}
                        height={200}
                        className="rounded-lg shadow-lg"
                    />
                    <h3 className="text-xl font-medium mt-4">Product 9</h3>
                    <p className="mt-2" style={{ color: 'rgb(4 165 16)', fontWeight: 'bold', fontSize: '18px' }}>6/15 participants</p>
                    <p className="text-gray-600 mt-2">$109.99</p>
                    <button className="mt-4 bg-white text-black border border-gray-400 p-2 hover:bg-gray-100">
                        Enter Raffle
                    </button>
                </div>
            </div>
        </section>
    );
}

export default TopProducts;