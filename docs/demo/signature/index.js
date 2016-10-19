var vm = kendo.observable({ img: ['image/png;base64', 'iVBORw0KGgoAAAANSUhEUgAABVQAAAFVCAYAAAAAF2SSAAAgAElEQVR4Xu3dP49cZxnG4fuUNMg00KGkt4RdpKLAqZBoVulIhSO+AB2lnY6WHimmiSiXji4pqChIEHIdIyQkqJJP8CK0AZ04xrlnd+bMOWeuFRV55vy53qfw/pR4pvghQIAAAQIECBAgQIAAAQIECBAgQIAAgUpgqqYMESBAgAABAgQIECBAgAABAgQIECBAgEAEVUtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgAABAgQIECBAgAABAgQIECgFBNUSyhgBAgQIECBAgAABAgQIECBAgAABAgQEVTtAgAABAgQIECBAgAABAgQIECBAgACBUkBQLaGMESBAgAABAgQIECBAgAABAgQIECBAQFC1AwQIECBAgMBuBEby0yRvJvlsSn63mxfzIgQIECBAgAABAgQIrEZAUF3NUXgQAgQIECBA4K4CIxn/vcaU+HPOXUF9ngABAgQIECBAgACBrwn4RcNSECBAgAABApsXGMnTJD9J8paguvnj9AIE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AQIECBAgQIAAAQIECBAoBQTVEsoYAQIECBAgQIAAAQIECBAgQIAAAQIEBFU7QIAAAQIECBAgQIAAAQIECBAgQIAAgVJAUC2hjBEgQIAAAQIECBAgQIAAAQIECBAgQEBQtQMECBAgQIAAAQIECBAgQIAAAQIECBAoBQTVEsoYAQIECBAgQIAAAQIECBAgQIAAAQIEBFU7QIAAAQIECBAgQIAAAQIECBAgQIAAgVJAUC2hjBEgQIAAAQIECBAgQIAAAQIECBAgQEBQtQMECBAgQIAAAQIECBAgQIAAAQIECBAoBQTVEsoYAQIECBAgQIAAAQIECBAgQIAAAQIEBFU7QIAAAQIECBAgQIAAAQIECBAgQIAAgVJAUC2hjBEgQIAAAQIECBAgQIAAAQIECBAgQEBQtQMECBAgQIAAAQIECBAgQIAAAQIECBAoBQTVEsoYAQIECBAgQIAAAQIECBAgQIAAAQIEBFU7QIAAAQIECBAgQIAAAQIECBAgQIAAgVJAUC2hjBEgQIAAAQIECBAgQIAAAQIECBAgQEBQtQMECBAgQIAAAQIECBAgQIAAAQIECBAoBQTVEsoYAQIECBAgQIAAAQIECBAgQIAAAQIEBFU7QIAAAQIECBAgQIAAAQIECBAgQIAAgVJAUC2hjBEgQIAAAQIECBAgQIAAAQIECBAgQEBQtQMECBAgQIAAAQIECBAgQIAAAQIECBAoBQTVEsoYAQIECBAgQIAAAQIECBAgQIAAAQIEBFU7QIAAAQIECBAgQIAAAQIECBAgQIAAgVJAUC2hjBEgQIAAAQIECBAgQIAAAQIECBAgQEBQtQMECBAgQIAAAQIECBAgQIAAAQIECBAoBQTVEsoYAQIECBAgQIAAAQIECBAgQIAAAQIEBFU7QIAAAQIECBAgQIAAAQIECBAgQIAAgVJAUC2hjBEgQIAAAQIECBAgQIAAAQIECBAgQEBQtQMECBAgQIAAAQIECBAgQIAAAQIECBAoBQTVEsoYAQIECBAgQIAAAQIECBAgQIAAAQIEBFU7QIAAAQIECBAgQIAAAQIECBAgQIAAgVJAUC2hjBEgQIAAAQIECBAgQIAAAQIECBAgQEBQtQMECBAgQIAAAQIECBAgQIAAAQIECBAoBQTVEsoYAQIECBAgQIAAAQIECBAgQIAAAQIEBFU7QIAAAQIECBAgQIAAAQIE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QEBQtQMECBAgQIAAAQIECBAgQIAAAQIECBAoBQTVEsoYAQIECBAgQIAAAQIECBAgQIAAAQIEBFU7QIAAAQIECBAgQIAAAQIECBAgQIAAgVJAUC2hjBEgQIAAAQIECBAgQIAAAQIECBAgQEBQtQMECBAgQIAAAQIECBAgQIAAAQIECBAoBQTVEsoYAQIECBAgQIAAAQIECBAgQIAAAQIEBFU7QIAAAQIECBAgQIAAAQIECBAgQIAAgVJAUC2hjBEgQIAAAQIECBAgQIAAAQIECBAgQEBQtQMECBAgQIAAAQIECBAgQIAAAQIECBAoBQTVEsoYAQIECBAgQIAAAQIECBAgQIAAAQIEBFU7QIAAAQIECBAgQIAAAQIECBAgQIAAgVJAUC2hjBEgQIAAAQIECBAgQIAAAQIECBAgQEBQtQMECBAgQIAAAQIECBAgQIAAAQIECBAoBQTVEsoYAQIECBAgQIAAAQIECBAgQIAAAQIEBFU7QIAAAQIECBAgQIAAAQIECBAgQIAAgVJAUC2hjBEgQIAAAQIECBAgQIAAAQIECBAgQEBQtQMECBAgQIAAAQIECBAgQIAAAQIECBAoBQTVEsoYAQIECBAgQIAAAQIECBAgQIAAAQIEBFU7QIAAAQIECBAgQIAAAQIECBAgQIAAgVJAUC2hjBEgQIAAAQIECBAgQIAAAQIECBAgQEBQtQMECBAgQIAAAQIECBAgQIAAAQIECBAoBQTVEsoYAQIECBAgQIAAAQIECBAgQIAAAQIEBFU7QIAAAQIECBAgQIAAAQIECBAgQIAAgVJAUC2hjBEgQIAAAQIECBAgQIAAAQIECBAgQEBQtQMECBAgQIAAAQIECBAgQIAAAQIECBAoBQTVEsoYAQIECBAgQIAAAQIECBAgQIAAAQIEBFU7QIAAAQIECBAgQIAAAQIECBAgQIAAgVJAUC2hjBEgQIAAAQIECBAgQIAAAQIECBAgQEBQtQMECBAgQIAAAQIECBAgQIAAAQIECBAoBQTVEsoYAQIECBAgQIAAAQIECBAgQIAAAQIEBFU7QIAAAQIECBAgQIAAAQIECBAgQIAAgVJAUC2hjBEgQIAAAQIECBAgQIAAAQIECBAgQEBQtQMECBAgQIAAAQIECBAgQIAAAQIECBAoBQTVEsoYAQIECBAgQIAAAQIECBAgQIAAAQIE/g3hm6ZWZ1M6wgAAAABJRU5ErkJggg=='] });
kendo.bind($('body'), vm);
$('#getData').on('click', function () {
    var inst = kendo.widgetInstance($('[data-role=signature]'));
    console.log(vm.get('img').toJSON());
});