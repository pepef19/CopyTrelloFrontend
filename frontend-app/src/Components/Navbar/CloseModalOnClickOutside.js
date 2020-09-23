import React, { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideClicker(ref, closeModalHandler) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */

        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                closeModalHandler();
            }
        }

        // Bind the event listener
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            window.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
export default function CloseModalOnClickOutside(props) {
    const wrapperRef = useRef(null);
    useOutsideClicker(wrapperRef, props.closeModalHandler);
    return <div ref={wrapperRef}>{props.children}</div>;
}