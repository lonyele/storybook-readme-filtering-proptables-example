import React from "react";
import { storiesOf } from "@storybook/react";

import { MyButton } from "./MyButton";
import { AnotherButton } from "./AnotherButton";
import "./yourExample";
storiesOf("Same as official storybook-readme's example-react", module).add(
  "MyButton~~~",
  () => (
    <div>
      <MyButton>MyButton Button</MyButton>
      <AnotherButton />
    </div>
  ),
  {
    readme: {
      // includePropTables: [AnotherButton],
      content: `<!-- STORY --><!-- PROPS -->`
    }
  }
);

