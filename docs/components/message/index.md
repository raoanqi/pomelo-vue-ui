# Message 消息提示

消息提示可以用于对用户操作进行反馈。

## 按钮类型

使用`type`属性可以指定按钮的类型。  
`type`属性支持四种值：`primary`（默认）、`secondary`、`text`、`outline`。

:::demo

```vue

<template>
  <p-button type="primary">Primary</p-button>
  <p-button type="secondary">Secondary</p-button>
  <p-button type="text">Text</p-button>
  <p-button type="outline">Outline</p-button>
</template>

```

:::

## 按钮尺寸

使用`size`属性可以指定按钮的尺寸。  
`size`属性支持三种值：`large`、`medium`（默认）、 `small`、`mini`。

:::demo

```vue

<template>
  <p-button size="large">Large</p-button>
  <p-button size="medium">Medium</p-button>
  <p-button size="small">Small</p-button>
  <p-button size="mini">Mini</p-button>
</template>
```

:::

## 按钮形状

使用`shape`属性可以指定按钮的形状。  
`shape`属性支持三种值：`square`（默认）、`round`、 `circle`。

:::demo

```vue

<template>
  <p-button shape="square">Square</p-button>
  <p-button shape="round">Round</p-button>
  <p-button shape="circle">Circle</p-button>
</template>
```

:::

## 按钮状态

使用`status`属性可以指定按钮的状态。  
`status`属性支持四种值：`normal`（默认）、`success`、 `warning`、`danger`。
:::demo

```vue

<template>
  <p-button status="normal">Normal</p-button>
  <p-button status="success">Success</p-button>
  <p-button status="warning">Warning</p-button>
  <p-button status="danger">Danger</p-button>
</template>
```

:::

## 禁用按钮

使用`disabled`属性可以控制按钮是否处于禁用状态。

:::demo

```vue

<template>
  <p-button type="primary" disabled>Primary</p-button>
  <p-button type="secondary" disabled>Secondary</p-button>
  <p-button type="text" disabled>Text</p-button>
  <p-button type="outline" disabled>Outline</p-button>
</template>

```

:::

## Button API

### Props

| 参数名       | 描述                                                                                                                            | 类型                                                |      默认值      |
|-----------|-------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|:-------------:|
| type      | 按钮的类型                                                                                                                         | `'primary' \| 'secondary' \| 'outline' \| 'text'` | `'secondary'` |
| shape     | 按钮的形状                                                                                                                         | `'square' \| 'round' \| 'circle'`                 |   `square`    |
| status    | 按钮的状态                                                                                                                         | `'normal' \| 'warning' \| 'success' \| 'danger'`  |  `'normal'`   |
| size      | 按钮的尺寸                                                                                                                         | `'mini' \| 'small' \| 'medium' \| 'large'`        |  `'medium'`   |
| disabled  | 按钮是否禁用                                                                                                                        | `boolean`                                         |    `false`    |
| html-type | 设置 `button` 的原生 `type` 属性，可选值参考 [HTML标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type "_blank") | `string`                                          |  `'button'`   |

### Events

| 事件名   | 描述         | 参数               |
|-------|------------|------------------|
| click | 点击按钮时触发的事件 | ev: `MouseEvent` |

### Slots

| 插槽名     | 描述             |
|---------|----------------|
| default | 默认插槽，用于自定义默认内容 |

