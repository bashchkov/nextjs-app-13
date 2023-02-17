export default function Page({
  params,
  searchParams,
}: {
  params: { lng: string; slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="box">
      <h1>My Page</h1>
    </div>
  )
}
