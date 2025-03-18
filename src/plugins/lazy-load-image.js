import {visit} from "unist-util-visit";
import getUrl from "../utils/getUrl.js";

console.log(import.meta.env.BASE_URL, 'import.meta.env.BASE_URL')

export function lazyLoadImage() {
  return function (tree) {
    visit(tree, function (node) {
      if (node.tagName === 'img') {
        node.properties['data-src'] = node.properties.src
        node.properties.src = getUrl('/spinner.gif')
        node.properties['data-alt'] = node.properties.alt
        node.properties.alt = 'default'
      }
    })
  }
}
