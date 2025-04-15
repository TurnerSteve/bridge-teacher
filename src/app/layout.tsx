import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { GlobalDataProvider } from "../context/DataContextProvider";
import { GlobalSettingsProvider } from "@/context/SettingsContextProvider";
import NavBar from "./NavBar";

export const metadata = {
  title: "Bridge Teacher",
  description: "A simple appliction to display a randomly dealt bridge deal.",
};

import { ReactNode } from "react";


type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="height: 100% margin: h-0 overflow-y-auto">
        <Theme>
          <GlobalSettingsProvider>
            <GlobalDataProvider>
              {/* Header with Navbar */}
              <NavBar />

              {/* Main Content */}
              <main className="flex-grow min-height: 100vh">
                {children}
              </main>

              {/* Footer (optional) */}
              <footer className="bg-blue-600 text-white text-center p-4">
                <p>© 2025 Bridgequarter. All rights reserved.</p>
              </footer>
            </GlobalDataProvider>
          </GlobalSettingsProvider>
        </Theme>
      </body>
    </html>
  );
}
