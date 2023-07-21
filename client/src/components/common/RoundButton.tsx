import Tippy from '@tippyjs/react';
import classNames from 'classnames';
import React from 'react';

export interface RoundButtonProps extends RoundButtonRawProps {
    content?: React.ReactNode;
    placement?: "auto" | "auto-end" | "auto-start" | "bottom" | "bottom-end" | "bottom-start" | "left" | "left-end" | "left-start" | "right" | "right-end" | "right-start" | "top" | "top-end" | "top-start";
};

function RoundButton({ type = "button", size = "base", onClick, className, children, content, placement }: RoundButtonProps) {
    return (
        <Tippy content={content} placement={placement}>
            <RoundButtonRaw type={type} size={size} onClick={onClick} className={className} children={children} />
        </Tippy>
    );
}

export default RoundButton;

export interface RoundButtonRawProps {
    children?: React.ReactNode;
    className?: string;
    type?: "button" | "reset" | "submit";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    size?: "xs" | "sm" | "base" | "md" | "lg" | "xl";
};

export const RoundButtonRaw = React.forwardRef<HTMLButtonElement, RoundButtonRawProps>((props: RoundButtonRawProps, ref) => {
    const { type = "button", size = "base", onClick, className, children } = props;
    return (
        <button type={type} onClick={onClick} ref={ref} className={classNames(
            "rounded-full flex justify-center items-center flex-nowrap text-gray-700 hover:text-black focus-visible:text-black hover:bg-[#0002] focus-visible:bg-[#0002] transition-all",
            {
                "w-6 h-6 text-sm": size === "xs",
                "w-8 h-8 text-base": size === "sm",
                "w-10 h-10 text-xl": size === "base",
                "w-12 h-12 text-2xl": size === "md",
                "w-14 h-14 text-3xl": size === "lg",
                "w-16 h-16 text-4xl": size === "xl",
            },
            className,
        )}>{children}</button>
    );
});
