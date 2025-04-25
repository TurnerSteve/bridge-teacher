import { FiSettings, FiLayers } from "react-icons/fi";
import { CgShapeRhombus } from "react-icons/cg";
import { GoHomeFill } from "react-icons/go";
import { GiSave } from "react-icons/gi";

import Link from "next/link";


// Navbar Component
export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto flex
       justify-between items-center py-4">
        <div className="text-lg font-bold">Bridge Teacher</div>
        <ul className="flex space-x-6">
        <li>
            <Link
              href="/save-deals"
              className="hover:text-black transition-colors duration-200 items-center"
            >
              <SaveIcon />
            </Link>
          </li>          
          <li>
            <Link
              href="/single-deal"
              className="hover:text-black transition-colors duration-200 items-center"
            >
              <SingleIcon />
            </Link>
          </li>
          <li>
            <Link
              href="/multiple-deal"
              className="hover:text-black transition-colors duration-200 items-center"
            >
              <MultiIcon />
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="hover:text-black transition-colors duration-200"
            >
              <SettingsIcon />
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="hover:text-black transition-colors duration-200"
            >
              <HomeIcon />
            </Link>
          </li> 
        </ul>
      </div>
    </nav>
  );
}

const SettingsIcon = () => {
  return (
    <button
      className="inline-flex items-center justify-center p-2 text-black-600 transition-all hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Settings"
    >
      <FiSettings className="w-6 h-6" />
    </button>
  );
};

const MultiIcon = () => {
  return (
    <button
      className="inline-flex items-center justify-center p-2 text-black-600 transition-all hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Settings"
    >
      <FiLayers className="w-6 h-6" />
    </button>
  );
};

const SingleIcon = () => {
  return (
    <button
      className="inline-flex items-center justify-center p-2 text-black-600 transition-all hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Settings"
    >
      <CgShapeRhombus className="w-6 h-6" />
    </button>
  );
};

const HomeIcon = () => {
  return (
    <button
      className="inline-flex items-center justify-center p-2 text-black-600 transition-all hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Settings"
    >
      <GoHomeFill className="w-6 h-6" />
    </button>
  );
};

const SaveIcon = () => {
  return (
    <button
      className="inline-flex items-center justify-center p-2 text-black-600 transition-all hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Settings"
    >
      <GiSave className="w-6 h-6" />
    </button>
  );
};