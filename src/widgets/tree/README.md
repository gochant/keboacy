# Tree

一个轻量级树 Widget，有以下特性：

- 层叠数据源绑定
- Ajax/本地 数据均支持
- 整行选取（类 Windows10 风格）

其他...（待开发）


## 简单示例

[Demo](https://gochant.github.io/keboacy/demo/tree/)

## 开始使用

### HTML

```html
<div data-role="tree" data-bind="source: tree"
        data-text-field="title" data-selectable="true"
        data-auto-bind="false"></div>
```

### JS

```js
var datasource = new kendo.data.HierarchicalDataSource({
    data: [
        {
            title: "SciFi",
            movies: [
                {
                    title: "Star Wars: A New Hope", year: 1977, cast: [
                    {
                        title: "Mark Hamill", character: "Luke Skywalker", cast: [
                        { title: "Mark Hamill", character: "Luke Skywalker" },
                        { title: "Harrison Ford", character: "Han Solo" },
                        { title: "Carrie Fisher", character: "Princess Leia Organa" },
                        { title: "Billy Dee Williams", character: "Lando Calrissian" }
                        ]
                    },
                    { title: "Harrison Ford", character: "Han Solo" },
                    { title: "Carrie Fisher", character: "Princess Leia Organa" }
                    ]
                },
                {
                    title: "Star Wars: The Empire Strikes Back", year: 1980, cast: [
                    { title: "Mark Hamill", character: "Luke Skywalker" },
                    { title: "Harrison Ford", character: "Han Solo" },
                    { title: "Carrie Fisher", character: "Princess Leia Organa" },
                    { title: "Billy Dee Williams", character: "Lando Calrissian" }
                    ]
                }
            ]
        }
    ],
    schema: {
        model: {
            children: {
                schema: {
                    data: "movies",
                    model: {
                        children: "cast"
                    }
                }
            }
        }
    }
});

kendo.bind($('body'), {
    tree: datasource
})

datasource.read()
```

## API