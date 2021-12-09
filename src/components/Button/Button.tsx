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

const convertColor = (color: string) => {
    const canvas = document.createElement('canvas');
    canvas.height = 1;
    canvas.width = 1;
    const context = canvas.getContext('2d');
    if (context) {
        context.fillStyle = 'rgba(0, 0, 0, 0)';
        context.clearRect(0, 0, 1, 1);
        context.fillStyle = color || '#000';
        context.fillRect(0, 0, 1, 1);
        return context.getImageData(0, 0, 1, 1).data.slice(0, 3).join(', ');
    }
    return '0, 0, 0';
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
    const boxShadow = (color && (variant === 'solid' || variant === 'outline'))
        ? `0 3px 0 rgba(${ convertColor(color) }, 0.3)`
        : undefined;

    return (
        <motion.button
            type="button"
            className={ ['liquid-button', `liquid-button--${ size }`, `liquid-button--${ variant }`].join(' ') }
            style={ { backgroundColor: color, boxShadow } }
            whileHover={ { scale: 1.1 } }
            whileTap={ { scale: 0.9 } }
            { ...props }
        >
            { children }
        </motion.button>
    );
};
