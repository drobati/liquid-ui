import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress";

const meta = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100 },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 60,
    className: "w-[300px]",
  },
};

export const Empty: Story = {
  args: {
    value: 0,
    className: "w-[300px]",
  },
};

export const Full: Story = {
  args: {
    value: 100,
    className: "w-[300px]",
  },
};

export const AllValues: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[300px]">
      <Progress value={20} />
      <Progress value={50} />
      <Progress value={80} />
    </div>
  ),
};
