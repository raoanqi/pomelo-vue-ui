import * as inquirer from 'inquirer'
import { red } from 'kolorist' // red用于打印红色的报错信息
import createComponent from '../shared/createComponent'

// 创建类型
const CREATE_TYPES = ['component', 'lib-entry']
// 创建的组件分类
const CREATE_CATEGORIES = ['基础组件', '反馈组件', '表单组件', '数据展示组件']

export const onCreate = async (args = { type: '' }) => {
  // 判断用户是否输入type
  let { type } = args
  // 如果没有输入type，则提示用户输入
  if (!type) {
    const res = await inquirer.prompt([
      {
        //   获取属性名称
        name: 'type',
        //   交互方式
        type: 'list',
        //   提示信息
        message: '请选择创建类型:',
        //   选项列表
        choices: CREATE_TYPES,
        //   默认选项：数组第一项
        default: 0
      }
    ])
    type = res.type
  } else {
    // 如果输入了type，但是输入的是错误的type，则提示用户重新输入
    if (CREATE_TYPES.indexOf(type) === -1) {
      console.log(
        red(
          `当前类型仅支持：${CREATE_TYPES.join(
            '、'
          )}，您输入的是：${type}，请重新选择！`
        )
      )
      return onCreate()
    }
  }
  // 正式进行创建
  try {
    switch (type) {
      case 'component':
        // 如果是组件，用户需要输入多项组件的信息
        const info = await inquirer.prompt([
          // prompt接受一个数组，数组中每一项都是一个交互项
          {
            name: 'name',
            type: 'input',
            message: '（必填）请输入组件name，将用作文件名称以及文件夹名称',
            // validate用于对输入的参数进行校验，这里对name展开校验
            validate(value) {
              if (value.trim() === '') {
                return '组件name不能为空，请输入组件name'
              }
              return true
            }
          },
          {
            name: 'title',
            type: 'input',
            message: '（必填）请输入组件的中文名称，将用于组件文档的标题',
            validate(value) {
              if (value.trim === '') {
                return '组件名称不能为空，请输入组件名称'
              }
              return true
            }
          },
          {
            name: 'category',
            type: 'list',
            message: '（必选）请选择组件的分类，将用于组件文档分类',
            //   这里就不用校验了，因为是选择，不会出现空的情况
            choices: CREATE_CATEGORIES
          }
        ])
        // 开始创建
        createComponent(info)
        break
      default:
        break
    }
  } catch (error) {
    return
  }
}
