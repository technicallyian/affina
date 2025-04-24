"use client";

import React, { useState, useEffect } from 'react';

interface ClientOnlyWrapperProps {
  children: React.ReactNode;
}

const ClientOnlyWrapper: React.FC<ClientOnlyWrapperProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // Or return a placeholder/skeleton
  }

  return <>{children}</>;
};

export default ClientOnlyWrapper; 