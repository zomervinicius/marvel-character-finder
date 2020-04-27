export const isObjEmpty = (obj) =>
  Object.keys(obj).length === 0 && obj.constructor === Object

export const scrollToTop = () =>
  typeof window !== 'undefined' && window.scroll(0, 0)
