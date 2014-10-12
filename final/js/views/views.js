window.ProductList = Backbone.View.extend({
   tagName: 'ul',
   className: 'products list-unstyled list-inline',
   
   initialize:function() {
       this.collection.on('reset', this.render);
       this.collection.on('add', this.renderProduct)
   },
   
   render:function() {
       this.$el.empty();
       _.each(this.collection.models, function(product){
           this.renderProduct(product);
       }, this);
       return this;
   },
   
   renderProduct: function(product) {
       var view = new window.ProductListItem({model:product});
       this.$el.append(view.render().el);
   }
});

window.ProductListItem = Backbone.View.extend({
    tagName: 'li',
    className: 'product-item',
    template: _.template($("#product-list-item").html()),
   
    initialize: function(){
        this.model.on('change', this.render());
    },
   
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

window.ProductDetails = Backbone.View.extend({
   tagName: 'form',
   className: 'col-md-6',
   template: _.template($("#product-details").html()),
   
   render:function() {
       this.$el.html(this.template(this.model.toJSON()));
       return this;
   }
});