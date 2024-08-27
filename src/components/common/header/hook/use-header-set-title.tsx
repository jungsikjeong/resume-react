import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const UseHeaderSetTitle = () => {
  const location = useLocation();
  const [currentPageName, setCurrentPageName] = useState('web');

  useEffect(() => {
    let pathSegments;

    // /project/:date/:id 패턴을 검사하는 정규식
    const projectPathPattern = /^\/project\/[^/]+\/[^/]+$/;

    if (projectPathPattern.test(location.pathname)) {
      pathSegments = 'PROJECT';
    } else if (location.pathname === '/') {
      pathSegments = 'WEB';
    } else {
      // 그 외 경로는 슬래시를 없애고 대문자로 반환
      pathSegments = location.pathname.split('/').join('').toUpperCase();
    }

    setCurrentPageName(pathSegments);
  }, [location.pathname]);

  return { currentPageName };
};

export default UseHeaderSetTitle;
