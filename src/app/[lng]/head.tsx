import {
  fallbackLng,
  languages
}                         from '@app/i18n/settings'
import {useTranslation}   from '@app/i18n'


const Head = async ({
  params: {
    lng
  }
}: {
  params: {
    lng: string;
  };
}) => {

  if (languages.indexOf(lng) < 0) lng = fallbackLng

  const {t} = await useTranslation(lng)

  return (
    <>
      <title>{t('title')}</title>
      <meta name="description" content=""/>
    </>
  )
}

export default Head