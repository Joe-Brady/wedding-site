import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import TextInput, { Props } from "./TextInput";

export default {
  title: "Atoms/TextInput",
  component: TextInput,
} as Meta;

const Template: Story<Props> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Placeholder text",
  name: "Field name",
};

export const Password = Template.bind({});
Password.args = {
  password: true,
  placeholder: "Your password",
  name: "password",
};
