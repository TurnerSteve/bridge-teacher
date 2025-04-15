import React from "react";

// Navbar Component
function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-lg font-bold">My App</div>
        <ul className="flex space-x-6">
          <li>
            <a
              href="/settings"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Setting
            </a>
          </li>
          <li>
            <a
              href="/single-deal"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Single Deal
            </a>
          </li>
          <li>
            <a
              href="/multiple-deal"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Multiple Deal
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// Layout Component
function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">{props.children}</main>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold text-center mt-8">Welcome to My App</h1>
      <p className="text-center mt-4">Select an option from the navbar above.</p>
    </Layout>
  );
}

export default App;