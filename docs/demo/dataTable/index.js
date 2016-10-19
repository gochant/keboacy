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
        }, {
            id: 4,
            Name: '是的',
            Gender: '男',
            Age: 58
        }, {
            id: 5,
            Name: 'mony',
            Gender: '女',
            Age: 24
        }, {
            id: 6,
            Name: 'giss',
            Gender: '男',
            Age: 46
        }, {
            id: 7,
            Name: 'goc',
            Gender: '女',
            Age: 85
        }, {
            id: 8,
            Name: 'openx',
            Gender: '男',
            Age: 13
        }]
    }),
    getSelect: function () {
        var inst = kendo.widgetInstance($('[data-role=datatable]'));
        console.log(inst.select());
    },
    filterData: function () {
        vm.list.filter({
            field: 'Age',
            operator: 'gt',
            value: 40
        });
    }
}

kendo.bind($('body'), vm);

vm.list.read();