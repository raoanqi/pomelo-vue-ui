# Alert 提示

提示可以在页面上强调展示数据。

## 基本使用

:::demo

```vue

<template>
  <p-alert>This is a paragraph.</p-alert>
</template>
```

:::

## 使用标题

使用`title`属性可以指定显示的标题。

:::demo

```vue

<template>
  <p-alert title="Title">This is a paragraph.</p-alert>
</template>

```

:::

## 提示类型

使用`type`属性可以指定按钮的类型。  
`type`属性支持四种值：`info`（信息，默认值）、`success`（成功）、`warning`（警告）、`error`（错误）。

:::demo

```vue

<template>
  <p-alert type="info">Info type</p-alert>
  <p-alert type="success">Success type</p-alert>
  <p-alert type="warning">Warning type</p-alert>
  <p-alert type="error">Error type</p-alert>
</template>

```

:::

## 内容居中

使用`center`属性可以指定按钮的类型，对应的值类型为布尔值。

:::demo

```vue

<template>
  <p-alert>This is a paragraph.</p-alert>
  <p-alert type="success" center>This is a paragraph.</p-alert>
  <p-alert type="warning" title="Title">This is a paragraph.</p-alert>
  <p-alert type="error" title="Title" center>This is a paragraph.</p-alert>
</template>

```

:::

## Alert API

### Props

| 参数名    | 描述     | 类型                                            |   默认值    |
|--------|--------|-----------------------------------------------|:--------:|
| type   | 提示的类型  | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` |
| title  | 提示的标题  | string                                        |   N/A    |
| center | 内容是否居中 | `true \| false`                               | `false`  |

### Slots

| 插槽名     | 描述             |
|---------|----------------|
| default | 默认插槽，用于自定义默认内容 |

