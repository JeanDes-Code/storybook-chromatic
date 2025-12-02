import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import type { Preview } from "@storybook/react-native";
import { Platform } from "react-native";

// fix for actions on web
if (Platform.OS === "web") {
  // @ts-ignore
  global.ProgressTransitionRegister = {};
  // @ts-ignore
  global.UpdatePropsManager = {};
}

const preview: Preview = {
  decorators: [withBackgrounds],

  parameters: {
    backgrounds: {
      options: {
        plain: { name: "plain", value: "white" },
        warm: { name: "warm", value: "hotpink" },
        cool: { name: "cool", value: "deepskyblue" }
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  initialGlobals: {
    backgrounds: {
      value: "plain"
    }
  }
};

export default preview;
