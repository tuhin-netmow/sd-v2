'use client'
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import rootReducer from "../slices/page";
import { configureStore } from "@reduxjs/toolkit";
// import "../public/assets/css/app.css";
import "../public/assets/scss/themes.scss";

const store = configureStore({ reducer: rootReducer, devTools: true });

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "SquadDeck",
//   description: "Created by NETMOW",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/cta-logo.png" sizes="16x16" />
      </head>
      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}

export type AppDispatch = typeof store.dispatch;
