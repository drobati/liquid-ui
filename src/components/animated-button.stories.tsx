import type { Meta, StoryObj } from "@storybook/react";
import { AnimatedButton } from "./animated-button";

const meta = {
  title: "Components/AnimatedButton",
  component: AnimatedButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
  },
} satisfies Meta<typeof AnimatedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hover & Tap Me",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Animated Destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Animated Outline",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <AnimatedButton variant="default">Default</AnimatedButton>
      <AnimatedButton variant="destructive">Destructive</AnimatedButton>
      <AnimatedButton variant="outline">Outline</AnimatedButton>
      <AnimatedButton variant="secondary">Secondary</AnimatedButton>
      <AnimatedButton variant="ghost">Ghost</AnimatedButton>
      <AnimatedButton variant="link">Link</AnimatedButton>
    </div>
  ),
};
