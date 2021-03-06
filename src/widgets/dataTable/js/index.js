(function(){
    var ui = kendo.ui,
        Widget = ui.Widget;
    var ListView = kendo.ui.ListView;

    var DataTable = ListView.extend({
        options: {
            name: 'DataTable',
            header: null,
            widths: [],
            cls: 'flexbox',
            tableCls: ''
        },
        init: function (element, options) {
            var that = this;

            // 预设 options

            // 从元素内部获取模板(代码段)
            if (options.header == null) {
                options.header = $(element).find('.tpl-header').html();
            }
            if (options.template == null) {
                options.template = $(element).find('.tpl-row').html();
            }

            ListView.fn.init.call(that, element, options);

            this._bindEvents();
        },
        _bindEvents: function () {
            var el = this.element;
            var me = this;
            el.on('click', '.k-hierarchy-cell', function (e) {
                var $target = $(e.currentTarget);
                var $row = $target.closest('tr');
                me.switchRow($row);
            });
        },
        switchRow: function ($row) {
            var detailRow = $row.next('.k-detail-row');
            var colSpan = $row.children('td').length;
            var collapseCls = 'fn-collapse';
            var expandCls = 'fn-expand';

            if (detailRow.length === 0) {
                detailRow = $('<tr class="k-detail-row"><td colspan="' + colSpan + '"></td></tr>');
                detailRow.insertAfter($row);
                this.trigger('detailInit', {
                    detailCell: detailRow.children('td'),
                    data: $row.data()
                })
            }
            if (!$row.hasClass(expandCls)) {
                $row.next('.k-detail-row').show();
                $row.removeClass(collapseCls).addClass(expandCls);
            } else {
                $row.next('.k-detail-row').hide();
                $row.addClass(collapseCls).removeClass(expandCls);
            }
        },
        _element: function () {
            var me = this;
            ListView.fn._element.call(this);
            this.element.addClass('k-datatable').addClass(this.options.cls);

            if (this.options.header) {
                var element = this.element;

                var tableHtml =
                    '<div class="k-datatable-header k-data-inject">' +
                    '<table class="table no-margin">' +
                    '<colgroup></colgroup>' +
                    '<thead></thead>' +
                    '</table>' +
                    '</div>' +
                    '<div class="k-datatable-content grow k-data-inject">' +
                    '<table class="table no-margin">' +
                    '<colgroup></colgroup>' +
                    '<tbody></tbody>' +
                    '</table>' +
                    '</div>';
                element.find('.k-data-inject').remove();
                element.append(tableHtml);
                element.on('click', '.sortable', function (e) {

                    var $target = $(e.currentTarget);
                    var field = $target.attr('data-prop');
                    var dir = 'asc';
                    if ($target.hasClass('asc')) {
                        dir = 'desc';
                    }
                    me.dataSource.sort({
                        field: field,
                        dir: dir
                    });
                    $target.closest('tr').find('.asc, .desc').removeClass('asc desc');
                    $target.addClass(dir);
                })
                element.find('table').addClass(this.options.tableCls);

                var headerHtml = this.options.header.indexOf('<') > -1 ? this.options.header : $('#' + this.options.header).html();
                element.find('.k-datatable-header thead').html(headerHtml);

                var len = $(headerHtml).children('th').length;
                element.find('.k-datatable-header colgroup').html(this._colgroup(this.options.widths, len));

                element.find('.k-datatable-content colgroup').html(this._colgroup(this.options.widths, len));

                this.element = this.element.find('.k-datatable-content tbody');
            }
        },
        // 计算 colgroup 的值
        _colgroup: function (widths, len) {
            len || (len = widths.length);

            var cols = '';
            for (var i = 0; i < len; i++) {
                var $col = $('<col />');
                var width = widths && widths[i];
                if ((widths == null || widths.length === 0) && width == null) {
                    width = (100 / len) + "%";
                }
                width != null && $col.width(width);
                cols += $col.prop('outerHTML');
            }
            return cols;
        },
        _templates: function () {
            ListView.fn._templates.call(this);

            //  this.groupTemplate = kendo.template(options.groupTemplate || "");
        }
    });

    kendo.ui.plugin(DataTable);
})();
