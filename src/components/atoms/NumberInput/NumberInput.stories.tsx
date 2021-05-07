import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import NumberInput, { Props } from "./NumberInput";

export default {
  title: "Atoms/NumberInput",
  component: NumberInput,
} as Meta;

const Template: Story<Props> = (args) => <NumberInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Placeholder text",
  name: "Field name",
};

export const SpecificWidth = Template.bind({});
SpecificWidth.args = {
  placeholder: "Number",
  name: "Field name",
  size: 10,
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  name: "Field name",
  defaultValue: 100,
};
