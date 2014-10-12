window.Product = Backbone.Model.extend({
    defaults: {
        id: null,
        name: '',
        price: 0,
        category: ''
    }
});

window.Products = Backbone.Collection.extend({
    model: window.Product, 
});