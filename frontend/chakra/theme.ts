// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#000",
      200: "#4A55A2",
      300: "#C5DFF8",
    },
  },

  fonts: {
    body: "Inter,  sans-serif",
  },

  styles: {
    global: () => ({
      body: {
        bg: "#C5DFF8",
      },
    }),
  },

  components: {
    Button,
  },
});
