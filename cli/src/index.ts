import { Command } from 'commander'
import { onCreate } from '../command/create'

// 创建命令对象
const cmd = new Command()

// 注册create命令
cmd
  // 注册create命令
  .command('create')
  // 添加描述，用于--help的输出
  .description('创建组件模板或者配置文件')
  // option：配置选项，<>为必填参数，[]为选填参数
  .option('-t --type <type>', '创建类型，可选值为：component、lib-entry')
  // 用户回车之后的回调函数
  .action(onCreate)

// 上面完成注册之后，需要解析命令行参数，否则无法获取到命令行的参数
cmd.parse()
