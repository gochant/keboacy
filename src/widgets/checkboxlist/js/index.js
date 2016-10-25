(function(){
    // widgets checked binder
    var Binder = kendo.data.Binder;
    var binders = kendo.data.binders;
    binders.widget.checkboxlist = {
        value: binders.widget.multiselect.value
    };

    var NS = ".kendoCheckBoxList";

    var CheckBoxList = kendo.ui.DataBoundWidget.extend({
        options: {
            name: "CheckBoxList",
            valuePrimitive: true,
            dataSource: null,
            dataTextField: "text",
            dataValueField: "value",
            dataValueType: "string",
            orientation: "vertical"
        },

        events: [
            "dataBound",
            "select"
        ],
        dataSource: null,

        init: function (element, options) {

            kendo.ui.Widget.fn.init.call(this, element, options);

            this._dataSource();
            this.dataSource.fetch();
            this.element.on("click" + NS, ".k-checkbox-label", { sender: this }, this._onCheckBoxSelected);

            //this.element.css({ "display": "inline-block" });
        },

        destroy: function () {
            $(this.element).off(NS);
            kendo.ui.Widget.fn.destroy.call(this);
        },

        _dataSource: function () {
            var dataSource = this.options.dataSource;
            dataSource = $.isArray(dataSource) ? { data: dataSource } : dataSource;

            if (this.dataSource && this._refreshHandler) {
                this.dataSource.unbind("change", this._refreshHandler);
            } else {
                this._refreshHandler = $.proxy(this.refresh, this);
            }

            this.dataSource = kendo.data.DataSource.create(dataSource).bind("change", this._refreshHandler);
        },

        _template: function () {

            var html = kendo.format(
                "<div class='k-ext-checkbox-item {2}' data-uid='#: uid #' data-value='#: {0} #' data-text='#: {1} #'>" +
                "<input type='checkbox' value='#: {0} #' class='k-checkbox' data-type='{3}' />" +
                "<label class='k-checkbox-label'>#: {1} #</label>" +
                "</div>",
                this.options.dataValueField,
                this.options.dataTextField,
                this.options.orientation === "vertical" ? "checkbox" : "checkbox-inline",
                this.options.dataValueType);

            return kendo.template(html);
        },

        _onCheckBoxSelected: function (e) {

            var $target = $(this),
                $checkBoxItem = $target.closest(".k-ext-checkbox-item"),
                that = e.data.sender,
                isChecked = $checkBoxItem.find(".k-checkbox").is(":checked");

            $target.prev(".k-checkbox").prop("checked", !isChecked).addClass("k-state-selected");

            var selectedUid = $checkBoxItem.attr("data-uid");
            that.trigger("change", { item: that.dataSource.getByUid(selectedUid), checked: !isChecked });
        },

        setDataSource: function (dataSource) {

            this.options.dataSource = dataSource;
            this._dataSource();
            this.dataSource.fetch();
        },

        refresh: function (e) {

            var template = this._template();
            var items = this.dataSource.view();
            var oldValue = this.value();
            this.element.empty();

            for (var idx = 0; idx < items.length; idx++) {
                this.element.append(template(items[idx]));
            }

            this.value(oldValue)
            //this.trigger("dataBound");
        },
        items: function () {
            return this.element.children();
        },
        dataItems: function () {

            var dataSource = this.dataSource,
                list = [],
                $items = this.element.find(".k-checkbox:checked").closest(".k-ext-checkbox-item");

            $.each($items, function () {
                var uid = $(this).attr("data-uid");
                list.push(dataSource.getByUid(uid));
            });

            return list;
        },

        value: function (value) {
            if (value == null) {
                var list = [];
                var $items = this.element.find(".k-checkbox:checked").closest(".k-ext-checkbox-item");

                $.each($items, function () {
                    var value = $(this).attr("data-value");
                    list.push(value);
                });
                return list;
            } else {
                // 更新 DOM
                var that = this,
                    list = $.isArray(value) ? value : (typeof value === "string" ? [value] : []);

                this.element.find(".k-checkbox").prop("checked", false).removeClass("k-state-selected");

                $.each(list, function (i, val) {
                    that.element.find(kendo.format(".k-ext-checkbox-item[data-value='{0}'] .k-checkbox", val)).click();
                });
            }
        }
    });
    kendo.ui.plugin(CheckBoxList);
})();