import { type ComponentProps } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const MotionButton = motion.create(Button);

type AnimatedButtonProps = ComponentProps<typeof MotionButton>;

export function AnimatedButton(props: AnimatedButtonProps) {
  return (
    <MotionButton
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    />
  );
}
