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
    },
    design: {
        nodes: [{
            id: 'n2',
            index: 2,
            left: "220",
            top: "53",
            text: "测试2"
        }, {
            id: '0',
            index: 0,
            left: "79",
            top: "60",
            text: "开始",
            isTarget: false
        }, {
            id: '-1',
            index: -1,
            left: "471",
            top: "88",
            text: "结束",
            isSource: false
        }],
        connections: [],
        types: [{
            type: 'application',
            text: '申请'
        }, {
            type: 'audit',
            text: '审批'
        }]
    }
});
kendo.bind($('body'), vm);
var instance = kendo.widgetInstance($('.flow-designer'));
$('#getData').on('click', function () {
    var val = instance.value().toJSON();
    console.log(val);
});

$('#removeCon').on('click', function () {
    var cons = vm.get('design.connections');
    cons.splice(0, 1);
});
$('#addCon').on('click', function () {
    var cons = vm.get('design.connections');
    var data = {
        source: '0',
        target: 'n2'
    };
    if (!cons.find(function (item) {
        return item.source === data.source && item.target === data.target
    })) {
        cons.push({
            source: '0',
            target: 'n2'
        });
    }
});
$('#addNode').on('click', function () {
    var nodes = vm.get('design.nodes');
    nodes.push({
        id: 'n5',
        index: 5,
        name: '新添加的',
        state: 'pending',
        top: 100,
        left: 300
    })
});
$('#deleteNode').on('click', function () {
    var nodes = vm.get('design.nodes');
    nodes.remove(instance.select());
});
$('#changeNode').on('click', function () {
    var nodes = vm.get('design.nodes');
    if (nodes.length > 0) {
        nodes[0].set('text', '更改的文本');
    }
})
$('#changeCon').on('click', function () {
    var cons = vm.get('design.connections');
    if (cons.length > 0) {
        cons[0].set('text', '更改的连接文本');
    }
})
