import type {ReactNode} from 'react'
import AppLayout        from '@/app/apps/AppLayout'

export default function EmployeesLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <AppLayout>
      <h1>Employees Layout</h1>
      {children}
    </AppLayout>
  )
}
