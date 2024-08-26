import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface IUseCurrentPageProps {
  currentPathname: string;
}

const UseCurrentPage = ({ currentPathname }: IUseCurrentPageProps) => {
  const location = useLocation();

  const [isCurrentPage, setIsCurrentPage] = useState(false);

  useEffect(() => {
    setIsCurrentPage(location.pathname === currentPathname);
  }, [location.pathname, currentPathname]);

  return { isCurrentPage };
};

export default UseCurrentPage;