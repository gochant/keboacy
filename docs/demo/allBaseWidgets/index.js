var vm = kendo.observable({
    data: {
        date: new Date()
    },
    startDate: new Date(),
    autoCompleteValue: null,
    colors: [
        { name: "Red", value: "#f00" },
        { name: "Green", value: "#0f0" },
        { name: "Blue", value: "#00f" }
    ],
    displayAutoCompleteValue: function () {
        var autoCompleteValue = this.get("autoCompleteValue");
        return kendo.stringify(autoCompleteValue);
    },
    comboBoxValue: null,
    displayComboBoxValue: function () {
        var comboBoxValue = this.get("comboBoxValue");
        return kendo.stringify(comboBoxValue);
    },
    dropDownListValue: null,
    displayDropDownListValue: function () {
        var dropDownListValue = this.get("dropDownListValue");
        return kendo.stringify(dropDownListValue);
    },
    numericTextBoxValue: 10,
    displayNumericTextBoxValue: function () {
        var numericTextBoxValue = this.get("numericTextBoxValue");

        return kendo.toString(numericTextBoxValue, "c");
    },
    datePickerValue: new Date(),
    displayDatePickerValue: function () {
        var datePickerValue = this.get("datePickerValue");
        return kendo.toString(datePickerValue, "yyyy-MM-dd");
    },
    timePickerValue: new Date(),
    displayTimePickerValue: function () {
        var timePickerValue = this.get("timePickerValue");

        return kendo.toString(timePickerValue, "hh:mm:ss");
    },
    multiSelectValue: [],
    displayMultiSelectValue: function () {
        var multiSelectValue = this.get("multiSelectValue");
        return kendo.stringify(multiSelectValue);
    },
    gridSource: [
        { Name: "Chai", Price: 18.00, UnitsInStock: 39 },
        { Name: "Chang", Price: 19.00, UnitsInStock: 17 },
        { Name: "Mishi Kobe Niku", Price: 97.00, UnitsInStock: 29 }
    ],
    pageSource: new kendo.data.DataSource({
        page: 1,
        data: [
        { Name: "Chai", Price: 18.00, UnitsInStock: 39 },
        { Name: "Chang", Price: 19.00, UnitsInStock: 17 },
        { Name: "Mishi Kobe Niku", Price: 97.00, UnitsInStock: 29 }
        ]
    }),
    treeviewSource: kendo.data.HierarchicalDataSource.create({
        data: [
            {
                text: "Andrew", expanded: true, items: [
                { text: "Nancy" },
                { text: "Steve" }
                ]
            }
        ],
        schema: {
            model: {
                children: 'items'
            }
        }
    }),
    displayTreeviewSource: function () {
        return stringify(this.get("treeviewSource").toJSON());
    }
});

kendo.bind($('body'), vm);

$('body').dynamicTab();

$('#openConfirm').on('click', function () {
    $.modalConfirm('你确认这个行为吗？')
});

$('#subMenu').submenu();

$("#dropdown").kendoDropDownList({
    optionLabel: "Paragraph",
    dataTextField: "text",
    dataValueField: "value",
    dataSource: [
        { text: "Heading 1", value: 1 },
        { text: "Heading 2", value: 2 },
        { text: "Heading 3", value: 3 },
        { text: "Title", value: 4 },
        { text: "Subtitle", value: 5 }
    ]
});

$('#submit').on('click', function(){

    var validator = kendo.widgetInstance($('[data-validate-form]'));
    validator.validate();
})
