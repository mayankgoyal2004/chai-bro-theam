import React from 'react';
import { MenuSection } from '../components/MenuSection';

export const MenuPage = ({ setActiveItemModal }) => {
  return (
    <div className="page-menu" style={{ paddingTop: '100px' }}>
      {/* Main Filterable Menu */}
      <MenuSection setActiveItemModal={setActiveItemModal} />
    </div>
  );
};
