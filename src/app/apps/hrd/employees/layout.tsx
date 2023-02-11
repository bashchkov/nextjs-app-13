'use client'

import type {ReactNode} from 'react'
import {useState}       from 'react'

export default function EmployeesLayout({
  children,
}: {
  children: ReactNode
}) {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div style={{padding: '30px', backgroundColor: 'rgba(0,144,255,0.3)'}}>
      <h1>Employees Layout</h1>
      {children}
    </div>
  )
}
