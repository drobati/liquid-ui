import React from 'react';
import './button.css';
import { motion } from 'framer-motion';

interface ButtonProps {
    /**
     * The color of the button. Can be any valid CSS color format.
     */
    color?: string;
    /**
     * How large should the button be?
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * The visual style of the button
     */
    variant?: 'solid' | 'outline' | 'ghost' | 'link';
    /**
     * Optional click handler
     */
    onClick?: () => void;
    /**
     * Text to render inside the button
     */
    children?: React.ReactNode;
}

const primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--color-primary');

const convertColor = (color: string) => {
    const canvas = document.createElement('canvas');
    canvas.height = 1;
    canvas.width = 1;
    const context = canvas.getContext('2d');
    if (context) {
        context.fillStyle = `rgba(${ primaryColor }, 0.3)`;
        context.clearRect(0, 0, 1, 1);
        context.fillStyle = color
        context.fillRect(0, 0, 1, 1);
        return context.getImageData(0, 0, 1, 1).data.slice(0, 3).join(', ');
    }
    return primaryColor;
}
/**
 * Primary UI component for user interaction
 */
export const Button = ({
    color,
    size = 'md',
    variant = 'solid',
    children = 'Button',
    ...props
}: ButtonProps) => {
    const normalizeColor = color ? convertColor(color) : primaryColor;
    const boxShadow = (color && (variant === 'solid' || variant === 'outline'))
        ? `0 3px 0 rgba(${ normalizeColor }, 0.3)`
        : undefined;

    return (
        <motion.button
            type="button"
            className={ ['liquid-button', `liquid-button--${ size }`, `liquid-button--${ variant }`].join(' ') }
            style={ { backgroundColor: `rgb(${ normalizeColor })`, boxShadow } }
            whileHover={ { scale: 1.1 } }
            whileTap={ { scale: 0.9 } }
            { ...props }
        >
            { children }
        </motion.button>
    );
};
