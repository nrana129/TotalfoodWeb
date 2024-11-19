// PortalComponent.jsx
import React from 'react';
import ReactDOM from 'react-dom';
// import './PortalComponent.css'; // Add CSS file for styling

const portalRoot = document.getElementById('portal-root');

const PortalPop = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="portal-overlay" onClick={onClose}>
      <div className="portal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        {children}
      </div>
    </div>,
    portalRoot
  );
};

export default PortalPop;
