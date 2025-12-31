import type {Metadata} from "next";
import "./globals.css";

import '@mantine/core/styles.css';
import {ColorSchemeScript, createTheme, DEFAULT_THEME, mantineHtmlProps, MantineProvider} from '@mantine/core';
import {Nunito_Sans, Poppins, Source_Code_Pro} from "next/font/google";

export const metadata: Metadata = {
    title: "Rishabh Tatiraju",
    description: "Exploring the intersection of creative arts, technical science, and diverse hobbies.",
};

const nunitoSansFont = Nunito_Sans();
const sourceCodeProFont = Source_Code_Pro();
const poppinsBoldFont = Poppins({weight: "700"});

const theme = createTheme({
    fontFamily: `${nunitoSansFont.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
    fontFamilyMonospace: `${sourceCodeProFont.style.fontFamily}, ${DEFAULT_THEME.fontFamilyMonospace}`,
    headings: {
        fontFamily: `${poppinsBoldFont.style.fontFamily}, ${DEFAULT_THEME.headings.fontFamily}`,
    }
});

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" {...mantineHtmlProps}>
        <head>
            <ColorSchemeScript/>
            <title>{metadata.title?.toString()}</title>
        </head>
        <body>
        <MantineProvider theme={theme}>
            {children}
        </MantineProvider>
        </body>
        </html>
    );
}
