# Flowchart

一个流程图控件，可用于业务流程可视化或 OA、BPM 等系统，有以下特性：

- 数据绑定
- 流程节点状态支持
- 拖拽
- 简单易编辑，以及其他

依赖：基于 [jsPlumb](https://github.com/jsplumb/jsPlumb) 社区免费版（MIT协议）


## 简单示例

[Demo](https://gochant.github.io/keboacy/demo/flowchart/)

## 开始使用

### HTML

```html
<div data-role="flow" data-bind="value: flow"></div>
```

### JS

```js
var vm = kendo.observable({
    flow: {
        nodes: [{
            id: 'n1',
            index: 1,
            left: "200",
            top: "167",
            text: "测试",
            state: 'done'
        }, {
            id: 'n2',
            index: 2,
            left: "420",
            top: "53",
            text: "测试2",
            state: 'progress'
        }, {
            id: 'n3',
            index: 3,
            left: "484",
            top: "245",
            text: "测试3",
            state: 'pending'
        }, {
            id: '0',
            index: 0,
            left: "79",
            top: "60",
            text: "开始",
            state: 'done',
            isTarget: false
        }, {
            id: '-1',
            index: -1,
            left: "771",
            top: "88",
            text: "结束",
            state: 'pending',
            isSource: false
        }],
        connections: [{
            source: '0',
            target: 'n1'
        }, {
            source: 'n1',
            target: 'n2'
        }, {
            source: 'n2',
            target: 'n3',
            text: '审核通过'
        }, {
            source: 'n2',
            target: '-1',
            text: '审核不通过'
        }, {
            source: 'n3',
            target: '-1',
            text: '呵呵哒',
            delectable: false
        }]
    }
});
kendo.bind($('body'), vm);
```

## API