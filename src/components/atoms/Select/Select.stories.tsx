import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Select, { Props } from "./Select";

export default {
  title: "Atoms/Select",
  component: Select,
} as Meta;

const Template: Story<Props> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Field name",
  options: [
    { text: "Volvo", value: "volvo" },
    { text: "Saab", value: "saab" },
    { text: "Longer name here", value: "longer" },
  ],
};
