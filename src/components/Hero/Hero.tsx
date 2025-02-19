'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import './Hero.sass';

const images = [
    "/images/Banners/banner1.jpeg",
    "/images/Banners/banner2.jpeg"


];

export const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 8000); // Cambia cada 8 segundos

        return () => clearInterval(interval);
    }, [currentIndex]); // Se reinicia cuando cambia la imagen

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <section className="hero">
            <div className="hero-img-container">
                {/* Imagen principal (Slider) */}
                <Image
                    src={images[currentIndex]}
                    alt="main image"
                    fill
                    quality={100}
                    priority={false}
                    placeholder='blur'
                    blurDataURL="/images/placeholder.webp"
                />

                {/* Botones de navegación */}
                <button className="nav-button left" onClick={prevSlide}>❮</button>
                <button className="nav-button right" onClick={nextSlide}>❯</button>

            </div>
        </section>
    );
};
