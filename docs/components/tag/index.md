# Tag 标签

标签可以用来对数据进行标记与展示。

## 基本使用

使用标签展示数据。

:::demo

```vue

<template>
  <p-tag>Hello</p-tag>
  <p-tag>Pomelo UI</p-tag>
  <p-tag>Happy</p-tag>
</template>
```

:::

## 标签尺寸

使用`size`属性可以指定标签的尺寸。  
`size`属性支持三种值：`large`、`medium`（默认）、 `small`。

:::demo

```vue

<template>
  <p-tag size="large" bgColor="blue">Large</p-tag>
  <p-tag size="medium" bgColor="blue">Medium</p-tag>
  <p-tag size="small" bgColor="blue">Small</p-tag>
</template>
```

:::

## 标签颜色

使用`bgColor`属性可以指定标签的背景颜色。  
`bgColor`属性支持四种内建值：`blue`、`red`、 `green`、`gray`。  
如果想使用其他颜色，也可以使用`bgColor`属性传入颜色值。
:::demo

```vue

<template>
  <p-tag bgColor="blue">Blue</p-tag>
  <p-tag bgColor="red">Red</p-tag>
  <p-tag bgColor="green">Green</p-tag>
  <p-tag bgColor="gray">Gray</p-tag>
  <!--自定义颜色-->
  <p-tag bg-color="#427ef5">Customize Color</p-tag>
</template>
```

:::

## Tag API

### Props

| 参数名      | 描述     | 类型                                         |    默认值     |
|----------|--------|--------------------------------------------|:----------:|
| size     | 按钮的尺寸  | `'large' \| 'medium' \| 'small'`           | `'medium'` |
| bg-color | 标签的背景色 | `'mini' \| 'small' \| 'medium' \| 'large'` |   `N/A`    |

### Slots

| 插槽名     | 描述             |
|---------|----------------|
| default | 默认插槽，用于自定义默认内容 |

