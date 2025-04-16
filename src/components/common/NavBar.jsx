import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  background: #fafafa;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

const NavButton = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'active'
  })`
    padding: 8px 16px;
    border: none;
    background: ${({ active }) => (active ? '#0066ff' : '#e0e0e0')};
    color: ${({ active }) => (active ? 'white' : '#333')};
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    margin-left: 12px;
  `;

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <NavWrapper>
      <div style={{ fontWeight: 'bold' }}> Smart Task Manager</div>
      <div>
        <NavButton onClick={() => navigate('/table')} active={location.pathname === '/table'}>
          Table View
        </NavButton>
        <NavButton onClick={() => navigate('/dashboard')} active={location.pathname === '/dashboard'}>
          Dashboard
        </NavButton>
      </div>
    </NavWrapper>
  );
};

export default NavBar;
