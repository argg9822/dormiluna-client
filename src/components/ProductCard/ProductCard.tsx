import { Product } from '../../types/product';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductCard.sass';

export const ProductCard: React.FC<{ product: Product }> = ({ product: { title, description, price, images } }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const cleanUrl = (url: string) => {
        return url.replace(/^https?:\/\//, ""); // Remueve https:// o http://
    }

    return (
        <div className="product-card">
            <div>
                {images.length === 0 ? (
                    <p>No hay imágenes para este producto.</p>
                ) : (
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={`https://${cleanUrl(image)}`} alt={`Slide ${index}`} />
                            </div>
                        ))}
                    </Slider>
                )}
            </div>
            <h2 className="product-title">{title}</h2>
            <p className="product-description">{description}</p>
            <p className="product-price">${price}</p>
            <button className="buy-button">Comprar Ahora</button>
        </div>
    );
};