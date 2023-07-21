import React from 'react';
import { useAsync } from 'react-unique-hooks';
import { ReactComponent as IconGray } from '../../assets/app/IconGray.svg';
import { AnimatePresence, motion } from 'framer-motion';
import classNames from 'classnames';

export interface FavIconImageProps {
    link: string;
    className?: string;
};

function FavIconImage({ link, className }: FavIconImageProps) {

    const [favIcon] = useAsync<string | undefined, Error>(() => (
        new Promise((resolve, reject) => {
            fetch(`https://exclusive-indigo-mollusk.faviconkit.com/${(new URL(link)).hostname}/64`)
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

    return (
        <div className={classNames(
            "relative overflow-hidden",
            className
        )}>
            <AnimatePresence mode="sync" initial={false}>
                {favIcon && <motion.img
                    key={link}
                    className="relative"
                    initial={{
                        left: "100%"
                    }}
                    animate={{
                        left: "0",
                    }}
                    exit={{
                        left: "-100%"
                    }}
                    transition={{
                        duration: 0.2
                    }}
                    src={favIcon}
                    alt={link}
                    width="100%"
                    height="100%"
                />}
                {!favIcon && <motion.span
                    key="loading"
                    initial={{
                        left: "100%"
                    }}
                    animate={{
                        left: "0",
                    }}
                    exit={{
                        left: "-100%"
                    }}
                    transition={{
                        duration: 0.2
                    }}
                    className="relative w-full h-full"
                >
                    <IconGray />
                </motion.span>}
            </AnimatePresence>
        </div>
    );
}

export default FavIconImage;
