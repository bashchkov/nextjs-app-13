import type {ReactNode} from 'react'

export default function Layout({
  children,
  params
}: {
  children: ReactNode;
  params: { lng: string; slug: string };
}) {
  return (
    <div className="box">
      <h6>Layout</h6>
      {children}
    </div>
  )
}
