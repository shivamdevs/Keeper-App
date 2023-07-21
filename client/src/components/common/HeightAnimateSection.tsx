import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export interface HeightAnimateSectionProps {
    children?: React.ReactNode;
    toggle?: boolean;
}

function HeightAnimateSection({ children, toggle }: HeightAnimateSectionProps) {
    return (
        <AnimatePresence>
            {toggle && <motion.div
                initial={{
                    height: 0,
                    opacity: 0,
                }}
                animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                        height: {
                            duration: 0.2,
                        },
                        opacity: {
                            duration: 0.15,
                            delay: 0.1,
                        },
                    },
                }}
                exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                        height: {
                            duration: 0.2,
                        },
                        opacity: {
                            duration: 0.1,
                        },
                    },
                }}
            >
                {children}
            </motion.div>}
        </AnimatePresence>
    )
}

export default HeightAnimateSection;
