import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Typography, { Props } from "./Typography";

export default {
  title: "Core/Typography",
  component: Typography,
} as Meta;

const Template: Story<Props> = (args) => <Typography {...args} />;

export const H1 = Template.bind({});
H1.args = {
  variant: "h1",
  text: "Typography H1 example",
};
export const H2 = Template.bind({});
H2.args = {
  variant: "h2",
  text: "Typography H2 example",
};
export const H3 = Template.bind({});
H3.args = {
  variant: "h3",
  text: "Typography H3 example",
};
export const H4 = Template.bind({});
H4.args = {
  variant: "h4",
  text: "Typography H4 example",
};
export const Body = Template.bind({});
Body.args = {
  variant: "body",
  text: "Typography Body example",
};
export const Error = Template.bind({});
Error.args = {
  variant: "error",
  text: "Typography Error example",
};
