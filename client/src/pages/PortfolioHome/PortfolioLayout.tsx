import React from 'react';
import { AppHeader } from './components/AppHeader';

export function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <AppHeader />
      <main className="pt-16">{children}</main>
    </div>
  );
}

