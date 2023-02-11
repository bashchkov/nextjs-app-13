import type {ReactNode} from 'react'

export default function EmployeesLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div style={{padding: '30px', backgroundColor: 'rgba(0,144,255,0.3)'}}>
      <h1>Employees Layout</h1>
      {children}
    </div>
  )
}
