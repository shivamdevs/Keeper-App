import React, { useRef } from 'react';
import { useAsync, useUpdateEffect } from 'react-unique-hooks';

function WallpaperLoader() {
    const [dataURI, , dataError] = useAsync<string | undefined, Error>(() => (
        new Promise((resolve, reject) => {
            fetch(`/images/bg.jpg`)
                .then(res => res.blob())
                .then(blob => {
                    let reader = new FileReader();
                    reader.onload = () => resolve(reader.result as string);
                    reader.onerror = (err) => reject(err);
                    reader.readAsDataURL(blob);
                })
                .catch((err) => reject(err))
        })
    ), []);

    const docRef = useRef<HTMLDivElement>(null);

    useUpdateEffect(() => {
        if (dataURI && docRef.current) {
            if (!dataError) {
                const ref = docRef.current;
                ref.style.setProperty("background-image", `url(${dataURI})`);
                setTimeout(() => {
                    document.documentElement.classList.add("dark");
                    document.documentElement.style.setProperty("color-scheme", "dark");
                    ref.classList.remove("opacity-0", "invisible");
                }, 300);
                return () => {
                    ref.style.removeProperty("background-image");
                    document.documentElement.classList.remove("dark");
                    document.documentElement.style.removeProperty("color-scheme");
                    ref.classList.add("opacity-0", "invisible");
                }
            }
        }
    }, [dataURI]);
    return (
        <div className="absolute inset-0 opacity-0 invisible transition-all duration-700" ref={docRef}>

        </div>
    );
}

export default WallpaperLoader;
