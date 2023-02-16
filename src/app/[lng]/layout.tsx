import type {PropsWithChildren} from 'react'
import {dir}                    from 'i18next'
import {languages}              from '@app/i18n/settings'

export type StaticParamsType = {
  lng: string;
};

export const generateStaticParams = async (): Promise<StaticParamsType[]> => languages.map((lng) => ({lng}))

const RootLayout = ({
  children,
  params: {
    lng
  }
}: PropsWithChildren<{
  params: StaticParamsType;
}>) => (
  <html lang={lng} dir={dir(lng)}>
  <head/>
  <body>
  {children}
  </body>
  </html>
)

export default RootLayout