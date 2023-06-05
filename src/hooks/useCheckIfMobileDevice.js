import React, { useEffect, useState } from "react";

//Little hook subscribe to the resize windows event, used to detect mobile like display
const useCheckIfMobileDevice = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (width <= 896);
}

export default useCheckIfMobileDevice