# Divider 分割线

分割线可以对页面进行划分。

## 基本使用

分割线可以将页面划分为不同的部分，分割线默认为水平方向放置。

:::demo

```vue

<template>
  <p>This is a paragraph.</p>
  <p-divider></p-divider>
  <p>This is a paragraph.</p>
  <p-divider></p-divider>
  <p>This is a paragraph.</p>
  <p-divider></p-divider>
  <p>This is a paragraph.</p>
  <p-divider></p-divider>
  <p>This is a paragraph.</p>
</template>

```

:::

## 分割线方向

可以使用`direction`属性来指定分割线的放置方向，支持两种值：`horizontal`（水平，默认值）、 `vertical`（垂直）。

:::demo

```vue

<template>
  <p>This is a paragraph.</p>
  <p-divider></p-divider>
  <p>This is a paragraph.</p>
  <p-divider></p-divider>
  <p>This is a paragraph.</p>
  <p-divider></p-divider>
  <span>Item 1</span>
  <p-divider direction="vertical"></p-divider>
  <span>Item 2</span>
  <p-divider direction="vertical"></p-divider>
  <span>Item 3</span>
</template>

```

:::

## 分割线中文字的位置

当`direction`属性设置为`horizontal`，可以在分割线中插入文字。  
此时，可以使用`contentPosition`属性来指定分割线的放置方向，支持三种值：`left`（左侧）、`center`（居中，默认值）、 `right`
（右侧）。    
注意：当属性值为`vertical`时，分割线中不允许插入文字。

:::demo

```vue

<template>
  <p>This is a paragraph.</p>
  <p-divider contentPosition="left">Pomelo UI</p-divider>
  <p>This is a paragraph.</p>
  <p-divider contentPosition="center">Pomelo UI</p-divider>
  <p>This is a paragraph.</p>
  <p-divider contentPosition="right">Pomelo UI</p-divider>
  <p>This is a paragraph.</p>
</template>

```

:::

## 分割线样式

此时，可以使用`border`属性来指定分割线的样式，支持四种值：`solid`（实线，默认值）、`dashed`（虚线）、`dotted`（点线）。
注意：当属性值为`vertical`时，分割线中不允许插入文字。

:::demo

```vue

<template>
  <p>This is a paragraph.</p>
  <p-divider border="solid"></p-divider>
  <p>This is a paragraph.</p>
  <p-divider border="dashed"></p-divider>
  <p>This is a paragraph.</p>
  <p-divider border="dotted"></p-divider>
  <p>This is a paragraph.</p>
</template>

```

:::

## Divider API

### Props

| 参数名             | 描述        | 类型                                |     默认值      |
|-----------------|-----------|-----------------------------------|:------------:|
| direction       | 分割线方向     | `'horizontal' \| 'vertical' `     | `horizontal` |
| contentPosition | 分割线中文字的位置 | `'left' \| 'center' \| 'right'`   |   `center`   |
| border          | 分割线的样式    | `'solid' \| 'dashed' \| 'dotted'` |   `solid`    |

### Slots

| 插槽名     | 描述             |
|---------|----------------|
| default | 默认插槽，用于自定义默认内容 |