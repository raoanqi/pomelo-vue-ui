import { Command } from 'commander'

// 创建命令对象
const cmd = new Command()
console.log('即将开始')
// 注册命令，参数，以及用户传入之后的回调函数
cmd
  .command('create')
  // 添加描述，用于--help的输出
  .description('创建组件模板或者配置文件')
  // option：配置选项，<>为必填参数，[]为选填参数
  .option('--type -t <type>', '创建类型，可选值为：component、lib-entry')
  // 用户回车之后的回调函数
  .action(args => {
    console.log(args)
  })
