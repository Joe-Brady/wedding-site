import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Checkbox, { Props } from "./Checkbox";

export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
} as Meta;

const Template: Story<Props> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Field name",
  label: "Field label",
};
