import {
  fallbackLng,
  languages
}                         from '@app/i18n/settings'
import {useTranslation}   from '@app/i18n'
import {StaticParamsType} from '@app/[lng]/layout'


const Head = async ({
  params: {
    lng
  }
}: {
  params: StaticParamsType;
}) => {

  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const {t} = await useTranslation(lng)

  return (
    <>
      <title>{t('title')}</title>
      <meta
        name="description"
        content="A playground to explore new Next.js 13 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching."
      />
    </>
  )
}

export default Head