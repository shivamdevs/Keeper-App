import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export interface AnimatedSectionProps {
    children?: React.ReactNode;
    toggle?: boolean;
    className?: string;
}

export const heightAnimationVariants = {
    initial: {
        height: 0,
        opacity: 0,
    },
    animate: {
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
    },
    exit: {
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
    }
};

function HeightAnimatedSection({ children, toggle, className }: AnimatedSectionProps) {
    return (
        <AnimatePresence>
            {toggle && <motion.div
                variants={heightAnimationVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className={className}
            >
                {children}
            </motion.div>}
        </AnimatePresence>
    )
}

export default HeightAnimatedSection;

export const widthAnimationVariants = {
    initial: {
        width: 0,
        opacity: 0,
    },
    animate: {
        width: "auto",
        opacity: 1,
        transition: {
            width: {
                duration: 0.2,
            },
            opacity: {
                duration: 0.15,
                delay: 0.1,
            },
        },
    },
    exit: {
        width: 0,
        opacity: 0,
        transition: {
            width: {
                duration: 0.2,
            },
            opacity: {
                duration: 0.1,
            },
        },
    }
};

function WidthAnimatedSection({ children, toggle, className }: AnimatedSectionProps) {
    return (
        <AnimatePresence>
            {toggle && <motion.div
                variants={widthAnimationVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className={className}
            >
                {children}
            </motion.div>}
        </AnimatePresence>
    )
}

export {
    WidthAnimatedSection
};


