// components/Portal.js

import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children, selector }) => {
  const [portalNode, setPortalNode] = useState(null);
  const portalRef = useRef(null);

  useEffect(() => {
    portalRef.current = document.querySelector(selector);
    setPortalNode(document.createElement('div'));
  }, [selector]);

  useEffect(() => {
    if (portalNode) {
      portalRef.current.appendChild(portalNode);
      return () => portalRef.current.removeChild(portalNode);
    }
  }, [portalNode]);

  return portalNode ? ReactDOM.createPortal(children, portalNode) : null;
};

export default Portal;
