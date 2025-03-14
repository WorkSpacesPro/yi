const isProd = import.meta.env.PROD;
console.log('import.meta.env.BASE_URL', import.meta.env.BASE_URL)
// import {}
export default function getUrl(path: string) {
  console.log('import.meta.env.BASE_URL', import.meta.env.BASE_URL)
  return isProd? import.meta.env.BASE_URL +  path : path
}
