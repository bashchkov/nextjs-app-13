import type {ReactNode} from 'react'
import Link             from 'next/link'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
    {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
    <head/>
    <body style={{padding: '30px', backgroundColor: 'rgba(0,144,255,0.3)'}}>
    <h1>Root Layout</h1>
    <nav style={{padding: '30px', marginBottom: '20px', backgroundColor: 'rgba(0,144,255,0.3)'}}>
      <Link style={{padding: '10px 20px', marginRight: '10px', backgroundColor: 'rgba(0,144,255,0.3)'}} href="/">
        Home
      </Link>
      <Link style={{padding: '10px 20px', marginRight: '10px', backgroundColor: 'rgba(0,144,255,0.3)'}} href="/apps/hrd/employees/accounts/">
        Accounts
      </Link>
      <Link style={{padding: '10px 20px', marginRight: '10px', backgroundColor: 'rgba(0,144,255,0.3)'}} href="/apps/hrd/employees/groups/">
        Groups
      </Link>
      <Link style={{padding: '10px 20px', marginRight: '10px', backgroundColor: 'rgba(0,144,255,0.3)'}} href="/apps/hrd/employees/permissions/">
        Permissions
      </Link>
    </nav>
    {children}
    </body>
    </html>
  )
}
