import type {ReactNode} from 'react'

export default function AppsLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div style={{padding: '30px', backgroundColor: 'rgba(0,144,255,0.3)'}}>
      <h1>Apps Layout</h1>
      {children}
    </div>
  )
}
