import DefaultTags from '@app/[lng]/(website)/DefaultTags'

export default function Head({
  params
}: {
  params: { lng: string; slug: string };
}) {
  return (
    <>
      <DefaultTags />
      <title>My Page</title>
    </>
  )
}
