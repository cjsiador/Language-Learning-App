import { useRef, useState } from 'react';

const useScrollButton = () => {
    const scrollSpeed = 100;
    const scrollButtonRef = useRef(null);
    const [scrollInterval, setScrollInterval] = useState(null);

    const scrollRight = () => {
        if (scrollButtonRef.current) {
            console.log("Clicking scroll right");
            scrollButtonRef.current.scrollBy({ left: scrollSpeed, behavior: 'smooth'});
        }
    };

    const scrollLeft = () => {
        if (scrollButtonRef.current) {
            console.log("Clicking scroll Left");
            scrollButtonRef.current.scrollBy({ left: -scrollSpeed, behavior: 'smooth' });        
        }
    }

    const handleScrollRight = () => {
        scrollRight();
        const interval = setInterval(scrollRight, 100);
        setScrollInterval(interval);
    };

    const handleScrollLeft = () => {
        scrollLeft();
        const interval = setInterval(scrollLeft, 100);
        setScrollInterval(interval);
    };

    const stopScroll = () => {
        clearInterval(scrollInterval);
        setScrollInterval(null);
    };

    return {
        scrollButtonRef,
        handleScrollRight,
        handleScrollLeft,
        stopScroll, 
    };
};

export default useScrollButton;