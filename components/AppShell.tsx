'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isEcommerceDashboard = pathname === '/dashboard-ecommerce';

  return (
    <>
      {!isEcommerceDashboard && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!isEcommerceDashboard && <Footer />}
    </>
  );
}
