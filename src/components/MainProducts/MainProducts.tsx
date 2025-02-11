import { Product } from "../../types/product";
import { ProductCard } from "../ProductCard";
import { useState, useEffect } from 'react'; 
import './MainProducts.sass';

const getProducts = async (): Promise<Product[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    const data = await response.json();
    return data;
};

export const MainProducts: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
            setLoading(false);
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Cargando...</div>
    }

    return (
        <div className="d-flex flex-center flex-column">
            <h1 className="mt-2">Main Products</h1>
            <div className="product-cards-container">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};