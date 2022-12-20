import { ReactNode } from 'react';
import styles from './layout.module.css';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col justify-center align-middle bg-green-700">
      <h1>
        <h1 className="text-xl">Quickshares</h1>
      </h1>
      {children}
    </div>
  );
}

export default Layout;
