import '@styles/globals.css'

import type {ReactNode} from 'react'
import {dir}            from 'i18next'


export default function RootLayout({
  children,
  params: {
    lng
  }
}: {
  children: ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head/>
      <body>
      {children}
      </body>
    </html>
  )
}
