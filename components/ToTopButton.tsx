'use client';
import { useEffect, useState } from 'react';

export default function ToTopButton() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return show ? (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 px-4 py-3 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition-all duration-300 animate-fade-in"
            aria-label="Scroll to top"
        >
            <i className="bi bi-chevron-up text-xl"></i>
        </button>
    ) : null;
}
