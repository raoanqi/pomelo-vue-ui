import Theme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import './demo-block.less'
import '../../../src/index.less'
import { useComponents } from './useComponents'
import PomeloUI from '../../../src/index'

export default {
  ...Theme,
  enhanceApp(ctx) {
    Theme.enhanceApp(ctx)
    useComponents(ctx.app)
    ctx.app.use(PomeloUI)
  }
}
