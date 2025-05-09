import DefaultTheme from 'vitepress/theme'

import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'

export default {
  extends: DefaultTheme,

  enhanceApp({ app , router }) {
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }

      router.onAfterPageLoad = (to) => {
        const script = document.createElement("script");
        script.defer = true;
        script.async = true;
        script.src = "https://cn.vercount.one/js";
        document.head.appendChild(script);
      };
    }
  },
  
}