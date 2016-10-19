# DataTable

一个轻量级表格 Widget，有以下特性：

- 数据绑定
- 表头排序
- 单选/多选
- 固定表头
- 表内详情页
- 复杂条件过滤


## 简单示例

[Demo](https://gochant.github.io/keboacy/demo/dataTable/)

## 开始使用

### HTML

手写列模板，方便最大限度自定义

```html
<div data-role="datatable" data-bind="source: list" data-selectable="row" data-widths="[60,]">
    <script type="text/template" class="tpl-header">
        <tr>
            <th data-prop="Name">序号</th>
            <th class="sortable string" data-prop="Name">姓名</th>
            <th class="sortable number" data-prop="Age">年龄</th>
            <th class="sortable string" data-prop="Gender">性别</th>
        </tr>
    </script>
    <script type="text/template" class="tpl-row">
        <tr data-id="#: id #">
            <td>#: id #</td>
            <td>#: Name #</td>
            <td>#: Age #</td>
            <td>#: Gender #</td>
        </tr>
    </script>
</div>
```

### JS

```js
var vm = {
    list: new kendo.data.DataSource({
        data: [{
            id: 1,
            Name: '张三',
            Gender: '男',
            Age: 25
        }, {
            id: 2,
            Name: '李四',
            Gender: '女',
            Age: 28
        }, {
            id: 3,
            Name: 'ssx',
            Gender: '女',
            Age: 44
        }]
    })
}

kendo.bind($('body'), vm);

vm.list.fetch();

```

## API