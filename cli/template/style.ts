/**
 * 创建组件scss文件模板
 */

const genStyleTemplate = (name: string) => {
  return `\
  .s-${name} {
  /* 在这里编写组件样式 */
  }
  `
}

export default genStyleTemplate
