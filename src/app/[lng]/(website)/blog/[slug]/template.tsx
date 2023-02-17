import type {ReactNode} from 'react'

export default function Template({
  children
}: {
  children: ReactNode;
}) {
  return (
    <div className='box'>
      <h6>Template</h6>
      {children}
    </div>
  )
}
