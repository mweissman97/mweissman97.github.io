var sweetshell = [
  'walnut', 'pecan', 'hazelnut', 'cashew', 'macadamia', 'coconut', 'pistachio', 'vanilla', 'cocoa', 'red velvet', 'espresso',
  'orange', 'lime', 'lemon-poppyseed', 'lemon', 'licorice', 'mint', 'blackberry', 'strawberry', 'passion fruit', 'cinnamon',
  'cardamom', 'five-spice', 'ginger', 'green tea', 'marigold', 'lavender', 'rose', 'violet'
]

var savoryshell = [
  'parsley', 'saffron', 'pink peppercorn', 'black pepper', 'ancho chile', 'sesame', 'wasabi'
]

var allshell = [savoryshell, sweetshell]

var ganache = [
  'crunchy cacao nib', 'cinnamon cappuccino with chocolate-cinnamon crunch', 'rose-raspberry', 'chocolate mint',
  'chocolate tarragon', 'green tea and white chocolate', 'white chocolate grapefruit', 'lemon-star anise', 'chai',
  'lapsang souchong with whiskey', 'earl grey', 'cassis-white chocolate', 'crunchy hazelnut gianduja', 'peanut gianduja'
]

var creamy = [
  'vanilla buttercream', 'maple buttercream', 'pistachio buttercream', 'basil buttercream', 'sesame buttercream', 
  'oatmeal cookie buttercream', 'pumpkin-bourbon buttercream', 'gingerbread buttercream', 'orange cream', 'ginger cream',
  'pear cream', 'lemon curd', 'key lime curd', 'popcorn pastry cream', 'passion fruit pastry cream', 
  'cherry-almond pastry cream', 'lemon-almond cream'
]

var caramel = [
  'fleur de sel caramel', 'rosemary caramel', 'blood orange caramel', 'coconut caramel', 'raspberry- white chocolate caramel',
  'apricot-ginger-chocolate caramel', 'creamy dark chocolate caramel'
]

var frozen = [
  'almond ice milk', 'anise ice milk', 'orange buttermilk ice milk', 'fudgesicle', 'honey frozen yogurt', 
  'persimmon ice milk', 'chamomile ice milk'
]

var fruit = [
  'cinnamon apple butter with calvados', 'pumpkin spice butter', 'sour cherry compote', 'ginger honey plum compote',
  'apricot vanilla jam', 'white peach jam', 'lemon marmalade with campari', 'chile pineapple kumquat marmalade',
  'blackberry jelly', 'apricot passion pate de fruit', 'strawberry guava pate de fruit', 'pear pate de fruit'
]

var allfill = [ganache, creamy, caramel, frozen, fruit]

function macaron() {
  var numshell = Math.floor(Math.random() * (sweetshell.length));
  var numfill = Math.floor(Math.random() * (creamy.length));
  document.getElementById('macdisplay').innerHTML = sweetshell[numshell], creamy[numfill];
}
