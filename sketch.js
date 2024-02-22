let k=0;

function setup() {
 // put setup code here
  createCanvas(800,800);
}


function draw() {
  background("DodgerBlue");

  //Objek Bagian Kiri

  // Head
  fill(255, 209, 220);
  ellipse(200, 200, 200, 200);
  
  // Ears
  fill(255, 209, 220);
  ellipse(130, 140, 80, 80);
  ellipse(270, 140, 80, 80);
  
  // Eyes
  fill(0);
  ellipse(160, 180, 50, 60);
  ellipse(240, 180, 50, 60);
  fill(255);
  ellipse(170, 180, 20, 20);
  ellipse(250, 180, 20, 20);
  
  // Nose
  fill(255, 102, 139);
  triangle(200, 200, 190, 220, 210, 220);
  
  
  // Whiskers
  stroke(0);
  line(170, 220, 120, 200);
  line(170, 220, 140, 240);
  line(230, 220, 280, 200);
  line(230, 220, 260, 240);
  
  // Mouth
  
  stroke(0);
  arc(200, 240, 80, 60, 0, PI);
  arc(500, 240, 80, 60, 0, PI);

  //Objek Bergerak Bagian Kanan
  fill(255, 209, 220);
  ellipse(500, 200, 200, 200);

  // Ears
  fill(255, 209, 220);
  ellipse(575, 140, 80, 80);
  ellipse(430, 140, 80, 80);

   // Eyes
   fill(0);
   ellipse(545, 180, 50, 60);
   ellipse(465, 180, 50, 60);
   fill(255);
   var x = 555 + 5*Math.sin(PI/60*k)
   k +=1;
   ellipse(x, 180, 20, 20);
   var x = 475 + 5*Math.sin(PI/60*k)
   k +=1;
   ellipse(x, 180, 20, 20);

   // Nose
  fill(255, 102, 139);
  
  

}


