import React from 'react';
import { MenuSection } from '../components/MenuSection';

export const MenuPage = ({ setActiveItemModal }) => {
  return (
    <div className="page-menu">
      <MenuSection setActiveItemModal={setActiveItemModal} />
    </div>
  );
};

