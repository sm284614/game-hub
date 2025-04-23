import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ColorModeProvider } from "@/components/ui/color-mode";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
import { theme } from "@/theme.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={theme}>
      <ColorModeProvider defaultTheme="dark">
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>
);
