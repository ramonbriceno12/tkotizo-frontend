import Image from "next/image";

const BestRaffles = () => {
    return (
        <section className="py-16 bg-gray-100">
            <h2 className="text-3xl font-semibold text-center mb-8">Best Raffles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                    <Image
                        src="/product4.jpg"
                        alt="Product 4"
                        width={200}
                        height={200}
                        className="rounded-lg shadow-lg"
                    />
                    <h3 className="text-xl font-medium mt-4">Product 4</h3>
                    <p className="mt-2" style={{ color: 'rgb(4 165 16)', fontWeight: 'bold', fontSize: '18px' }}>6/15 participants</p>
                    <p className="text-gray-600 mt-2">$59.99</p>
                    <button className="mt-4 bg-white text-black border border-gray-400 p-2 hover:bg-gray-100">
                        Enter Raffle
                    </button>

                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src="/product5.jpg"
                        alt="Product 5"
                        width={200}
                        height={200}
                        className="rounded-lg shadow-lg"
                    />
                    <h3 className="text-xl font-medium mt-4">Product 5</h3>
                    <p className="mt-2" style={{ color: 'rgb(4 165 16)', fontWeight: 'bold', fontSize: '18px' }}>6/15 participants</p>
                    <p className="text-gray-600 mt-2">$69.99</p>
                    <button className="mt-4 bg-white text-black border border-gray-400 p-2 hover:bg-gray-100">
                        Enter Raffle
                    </button>

                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src="/product6.jpg"
                        alt="Product 6"
                        width={200}
                        height={200}
                        className="rounded-lg shadow-lg"
                    />
                    <h3 className="text-xl font-medium mt-4">Product 6</h3>
                    <p className="mt-2" style={{ color: 'rgb(4 165 16)', fontWeight: 'bold', fontSize: '18px' }}>6/15 participants</p>
                    <p className="text-gray-600 mt-2">$79.99</p>
                    <button className="mt-4 bg-white text-black border border-gray-400 p-2 hover:bg-gray-100">
                        Enter Raffle
                    </button>

                </div>
            </div>
        </section>
    )
}

export default BestRaffles;