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

$('#getData').on('click', function () {
    console.log(vm.toJSON())
})

$('#changeData').on('click', function () {
    vm.set('val', ['02', '03']);
})

$('#changeSource').on('click', function () {
    vm.get('list').pop();
})