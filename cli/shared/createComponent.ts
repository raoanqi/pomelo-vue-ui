import { ensureDirSync, writeFileSync } from 'fs-extra'
import { resolve } from 'path'
import { lightBlue, lightGreen } from 'kolorist'
import genCoreTemplate from '../template/core'
import genTypesTemplate from '../template/types'
import genStyleTemplate from '../template/style'
import genTestTemplate from '../template/test'
import genIndexTemplate from '../template'

export interface ComponentMeta {
  name: string
  title: string
  category: string
}

const WRITE_FILE_OPTIONS = 'utf-8'

const createComponent = (meta: ComponentMeta) => {
  const { name } = meta
  // 拼接项目目录
  const componentDir = resolve('../src/components', name)
  // 每个组件下面都有src，style，test三个文件夹，生成对应的文件夹
  const srcDir = resolve(componentDir, 'src')
  const styleDir = resolve(componentDir, 'style')
  const testDir = resolve(componentDir, 'test')
  // 生成对应的文件夹
  ensureDirSync(srcDir)
  ensureDirSync(styleDir)
  ensureDirSync(testDir)
  // 对应的文件目录
  const coreFilePath = resolve(srcDir, `${name}.tsx`)
  // 调用函数生成对应的.tsx文件
  writeFileSync(coreFilePath, genCoreTemplate(name), WRITE_FILE_OPTIONS)
  // 调用函数生成对应的类型声明文件
  const typesFilePath = resolve(srcDir, `${name}-types.ts`)
  writeFileSync(typesFilePath, genTypesTemplate(name), WRITE_FILE_OPTIONS)
  // 调用函数生成对应的样式文件
  const styleFilePath = resolve(styleDir, `${name}.scss`)
  writeFileSync(styleFilePath, genStyleTemplate(name), WRITE_FILE_OPTIONS)
  // 调用函数生成对应的测试文件
  const testFilePath = resolve(testDir, `${name}.test.ts`)
  writeFileSync(testFilePath, genTestTemplate(name), WRITE_FILE_OPTIONS)
  // 调用函数生成对应的index.ts文件
  const indexFilePath = resolve(componentDir, 'index.ts')
  writeFileSync(indexFilePath, genIndexTemplate(name), WRITE_FILE_OPTIONS)
  // 创建成功通知
  console.log(lightGreen(`✔️组件${name}目录创建成功！`))
  // 输出组件目录
  console.log(lightBlue(`📁组件目录：${componentDir}`))
}
export default createComponent
