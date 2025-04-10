import "./globals.css";
import { Theme} from "@radix-ui/themes";

export const metadata = {
  title: "Bridge Teacher",
  description: "A simple appliction to display a randomly dealt bridge deal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Theme>
          <header className="bg-blue-600 text-white p-4">
            <h1 className="text-2xl">Bridge Teacher</h1>
          </header>
          <main className="flex-grow p-4">{children}</main>
          <footer className="bg-blue-600 text-white p-4 text-center">
            <p>© 2025 Bridgequarter</p>
          </footer>
        </Theme>
      </body>
    </html>
  );
}
