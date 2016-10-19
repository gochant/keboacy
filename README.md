# keboacy

Kendo and Bootstrap's legacy

一个数据驱动的界面工具集，基于 [Kendo UI Core](https://github.com/telerik/kendo-ui-core) 和 [Bootstrap](https://github.com/twbs/bootstrap) 以及可能的一些其他三方库

主要包含以下内容：

## Widgets

主要是补充 Kendo UI Core 和 Bootstrap 没有的界面控件

### MVVM Widgets

以下是采用 MVVM 模式，支持数据绑定：

#### DataTable

轻量级的表格控件

[文档](https://github.com/gochant/keboacy/tree/master/src/widgets/dataTable)

#### Tree

轻量级的树控件

[文档](https://github.com/gochant/keboacy/tree/master/src/widgets/tree)

#### Flowchart

流程图显示/设计控件

[文档](https://github.com/gochant/keboacy/tree/master/src/widgets/flowchart)

#### Signature

签名控件

[文档](https://github.com/gochant/keboacy/tree/master/src/widgets/signature)

#### CheckboxList

复选框列表

[文档](https://github.com/gochant/keboacy/tree/master/src/widgets/checkboxlist)

#### File

默认文件上传 input 的美化版

### Normal jQuery Plugins

以下是普通 jQuery 插件，可脱离 Kendo UI 使用：

#### dynamicTab

Bootstrap Tab 组件的一点点增强

#### submenu

一个侧边栏主菜单插件

#### modalConfirm

确认对话框，代替 window.confirm

## 主题样式

定制了一个 Bootstrap & Kendo UI 主题，精简了一些不必要的样式，同时采用相同的变量设置，
使两者风格浑然一体，一些示例：

- [Bootstrap Theme Summary](https://gochant.github.io/keboacy/demo/bootstrap/)
- [Kendo Basic Widgets Summary](https://gochant.github.io/keboacy/demo/allBaseWidgets/)
- [Layout Admin](https://gochant.github.io/keboacy/demo/layout-admin)
- [Layout Admin2](https://gochant.github.io/keboacy/demo/layout-admin2)
- [Layout Login](https://gochant.github.io/keboacy/demo/layout-login)

样式风格指南

- [Styleguide](http://localhost:24144/docs/styleguide/)

## 框架

### Binders

- date: 绑定格式化的日期字符串

### Data

- BackendApiDataSource: 与后台交互的 DataSource
- BackendApiDataObject: 可与后台交互的可观察对象

## 文档

待完善

## 协议

MIT