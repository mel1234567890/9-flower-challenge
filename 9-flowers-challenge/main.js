
var drawing = SVG('drawing-area');

var drawflower=function(x,y){
    var flowergroup=drawing.group()
    .center(x,y)


drawing
  .ellipse(100, 100)
  .stroke('green')
  .fill('green')
  .center(200, 200)
  .addTo(flowergroup)
  .rotate(45);
drawing
.ellipse(100,100)
.center(200,120)
.addTo(flowergroup);
                                     
drawing
.ellipse(100,100)
.center(294,179)
.addTo(flowergroup);
                                     
drawing
.ellipse(100,100)
.center(205,279)
.addTo(flowergroup);
                                     
drawing
.ellipse(100,100)
.center(128,198)
.addTo(flowergroup);
                                     
drawing
.rect(45,183)
.center(203,400)
.fill('green')
.addTo(flowergroup);
}
drawflower(100, 200);

drawflower(300,400)
drawflower(50,)
