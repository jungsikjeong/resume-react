import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Project = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [item, setItem] = useState({ ...location.state });

  console.log(item);
  return (
    <div>
      Project
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
};

export default Project;
