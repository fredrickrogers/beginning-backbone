window.Router = Backbone.Router.extend({
    
    routes: {
        'products' : 'list',
        'products/add' : 'add',
        'products/:id' : 'product',
        '' : 'list'
    },
    
    list: function() {
        console.log('LIST ALL PRODUCTS');
        var data= [
            {'id': 0, 'name':'PS3', 'price': 200, 'category': 'game consoles'},
            {'id': 1, 'name':'PS4', 'price': 500, 'category': 'game consoles'},
            {'id': 2, 'name':'XBOX 1', 'price': 400, 'category': 'game consoles'},
            {'id': 3, 'name':'XBOX', 'price': 400, 'category': 'game consoles'},
            {'id': 4, 'name':'XBOX 360', 'price': 400, 'category': 'game consoles'},
            {'id': 5, 'name':'XBOX NES', 'price': 400, 'category': 'game consoles'},
        ];
        var products = new Products(data);
        var productsList = new ProductList({collection: products});
        $('.content').html(productsList.render().el);
    },
    
    add: function() {
        var model = new Product();
        var view = new ProductDetails({model:model});
        $('.content').html(view.render().el);
    },
    
    product: function(id) {
        $('.content').html('Product Details');
    }
});

$(document).ready(function() {
   router = new window.Router();
   Backbone.history.start();
});