export const fallbackLng: string = 'hy'
export const languages: string[] = [fallbackLng, 'en', 'ru']
export const defaultNS: string = 'translation'

export function getOptions (lng: string = fallbackLng, ns: string | string[] = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}
