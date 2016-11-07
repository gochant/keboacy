var vm = {
    d: ''
};
kendo.bind($('body'), vm);

var f = kendo.widgetInstance($('[data-role=file]'));
f.bind('change', function(e){
    console.log(e)
});