import React from 'react';

export type FormHook = {
    elements: HTMLInputElement[];
    addElements: (options?: any) => { ref: (element: HTMLInputElement) => void };
};

export default function useForm(): FormHook {
    const elements = React.useRef<HTMLInputElement[]>([]);

    React.useEffect(() => {
        console.log(elements.current);
    }, [elements]);

    function addElements(options?: any) {
        function addElementalRef(element: HTMLInputElement) {
            element && elements.current.push(element);
        }
        return { ref: addElementalRef };
    }

    return {
        elements: elements.current || [],
        addElements,
    };
}
