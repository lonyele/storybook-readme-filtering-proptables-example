import { configure, addDecorator, addParameters } from "@storybook/react";
import { addReadme } from "storybook-readme";

import { AnotherButton } from "../src/stories/AnotherButton";
import { MyButton } from "../src/stories/MyButton";
addDecorator(addReadme);
addParameters({
  readme: {
    // excludePropTables: [AnotherButton]
  }
});
function loadStories() {
  require("../src/stories");
}

configure(loadStories, module);
