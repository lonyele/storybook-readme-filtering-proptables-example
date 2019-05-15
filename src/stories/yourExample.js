import React from "react";
import { storiesOf } from "@storybook/react";

import { MyButton } from "./MyButton";
import { AnotherButton } from "./AnotherButton";
import { ThirdButton } from "./ThirdButton";

storiesOf("Forms|Input.CheckboxInput", module)
  .addParameters({
    readme: {
      includePropTables: [AnotherButton]
    }
  })
  .add(
    "Default",
    () => (
      <div>
        <MyButton />
        <AnotherButton />
      </div>
    ),
    {
      readme: {
        //   includePropTables: [AnotherButton],
        content: `<!-- STORY --><!-- PROPS -->`
      }
    }
  )
  .add("With Disabled State", () => <AnotherButton />, {
    readme: {
      // includePropTables: [AnotherButton],
      content: `<!-- STORY --><!-- PROPS -->`
    }
  })
  .add("ThirdButton", () => <ThirdButton />, {
    readme: {
      // includePropTables: [AnotherButton],
      content: `<!-- STORY --><!-- PROPS -->`
    }
  });
