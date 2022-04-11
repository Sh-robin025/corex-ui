import { Button } from "../components/button";

export default {
  title: "components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: "Basic Button",
};
