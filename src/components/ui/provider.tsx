"use client";
import { ThemeProvider } from "next-themes";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { theme } from "@/theme";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <ChakraProvider value={theme}>
        <ColorModeProvider {...props} />
      </ChakraProvider>
    </ThemeProvider>
  );
}
