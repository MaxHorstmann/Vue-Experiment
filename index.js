var app = new Vue({
  el: '#app',
  data: {
    shoppingList: ['Eggs', 'Bacon', 'Bagels'],
    addItem: function() {
    	shoppingList.push('foo');
    }
  }
})