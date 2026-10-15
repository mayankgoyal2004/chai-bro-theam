import React, { useEffect } from 'react';
import { FranchiseSection } from '../components/FranchiseSection';

export const FranchisePage = () => {
  useEffect(() => {
    document.title = "Franchise Enquiries | Let’s Talk Over Chai | Chai Bros";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-franchise" style={{ paddingTop: '80px' }}>
      <FranchiseSection />
    </div>
  );
};
