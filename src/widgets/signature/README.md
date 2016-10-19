# Signature

签名控件，有以下特性：

- 数据绑定

依赖：[jSignature](https://github.com/brinley/jSignature)

## 简单示例

[Demo](https://gochant.github.io/keboacy/demo/signature/)

## 开始使用

### HTML

```html
<div data-role="signature" data-bind="value: img"></div>
```

### JS

```js
var vm = kendo.observable({ img: ['image/png;base64', ''] });
kendo.bind($('body'), vm);
```

## API