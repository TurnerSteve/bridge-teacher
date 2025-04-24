import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { ReactNode } from "react";
import { AppProviders } from "@/context/AppProviders";
import Navbar from "./NavBar";

export const metadata = {
  title: "Bridge Teacher",
  description: "Let us generate some randomly dealt bridge deals.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="height: 100% margin: h-0 overflow-y-auto">
        <Theme>
          <AppProviders>
            {/* Header with Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow min-height: 100vh">{children}</main>

            {/* Footer (optional) */}
            <footer className="bg-blue-600 text-white text-center p-4">
              <p>© 2025 Bridgequarter. All rights reserved.</p>
            </footer>
          </AppProviders>
        </Theme>
      </body>
    </html>
  );
}
