import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const VariantContained: Story = {
  args: {
    variant: "contained",
    label: "Button",
  },
};

export const VariantOutlined: Story = {
  args: {
    variant: "outlined",
    label: "Button",
  },
};

export const VariantText: Story = {
  args: {
    variant: "text",
    label: "Button",
  },
};

export const SizeLarge: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const SizeSmall: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
