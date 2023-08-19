import { type AppType } from "next/app";
import { Analytics } from '@vercel/analytics/react';

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ThemeProvider } from "next-themes";
import {NextUIProvider} from "@nextui-org/react";


const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </NextUIProvider>
  );
};

export default api.withTRPC(MyApp);
