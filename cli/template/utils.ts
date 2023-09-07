/**
 * 存放cli中使用的工具函数
 */

// 首字母大写
export const upperFirst = (str: string) => {
  return str.replace(/^\S/, s => s.toUpperCase())
}
