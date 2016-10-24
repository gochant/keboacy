(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'kendo-ui'], factory);
    } else {
        factory(jQuery, kendo);
    }
}(function ($, kendo) {
    var ui = kendo.ui,
        Widget = ui.Widget;
    var Validator = kendo.ui.Validator;

    function widgetCssFix(elements) {

        function updateCssOnPropertyChange(e) {
            var element = $(e.target || e.srcElement);

            element.siblings(".k-dropdown-wrap")
                .add(element.parent(".k-numeric-wrap, .k-multiselect, .k-picker-wrap, .k-autocomplete, .k-slider-wrap"))
                .toggleClass("k-invalid", element.hasClass("k-invalid"));
        }

        //correct mutation event detection
        var hasMutationEvents = ("MutationEvent" in window),
            MutationObserver = window.WebKitMutationObserver || window.MutationObserver;

        if (MutationObserver) {
            var observer = new MutationObserver(function (mutations) {
                    var idx = 0,
                        mutation,
                        length = mutations.length;

                    for (; idx < length; idx++) {
                        mutation = mutations[idx];
                        if (mutation.attributeName === "class") {
                            updateCssOnPropertyChange(mutation);
                        }
                    }
                }),
                config = { attributes: true, childList: false, characterData: false };

            elements.each(function () {
                observer.observe(this, config);
            });
        } else if (hasMutationEvents) {
            elements.bind("DOMAttrModified", updateCssOnPropertyChange);
        } else {
            elements.each(function () {
                this.attachEvent("onpropertychange", updateCssOnPropertyChange);
            });
        }

    }

    var Validator2 = Validator.extend({
        options: {
            name: 'Validator2',
            errorTemplate: '<div class="k-widget k-tooltip k-tooltip-validation">' +
            '<span class="k-icon k-i-warning"> </span>' +
            '#=message#<div class="k-callout k-callout-n"></div></div>'
        },
        init: function(element, options){
            var inputs = $(element).find("[data-role=autocomplete],[data-role=combobox]," +
                "[data-role=dropdownlist],[data-role=numerictextbox]," +
                "[data-role=datepicker],[data-role=timepicker],[data-role=datetimepicker]," +
                "[data-role=multiselect], [data-role=slider]");

            widgetCssFix(inputs);

            Validator.fn.init.call(this, element, options);
        }
    });

    kendo.ui.plugin(Validator2);
}));
