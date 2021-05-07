import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Button, { Props } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => {},
  text: "Click me",
};

export const Disabled = Template.bind({});
Disabled.args = {
  onClick: () => {},
  text: "Click me",
  disabled: true,
};
