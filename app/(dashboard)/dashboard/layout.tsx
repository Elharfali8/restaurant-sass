// app/dashboard/layout.tsx

import DashboardShell from '@/components/DashboardShell'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardShell>{children}</DashboardShell>
}

export default Layout