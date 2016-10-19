# CheckboxList

复选框列表，有以下特性：

- 数据绑定
- 动态列表

## 简单示例

[Demo](https://gochant.github.io/keboacy/demo/checkboxlist/)

## 开始使用

### HTML

```html
<div data-role="checkboxlist" data-bind="value: val, source: list"></div>
```

### JS

```js
var vm = kendo.observable({
    val: '02',
    list: [{
        text: '选项1',
        value: '01'
    }, {
        text: '选项2',
        value: '02'
    }, {
        text: '选项3',
        value: '03'
    }]
});

kendo.bind($('body'), vm);
```

## API