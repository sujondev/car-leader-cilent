import React, { useState } from 'react';

const Promotion = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "Product 1", price: 19.99, image: "https://i.ibb.co/gygqf9S/car2.jpg" },
        { id: 2, name: "Product 2", price: 29.99, image: "https://i.ibb.co/JQ6LcN4/car8.jpg" },
        { id: 3, name: "Product 3", price: 39.99, image: "https://i.ibb.co/16dz9tK/car7.jpg" }
    ]);

    return (
        <div className="bg-gray-300 p-4">
            <h2 className="text-2xl font-medium text-center">Promotion</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <div className="w-1/3 p-2" key={product.id}>
                        <div className="bg-white rounded-lg shadow-md w-max gap-0 p-4">
                            <img src={product.image} alt={product.name} className="w-[350px] h-80" />
                            <h3 className="text-lg font-medium pt-2">{product.name}</h3>
                            <p className="text-gray-600">${product.price}</p>
                            <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Promotion;
