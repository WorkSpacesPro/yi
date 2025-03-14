const isProd = import.meta.env.PROD;
// import {}
export default function getUrl(path: string) {
  return isProd? import.meta.env.BASE_URL +  path : path
}
