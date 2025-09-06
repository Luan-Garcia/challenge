import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Botão Hamburger no canto superior direito */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-blue-600 text-white rounded-md"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Overlay semi-transparente */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white z-50 transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 space-y-4">
          <a href="#" className="hover:text-blue-400">IDS</a>
          <a href="#" className="hover:text-blue-400">IPS</a>
          <a href="#" className="hover:text-blue-400">Vulnerabilidades</a>
          <a href="#" className="hover:text-blue-400">Logs</a>
          <a href="#" className="hover:text-blue-400">Regras de Firewall</a>
        </nav>
      </div>
    </div>
  );
}
