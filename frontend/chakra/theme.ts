// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#000",
      200: "#6F1AB6",
      300: "#8bb8b3",
    },
  },

  fonts: {
    body: "Inter,  sans-serif",
  },

  styles: {
    global: () => ({
      body: {
        bg: "#8bb8b3",
      },
    }),
  },

  components: {
    Button,
  },
});
