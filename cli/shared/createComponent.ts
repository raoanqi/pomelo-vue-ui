import { ensureDirSync } from 'fs-extra'
import { resolve } from 'path'
import { lightBlue, lightGreen } from 'kolorist'

export interface ComponentMeta {
  name: string
  title: string
  category: string
}

const createComponent = (meta: ComponentMeta) => {
  const { name } = meta
  // 拼接项目目录
  const componentDir = resolve('../src', name)
  // 每个组件下面都有src，style，test三个文件夹，生成对应的文件夹
  const srcDir = resolve(componentDir, 'src')
  const styleDir = resolve(componentDir, 'style')
  const testDir = resolve(componentDir, 'test')
  // 生成对应的文件夹
  ensureDirSync(srcDir)
  ensureDirSync(styleDir)
  ensureDirSync(testDir)
  // 生成对应的文件

  // 创建成功通知
  console.log(lightGreen(`✔️组件${name}目录创建成功！`))
  // 输出组件目录
  console.log(lightBlue(`📁组件目录：${componentDir}`))
}
export default createComponent
