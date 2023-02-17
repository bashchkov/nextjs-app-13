import type {ReactNode} from 'react'

export default function Layout({
  children,
  params
}: {
  children: ReactNode;
  params: any;
}) {

  return (
    <div className="space-y-9">
      <div>
        <div className="flex items-center justify-between">
          {params.categorySlug}
        </div>
      </div>

      <div>{children}</div>
    </div>
  )
}
