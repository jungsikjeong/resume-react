import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PortfolioDetail from '../../components/portfolio-detail/PortfolioDetail';

const PortfolioDetailPage = () => {
  const location = useLocation();
  const [item, setItem] = useState({ ...location.state });

  return (
    <div>
      <PortfolioDetail item={item.item} />
    </div>
  );
};

export default PortfolioDetailPage;
