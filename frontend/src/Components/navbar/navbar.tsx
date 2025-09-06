import React, { useState } from 'react';
import './navbar.css';

interface MenuItemProps {
  label: string;
  subItems?: string[];
}

const MenuItem: React.FC<MenuItemProps> = ({ label, subItems }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    if (subItems) {
      setIsSubMenuOpen(!isSubMenuOpen);
    }
  };

  return (
    <li className="menu-item" onClick={toggleSubMenu}>
      <div className="item-content">
        <span>{label}</span>
        {subItems && <span className={`arrow ${isSubMenuOpen ? 'open' : ''}`}>&#9654;</span>}
      </div>
      {isSubMenuOpen && subItems && (
        <ul className="submenu">
          {subItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Menu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Botão para abrir/fechar o menu */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Menu lateral */}
      <nav className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <span className="close-btn" onClick={toggleMenu}>&times;</span>
          <h3>Menu</h3>
        </div>
        <ul>
          <MenuItem label="Mapa de Ciberameaças" />
          <MenuItem label="Logs" subItems={['Status 1', 'Status 2']} />
          <MenuItem label="Gerenciamento de Vulnerabilidades" subItems={['Rede 1', 'Rede 2']} />
          <MenuItem label="Firewall" subItems={['Avançado 1', 'Avançado 2']} />
          <MenuItem label="IDS/IPS" subItems={['IDS', 'IPS']} />
          <MenuItem label="Wi-Fi" subItems={['Wi-Fi 1', 'Wi-Fi 2']} />
          <MenuItem label="Administração" subItems={['Admin 1', 'Admin 2']} />
          <MenuItem label="Sair" />
        </ul>
      </nav>
    </>
  );
};

export default Menu;