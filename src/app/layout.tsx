import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { GlobalStateProvider } from "../context/GlobalStateProvider";

export const metadata = {
  title: "Bridge Teacher",
  description: "A simple appliction to display a randomly dealt bridge deal.",
};

import Link from "next/link";
import { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Theme>
          <GlobalStateProvider>
            {/* Header with Navbar */}
            <header className="bg-gray-800 text-white">
              <nav className="container mx-auto flex justify-between items-center py-4">
                <div className="text-lg font-bold">Bridge Teacher</div>
                <ul className="flex space-x-6">
                  <li>
                    <Link href="/settings">
                      <span className="hover:text-gray-300 transition-colors duration-200">
                        Setting
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/single-deal">
                      <span className="hover:text-gray-300 transition-colors duration-200">
                        Single Deal
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/multiple-deal">
                      <span className="hover:text-gray-300 transition-colors duration-200">
                        Multiple Deal
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto p-4">{children}</main>

            {/* Footer (optional) */}
            <footer className="bg-gray-800 text-white text-center py-4">
              <p>© 2025 Bridgequarter. All rights reserved.</p>
            </footer>
          </GlobalStateProvider>
        </Theme>
      </body>
    </html>
  );
}
