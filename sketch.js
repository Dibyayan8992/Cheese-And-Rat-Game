const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvas
var mouse
var mouse_down,mouse_img2,mouse_left,mouse_right,mouse_still,mouse_up
var capsule_img
var score=0
var life_img,life
function preload()
{
	mouse_up   = loadAnimation("1.png","2.png","3.png","4.png","5.png")
	mouse_down   = loadAnimation("d1.png","d2.png","d3.png","d4.png","d5.png")
	mouse_right   = loadAnimation("r1.png","r2.png","r3.png","r4.png","r5.png")
	mouse_left     = loadAnimation("l1.png","l2.png","l3.png","l4.png","l5.png")
	mouse_img2= loadAnimation("1.png","1.png")
	capsule_img=loadImage("capsule.png")
	cheese_img=loadImage("cheese.png")
	life_img = loadImage("life.png")
	bullet_img = loadImage("bullet.png");
	bullet1_img = loadImage("bullet1.png");
	bullet2_img = loadImage("bullet2.png");
	bullet3_img = loadImage("bullet3.png");
	
}

function setup() {
   canvas =	createCanvas(displayWidth,displayHeight-200);

	engine = Engine.create();
	world = engine.world;

	wall = createSprite(displayWidth/2,2,displayWidth,10);
	wall.shapeColor="red"
	wall2 = createSprite(displayWidth/4-15,650,displayWidth/2-15,10);
	wall2.shapeColor="red"
	wall3 = createSprite(displayWidth-320,650,displayWidth/2-15,10);
	wall3.shapeColor="red"
	wall4 = createSprite(750,630,10,50);
	wall4.shapeColor="red"
	wall5 = createSprite(840,630,10,50);
	wall5.shapeColor="red"
 //START GAME LETTER
	wall6 = createSprite(displayWidth/4-20,300,10,200);
	wall6.shapeColor="darkorange"
	wall7 = createSprite(displayWidth/4+50,200,150,10);
	wall7.shapeColor="darkorange"
	wall8 = createSprite(displayWidth/4+50,400,150,10);
	wall8.shapeColor="darkorange"
	wall9 = createSprite(displayWidth/4+125,355,10,100);
	wall9.shapeColor="darkorange"

	wall10 = createSprite(displayWidth/4+200,300,10,200);
	wall10.shapeColor=" darkmagenta"
	wall11 = createSprite(displayWidth/4+270,200,150,10);
	wall11.shapeColor=" darkmagenta"
	wall12 = createSprite(displayWidth/4+270,300,150,10);
	wall12.shapeColor=" darkmagenta"
	wall13= createSprite(displayWidth/4+340,300,10,200);
	wall13.shapeColor=" darkmagenta"

	wall14 = createSprite(displayWidth/4+400,300,10,200);
	wall14.shapeColor="green"
	wall15 = createSprite(displayWidth/4+470,200,150,10);
	wall15.shapeColor="green"
	wall16 = createSprite(displayWidth/4+475,250,10,100);
	wall16.shapeColor="green"
	wall17= createSprite(displayWidth/4+540,300,10,200);
	wall17.shapeColor="green"

	wall18 = createSprite(displayWidth/4+600,300,10,200);
	wall18.shapeColor="blue"
	wall19 = createSprite(displayWidth/4+670,200,150,10);
	wall19.shapeColor=" blue"
	wall20 = createSprite(displayWidth/4+675,300,150,10);
	wall20.shapeColor=" blue"
	wall21 = createSprite(displayWidth/4+670,400,150,10);
	wall21.shapeColor=" blue"
//END GAME LETTER
    wall22 = createSprite(displayWidth/8-190,2,10,displayWidth);
	wall22.shapeColor="red"
	wall23 = createSprite(displayWidth,2,10,displayWidth);
	wall23.shapeColor="red"

	capsule=createSprite(20,200,20,20);
	capsule.addImage("capsule",capsule_img)
	capsule.scale=0.5
	capsule2=createSprite(1520,210,20,20);
	capsule2.addImage("capsule",capsule_img)
	capsule2.scale=0.5
	capsule3=createSprite(20,500,20,20);
	capsule3.addImage("capsule",capsule_img)
	capsule3.scale=0.5
	capsule4=createSprite(1520,510,20,20);
	capsule4.addImage("capsule",capsule_img)
	capsule4.scale=0.5

	//Cheese
	//1
	cheese =  createSprite(35,30)
	cheese2 =  createSprite(95,30)
	cheese3 =  createSprite(155,30)
	cheese4=  createSprite(215,30)
	cheese5 =  createSprite(275,30)
	cheese6 =  createSprite(335,30) 
	cheese7 =  createSprite(395,30)
	cheese8 =  createSprite(455,30)
	cheese9 =  createSprite(515,30)
	cheese10 =  createSprite(575,30)
	cheese11=  createSprite(635,30)
	cheese12=  createSprite(695,30)
	cheese13 =  createSprite(755,30)
	cheese14 =  createSprite(815,30)
	cheese15 =  createSprite(875,30)
	cheese16 =  createSprite(935,30)
	cheese17 =  createSprite(995,30)
	cheese18=  createSprite(1055,30)
	cheese19=  createSprite(1115,30)
	cheese20 =  createSprite(1175,30)
	cheese21=  createSprite(1235,30)
	cheese22=  createSprite(1295,30)
	cheese23=  createSprite(1355,30)
	cheese24=  createSprite(1415,30)
	cheese25 =  createSprite(1475,30)
cheese .addImage("img",cheese_img)
cheese2.addImage("img",cheese_img)
cheese3.addImage("img",cheese_img)
cheese4.addImage("img",cheese_img)
cheese5.addImage("img",cheese_img)
cheese6.addImage("img",cheese_img)
cheese7.addImage("img",cheese_img)
cheese8.addImage("img",cheese_img)
cheese9.addImage("img",cheese_img)
cheese10.addImage("img",cheese_img)
cheese11.addImage("img",cheese_img)
cheese12.addImage("img",cheese_img)
cheese13.addImage("img",cheese_img)
cheese14.addImage("img",cheese_img)
cheese15.addImage("img",cheese_img)
cheese16.addImage("img",cheese_img)
cheese17.addImage("img",cheese_img)
cheese18.addImage("img",cheese_img)
cheese19.addImage("img",cheese_img)
cheese20.addImage("img",cheese_img)
cheese21.addImage("img",cheese_img)
cheese22.addImage("img",cheese_img)
cheese23.addImage("img",cheese_img)
cheese24.addImage("img",cheese_img)
cheese25.addImage("img",cheese_img)
cheese.scale=0.2
cheese2.scale=0.2
cheese3.scale=0.2
cheese4.scale=0.2
cheese5.scale=0.2
cheese6.scale=0.2
cheese7.scale=0.2
cheese8.scale=0.2
cheese9.scale=0.2
cheese10.scale=0.2
cheese11.scale=0.2
cheese12.scale=0.2
cheese13.scale=0.2
cheese14.scale=0.2
cheese15.scale=0.2
cheese16.scale=0.2
cheese17.scale=0.2
cheese18.scale=0.2
cheese19.scale=0.2
cheese20.scale=0.2
cheese21.scale=0.2
cheese22.scale=0.2
cheese23.scale=0.2
cheese24.scale=0.2
cheese25.scale=0.2
	
    //Cheese
	//2
	cheese26 = createSprite(35,95)
	cheese26.addImage("img2",cheese_img)
	cheese27 = createSprite(95,95)
	cheese27.addImage("img2",cheese_img)
	cheese28 = createSprite(155,95)
	cheese28.addImage("img2",cheese_img)
	cheese29= createSprite(215,95)
	cheese29.addImage("img2",cheese_img)
	cheese30 = createSprite(275,95)
	cheese30.addImage("img2",cheese_img)
	cheese31 = createSprite(335,95)
	cheese31.addImage("img2",cheese_img)
	cheese32 = createSprite(395,95)
	cheese32.addImage("img2",cheese_img)
	cheese33 = createSprite(455,95)
	cheese33.addImage("img2",cheese_img)
	cheese34 = createSprite(515,95)
	cheese34.addImage("img2",cheese_img)
	cheese35 = createSprite(575,95)
	cheese35.addImage("img2",cheese_img)
	cheese36= createSprite(635,95)
	cheese36.addImage("img2",cheese_img)
	cheese37= createSprite(695,95)
	cheese37.addImage("img2",cheese_img)
	cheese38 = createSprite(755,95)
	cheese38.addImage("img2",cheese_img)
	cheese39 = createSprite(815,95)
	cheese39.addImage("img2",cheese_img)
	cheese40 = createSprite(875,95)
	cheese40.addImage("img2",cheese_img)
	cheese41 = createSprite(935,95)
	cheese41.addImage("img2",cheese_img)
	cheese42 = createSprite(995,95)
	cheese42.addImage("img2",cheese_img)
	cheese43= createSprite(1055,95)
	cheese43.addImage("img2",cheese_img)
	cheese44= createSprite(1115,95)
	cheese44.addImage("img2",cheese_img)
	cheese45 = createSprite(1175,95)
	cheese45.addImage("img2",cheese_img)
	cheese46= createSprite(1235,95)
	cheese46.addImage("img2",cheese_img)
	cheese47= createSprite(1295,95)
	cheese47.addImage("img2",cheese_img)
	cheese48= createSprite(1355,95)
	cheese48.addImage("img2",cheese_img)
	cheese49= createSprite(1435,95)
	cheese49.addImage("img2",cheese_img)
	cheese50= createSprite(1495,95)
	cheese50.addImage("img2",cheese_img)
	cheese26
cheese26.scale=0.2
cheese27.scale=0.2
cheese28.scale=0.2
cheese29.scale=0.2
cheese30.scale=0.2
cheese31.scale=0.2
cheese32.scale=0.2
cheese33.scale=0.2
cheese34.scale=0.2
cheese35.scale=0.2
cheese36.scale=0.2
cheese37.scale=0.2
cheese38.scale=0.2
cheese39.scale=0.2
cheese40.scale=0.2
cheese41.scale=0.2
cheese42.scale=0.2
cheese43.scale=0.2
cheese43.scale=0.2
cheese44.scale=0.2
cheese45.scale=0.2
cheese46.scale=0.2
cheese47.scale=0.2
cheese48.scale=0.2
cheese49.scale=0.2
cheese50.scale=0.2

	//3
	cheese51 = createSprite(35,155)
	cheese51.addImage("img3",cheese_img)
	cheese52 = createSprite(95,155)
	cheese52.addImage("img3",cheese_img)
	cheese53 = createSprite(155,155)
	cheese53.addImage("img3",cheese_img)
	cheese54= createSprite(215,155)
	cheese54.addImage("img3",cheese_img)
	cheese55 = createSprite(275,155)
	cheese55.addImage("img3",cheese_img)
	cheese56 = createSprite(335,155)
	cheese56.addImage("img3",cheese_img)
	cheese57 = createSprite(395,155)
	cheese57.addImage("img3",cheese_img)
	cheese58 = createSprite(455,155)
	cheese58.addImage("img3",cheese_img)
	cheese59 = createSprite(515,155)
	cheese59.addImage("img3",cheese_img)
	cheese60 = createSprite(575,155)
	cheese60.addImage("img3",cheese_img)
	cheese61= createSprite(635,155)
	cheese61.addImage("img3",cheese_img)
	cheese62= createSprite(695,155)
	cheese62.addImage("img3",cheese_img)
	cheese63 = createSprite(755,155)
	cheese63.addImage("img3",cheese_img)
	cheese64 = createSprite(815,155)
	cheese64.addImage("img3",cheese_img)
	cheese65 = createSprite(875,155)
	cheese65.addImage("img3",cheese_img)
	cheese66 = createSprite(935,155)
	cheese66.addImage("img3",cheese_img)
	cheese67 = createSprite(995,155)
	cheese67.addImage("img3",cheese_img)
	cheese68= createSprite(1055,155)
	cheese68.addImage("img3",cheese_img)
	cheese69= createSprite(1115,155)
	cheese69.addImage("img3",cheese_img)
	cheese70 = createSprite(1175,155)
	cheese70.addImage("img3",cheese_img)
	cheese71= createSprite(1235,155)
	cheese71.addImage("img3",cheese_img)
	cheese72= createSprite(1295,155)
	cheese72.addImage("img3",cheese_img)
	cheese73= createSprite(1355,155)
	cheese73.addImage("img3",cheese_img)
	cheese74= createSprite(1415,155)
	cheese74.addImage("img3",cheese_img)
	cheese75 = createSprite(1475,155)
	cheese75.addImage("img3",cheese_img)
cheese51.scale=0.2
cheese52.scale=0.2
cheese53.scale=0.2
cheese54.scale=0.2
cheese55.scale=0.2
cheese56.scale=0.2
cheese57.scale=0.2
cheese58.scale=0.2
cheese59.scale=0.2
cheese60.scale=0.2
cheese61.scale=0.2
cheese62.scale=0.2
cheese63.scale=0.2
cheese64.scale=0.2
cheese65.scale=0.2
cheese66.scale=0.2
cheese67.scale=0.2
cheese68.scale=0.2
cheese69.scale=0.2
cheese70.scale=0.2
cheese71.scale=0.2
cheese72.scale=0.2
cheese73.scale=0.2
cheese74.scale=0.2
cheese75.scale=0.2

	//4
	cheese77 = createSprite(90,215)
	cheese77.addImage("img3",cheese_img)
	cheese78 = createSprite(150,215)
	cheese78.addImage("img3",cheese_img)
	cheese79= createSprite(210,215)
	cheese79.addImage("img3",cheese_img)
	cheese80 = createSprite(270,215)
	cheese80.addImage("img3",cheese_img)
	cheese81 = createSprite(330,215)
	cheese81.addImage("img3",cheese_img)
	cheese84 = createSprite(545,215)
	cheese84.addImage("img3",cheese_img)
	cheese88 = createSprite(755,215)
	cheese88.addImage("img3",cheese_img)
	cheese91 = createSprite(955,215)
	cheese91.addImage("img3",cheese_img)
	cheese95= createSprite(1170,215)
	cheese95.addImage("img3",cheese_img)
	cheese96= createSprite(1230,215)
	cheese96.addImage("img3",cheese_img)
	cheese97= createSprite(1290,215)
	cheese97.addImage("img3",cheese_img)
	cheese98= createSprite(1350,215)
	cheese98.addImage("img3",cheese_img)
	cheese99= createSprite(1410,215)
	cheese99.addImage("img3",cheese_img)
	cheese100= createSprite(1470,215)
	cheese100.addImage("img3",cheese_img)
	cheese77.scale=0.2
	cheese78.scale=0.2
	cheese79.scale=0.2
	cheese80.scale=0.2
	cheese81.scale=0.2
	cheese84.scale=0.2
	cheese88.scale=0.2
	cheese91.scale=0.2
	cheese95.scale=0.2
	cheese96.scale=0.2
	cheese97.scale=0.2
	cheese98.scale=0.2
	cheese99.scale=0.2
	cheese100.scale=0.2

	//5
	cheese101f = createSprite(30,275)
	cheese101f.addImage("image",cheese_img)
	cheese101 = createSprite(90,275)
	cheese101.addImage("image",cheese_img)
	cheese102= createSprite(150,275)
	cheese102.addImage("image",cheese_img)
	cheese103= createSprite(210,275)
	cheese103.addImage("image",cheese_img)
	cheese104 = createSprite(270,275)
	cheese104.addImage("image",cheese_img)
	cheese105= createSprite(330,275)
	cheese105.addImage("image",cheese_img)
	cheese106= createSprite(545,275)
	cheese106.addImage("image",cheese_img)
	cheese107	= createSprite(755,275)
	cheese107.addImage("image",cheese_img)
	cheese107b= createSprite(400,275)
	cheese107b.addImage("image",cheese_img)
	cheese108b= createSprite(475,275)
	cheese108b.addImage("image",cheese_img)
	cheese109b= createSprite(820,275)
	cheese109b.addImage("image",cheese_img)
	cheese110b= createSprite(890,275)
	cheese110b.addImage("image",cheese_img)
	cheese111b= createSprite(1015,275)
	cheese111b.addImage("image",cheese_img)
	cheese112b= createSprite(1080,275)
	cheese112b.addImage("image",cheese_img)
	cheese108= createSprite(955,275)
	cheese108.addImage("image",cheese_img)
	cheese109= createSprite(1170,275)
	cheese109.addImage("image",cheese_img)
	cheese110= createSprite(1230,275)
	cheese110.addImage("image",cheese_img)
	cheese111= createSprite(1290,275)
	cheese111.addImage("image",cheese_img)
	cheese112= createSprite(1350,275)
	cheese112.addImage("image",cheese_img)
	cheese113 =createSprite(1410,275)
	cheese113.addImage("image",cheese_img)
	cheese114= createSprite(1470,275)
	cheese114.addImage("image",cheese_img)

cheese101f.scale=0.2
cheese101.scale=0.2
cheese102.scale=0.2
cheese103.scale=0.2
cheese104.scale=0.2
cheese105.scale=0.2
cheese106.scale=0.2
cheese107.scale=0.2
cheese107b.scale=0.2
cheese108b.scale=0.2
cheese109b.scale=0.2
cheese110b.scale=0.2
cheese111b.scale=0.2
cheese112b.scale=0.2
cheese108.scale=0.2
cheese109.scale=0.2
cheese110.scale=0.2
cheese111.scale=0.2
cheese112.scale=0.2
cheese113.scale=0.2
cheese114.scale=0.2

	//6
	cheese115f = createSprite(30,335)
	cheese115f.addImage("image",cheese_img)
	cheese115 = createSprite(90,335)
	cheese115.addImage("image",cheese_img)
	cheese116= createSprite(150,335)
	cheese116.addImage("image",cheese_img)
	cheese117= createSprite(210,335)
	cheese117.addImage("image",cheese_img)
	cheese118 = createSprite(270,335)
	cheese118.addImage("image",cheese_img)
	cheese119= createSprite(330,335)
	cheese119.addImage("image",cheese_img)
	cheese120= createSprite(545,335)
	cheese120.addImage("image",cheese_img)
	cheese121	= createSprite(755,335)
	cheese121.addImage("image",cheese_img)
	cheese122= createSprite(400,335)
	cheese122.addImage("image",cheese_img)
	cheese123= createSprite(475,335)
	cheese123.addImage("image",cheese_img)
	cheese124= createSprite(820,335)
	cheese124.addImage("image",cheese_img)
	cheese125= createSprite(890,335)
	cheese125.addImage("image",cheese_img)
	cheese126= createSprite(1015,335)
	cheese126.addImage("image",cheese_img)
	cheese127= createSprite(1080,335)
	cheese127.addImage("image",cheese_img)
	cheese128= createSprite(955,335)
	cheese128.addImage("image",cheese_img)
	cheese129= createSprite(1170,335)
	cheese129.addImage("image",cheese_img)
	cheese130= createSprite(1230,335)
	cheese130.addImage("image",cheese_img)
	cheese131= createSprite(1290,335)
	cheese131.addImage("image",cheese_img)
	cheese132= createSprite(1350,335)
	cheese132.addImage("image",cheese_img)
	cheese133 =createSprite(1410,335)
	cheese133.addImage("image",cheese_img)
	cheese134= createSprite(1470,335)
	cheese134.addImage("image",cheese_img)

cheese115f.scale=0.2
cheese115 .scale=0.2
cheese116.scale=0.2
cheese117.scale=0.2
cheese118 .scale=0.2
cheese119.scale=0.2
cheese120.scale=0.2
cheese121	.scale=0.2
cheese122.scale=0.2
cheese123.scale=0.2
cheese124.scale=0.2
cheese125.scale=0.2
cheese126.scale=0.2
cheese127.scale=0.2
cheese128.scale=0.2
cheese129.scale=0.2
cheese130.scale=0.2
cheese131.scale=0.2
cheese132.scale=0.2
cheese133 .scale=0.2
cheese134.scale=0.2

	//7
	cheese135f = createSprite(30,395)
	cheese135f.addImage("image",cheese_img)
	cheese135 = createSprite(90,395)
	cheese135.addImage("image",cheese_img)
	cheese136= createSprite(150,395)
	cheese136.addImage("image",cheese_img)
	cheese137= createSprite(210,395)
	cheese137.addImage("image",cheese_img)
	cheese138 = createSprite(270,395)
	cheese138.addImage("image",cheese_img)
	cheese139= createSprite(330,395)
	cheese139.addImage("image",cheese_img)
	cheese140 = createSprite(545,395)
	cheese140.addImage("image",cheese_img)
	cheese141b= createSprite(610,395)
	cheese141b.addImage("image",cheese_img)
	cheese142b= createSprite(690,395)
	cheese142b.addImage("image",cheese_img)
	cheese141= createSprite(755,395)
	cheese141.addImage("image",cheese_img)
	cheese143b= createSprite(820,395)
	cheese143b.addImage("image",cheese_img)
	cheese144b= createSprite(890,395)
	cheese144b.addImage("image",cheese_img)
	cheese142 = createSprite(955,395)
	cheese142.addImage("image",cheese_img)
	cheese143= createSprite(1170,395)
	cheese143.addImage("image",cheese_img)
	cheese144= createSprite(1230,395)
	cheese144.addImage("image",cheese_img)
	cheese145= createSprite(1290,395)
	cheese145.addImage("image",cheese_img)
	cheese146= createSprite(1350,395)
	cheese146.addImage("image",cheese_img)
	cheese147= createSprite(1410,395)
	cheese147.addImage("image",cheese_img)
	cheese148= createSprite(1470,395)
	cheese148.addImage("image",cheese_img)
cheese135f.scale=0.2
cheese135 .scale=0.2
cheese136.scale=0.2
cheese137.scale=0.2
cheese138 .scale=0.2
cheese139.scale=0.2
cheese140 .scale=0.2
cheese141b.scale=0.2
cheese142b.scale=0.2
cheese141.scale=0.2
cheese143b.scale=0.2
cheese144b.scale=0.2
cheese142 .scale=0.2
cheese143.scale=0.2
cheese144.scale=0.2
cheese145.scale=0.2
cheese146.scale=0.2
cheese147.scale=0.2
cheese148.scale=0.2

	//8
	cheese149 = createSprite(35,455)
	cheese149.addImage("image",cheese_img)
	cheese150 = createSprite(95,455)
	cheese150.addImage("image",cheese_img)
	cheese151 = createSprite(155,455)
	cheese151.addImage("image",cheese_img)
	cheese152= createSprite(215,455)
	cheese152.addImage("image",cheese_img)
	cheese153 = createSprite(275,455)
	cheese153.addImage("image",cheese_img)
	cheese154 = createSprite(335,455)
	cheese154.addImage("image",cheese_img)
	cheese155= createSprite(395,455)
	cheese155.addImage("image",cheese_img)
	cheese156= createSprite(455,455)
	cheese156.addImage("image",cheese_img)
	cheese157= createSprite(515,455)
	cheese157.addImage("image",cheese_img)
	cheese158 = createSprite(575,455)
	cheese158.addImage("image",cheese_img)
	cheese159= createSprite(635,455)
	cheese159.addImage("image",cheese_img)
	cheese160= createSprite(695,455)
	cheese160.addImage("image",cheese_img)
	cheese161 = createSprite(755,455)
	cheese161.addImage("image",cheese_img)
	cheese162 = createSprite(815,455)
	cheese162.addImage("image",cheese_img)
	cheese163 = createSprite(875,455)
	cheese163.addImage("image",cheese_img)
	cheese164= createSprite(935,455)
	cheese164.addImage("image",cheese_img)
	cheese165 = createSprite(995,455)
	cheese165.addImage("image",cheese_img)
	cheese166= createSprite(1055,455)
	cheese166.addImage("image",cheese_img)
	cheese167= createSprite(1115,455)
	cheese167.addImage("image",cheese_img)
	cheese168 = createSprite(1175,455)
	cheese168.addImage("image",cheese_img)
	cheese169= createSprite(1235,455)
	cheese169.addImage("image",cheese_img)
	cheese170= createSprite(1295,455)
	cheese170.addImage("image",cheese_img)
	cheese171= createSprite(1355,455)
	cheese171.addImage("image",cheese_img)
	cheese172= createSprite(1415,455)
	cheese172.addImage("image",cheese_img)
	cheese173 = createSprite(1475,455)
	cheese173.addImage("image",cheese_img)
cheese149.scale=0.2
cheese150.scale=0.2
cheese151.scale=0.2
cheese152.scale=0.2
cheese153.scale=0.2
cheese154.scale=0.2
cheese155.scale=0.2
cheese156.scale=0.2
cheese157.scale=0.2
cheese158.scale=0.2
cheese159.scale=0.2
cheese160.scale=0.2
cheese161.scale=0.2
cheese162.scale=0.2
cheese163.scale=0.2
cheese164.scale=0.2
cheese165.scale=0.2
cheese166.scale=0.2
cheese167.scale=0.2
cheese168.scale=0.2
cheese169.scale=0.2
cheese170.scale=0.2
cheese171.scale=0.2
cheese172.scale=0.2
cheese173.scale=0.2
	//9
	
	cheese175 = createSprite(95,515)
	cheese175.addImage("image",cheese_img)
	cheese176 = createSprite(155,515)
	cheese176.addImage("image",cheese_img)
	cheese177= createSprite(215,515)
	cheese177.addImage("image",cheese_img)
	cheese178 = createSprite(275,515)
	cheese178.addImage("image",cheese_img)
	cheese179= createSprite(335,515)
	cheese179.addImage("image",cheese_img)
	cheese180= createSprite(395,515)
	cheese180.addImage("image",cheese_img)
	cheese181 = createSprite(455,515)
	cheese181.addImage("image",cheese_img)
	cheese182 = createSprite(515,515)
	cheese182.addImage("image",cheese_img)
	cheese183 = createSprite(575,515)
	cheese183.addImage("image",cheese_img)
	cheese184= createSprite(635,515)
	cheese184.addImage("image",cheese_img)
	cheese185= createSprite(695,515)
	cheese185.addImage("image",cheese_img)
	cheese186 = createSprite(755,515)
	cheese186.addImage("image",cheese_img)
	cheese187 = createSprite(815,515)
	cheese187.addImage("image",cheese_img)
	cheese188 = createSprite(875,515)
	cheese188.addImage("image",cheese_img)
	cheese189 = createSprite(935,515)
	cheese189.addImage("image",cheese_img)
	cheese190= createSprite(995,515)
	cheese190.addImage("image",cheese_img)
	cheese191= createSprite(1055,515)
	cheese191.addImage("image",cheese_img)
	cheese192= createSprite(1115,515)
	cheese192.addImage("image",cheese_img)
	cheese193= createSprite(1175,515)
	cheese193.addImage("image",cheese_img)
	cheese194= createSprite(1235,515)
	cheese194.addImage("image",cheese_img)
	cheese195= createSprite(1295,515)
	cheese195.addImage("image",cheese_img)
	cheese196= createSprite(1355,515)
	cheese196.addImage("image",cheese_img)
	cheese197= createSprite(1415,515)
	cheese197.addImage("image",cheese_img)
	cheese198 = createSprite(1475,515)
	cheese198.addImage("image",cheese_img)
cheese175.scale=0.2
cheese176.scale=0.2
cheese177.scale=0.2
cheese178.scale=0.2
cheese179.scale=0.2
cheese180.scale=0.2
cheese181.scale=0.2
cheese182.scale=0.2
cheese183.scale=0.2
cheese184.scale=0.2
cheese185.scale=0.2
cheese186.scale=0.2
cheese187.scale=0.2
cheese188.scale=0.2
cheese189.scale=0.2
cheese190.scale=0.2
cheese191.scale=0.2
cheese192.scale=0.2
cheese193.scale=0.2
cheese194.scale=0.2
cheese195.scale=0.2
cheese196.scale=0.2
cheese197.scale=0.2
cheese198.scale=0.2
	
    mouse = createSprite(798,660,20,20)
	mouse.scale=0.30
	mouse.addAnimation("mouse_still",mouse_img2)
	mouse.addAnimation("mouseu",mouse_up)
	mouse.addAnimation("moused",mouse_down)
	mouse.addAnimation("mouser",mouse_right)
	mouse.addAnimation("mousel",mouse_left)

	life = createSprite(200,590)
	life.addImage("img",life_img)
	life.scale=0.35
	life2 = createSprite(340,590)
	life2.addImage("img",life_img)
	life2.scale=0.35
	Engine.run(engine);

	bullet = createSprite(displayWidth/9-200,displayHeight/10-50);
	bullet.addImage("img",bullet1_img)
	bullet.scale=0.13

	bullet2 = createSprite(1550,displayHeight/6);
	bullet2.addImage("img",bullet_img)
	bullet2.scale=0.13
	
	bullet3 = createSprite(displayWidth/9-200,displayHeight/3);
	bullet3.addImage("img",bullet1_img)
	bullet3.scale=0.13
	
	bullet4 = createSprite(1550,displayHeight/2);
	bullet4.addImage("img",bullet_img)
	bullet4.scale=0.13
	
	bullet5 = createSprite(displayWidth/2,displayHeight);
	bullet5.addImage("img",bullet2_img)
	bullet5.scale=0.13
	
	bullet6 = createSprite(displayWidth/4,displayHeight/8-200);
	bullet6.addImage("img",bullet3_img)
	bullet6.scale=0.13

	bullet7 = createSprite(displayWidth/1.5,displayHeight/8-200);
	bullet7.addImage("img",bullet3_img)
	bullet7.scale=0.13
	
}

function draw() {

  rectMode(CENTER);
  Engine.update(engine)
  background(255);
 
  textSize(24)
  fill(245,015,654)
  stroke(245,578,15)
  text("Score: "+score,750,600)
  text("Use Arrow Keys To Move",470,630)
  text("Collect All The Cheese And Get 199 Points To Win",850,630)

  console.log(bullet2.x)

 if(bullet.x>1550){
	  bullet.x=displayWidth/9-200
  }
 if(bullet2.x<0){
	bullet2.x=1550
}
if(bullet3.x>1550){
	bullet3.x=displayWidth/9-200
}
if(bullet4.x<0){
	bullet4.x=1550
}
if(bullet5.y<0){
	bullet5.y=displayHeight
}
if(bullet6.y>displayHeight){
	bullet6.y=displayHeight/8-200
}
if(bullet7.y>displayHeight){
	bullet7.y=displayHeight/8-200
}

  mouseControl();
  mouseCollide();
  mouseTouchingCheese();
  settingCollider();
 //debugsprite(); 
  drawSprites();
 
}

function debugsprite(){
mouse.debug=true
cheese.debug=true
cheese2.debug=true
cheese3.debug=true
cheese4.debug=true
cheese5.debug=true
cheese6.debug=true
cheese7.debug=true
cheese8.debug=true
cheese9.debug=true
cheese10.debug=true
cheese11.debug=true
cheese12.debug=true
cheese13.debug=true
cheese14.debug=true
cheese15.debug=true
cheese16.debug=true
cheese17.debug=true
cheese18.debug=true
cheese19.debug=true
cheese20.debug=true
cheese21.debug=true
cheese22.debug=true
cheese23.debug=true
cheese24.debug=true
cheese25.debug=true
cheese26.debug=true
cheese27.debug=true
cheese28.debug=true
cheese29.debug=true
cheese30.debug=true
cheese31.debug=true
cheese32.debug=true
cheese33.debug=true
cheese34.debug=true
cheese35.debug=true
cheese36.debug=true
cheese37.debug=true
cheese38.debug=true
cheese39.debug=true
cheese40.debug=true
cheese41.debug=true
cheese42.debug=true
cheese43.debug=true
cheese44.debug=true
cheese45.debug=true
cheese46.debug=true
cheese47.debug=true
cheese48.debug=true
cheese49.debug=true
cheese50.debug=true
cheese51.debug=true
cheese52.debug=true
cheese53.debug=true
cheese54.debug=true
cheese55.debug=true
cheese56.debug=true
cheese57.debug=true
cheese58.debug=true
cheese59.debug=true
cheese60.debug=true
cheese61.debug=true
cheese62.debug=true
cheese63.debug=true
cheese64.debug=true
cheese65.debug=true
cheese66.debug=true
cheese67.debug=true
cheese68.debug=true
cheese69.debug=true
cheese70.debug=true
cheese71.debug=true
cheese72.debug=true
cheese73.debug=true
cheese74.debug=true
cheese75.debug=true
cheese77.debug=true
cheese78.debug=true
cheese79.debug=true
cheese80.debug=true
cheese81.debug=true
cheese84.debug=true
cheese88.debug=true
cheese91.debug=true
cheese95.debug=true
cheese96.debug=true
cheese97.debug=true
cheese98.debug=true
cheese99.debug=true
cheese100.debug=true
cheese101f.debug=true
cheese101.debug=true
cheese102.debug=true
cheese103.debug=true
cheese104.debug=true
cheese105.debug=true
cheese106.debug=true
cheese107.debug=true
cheese107b.debug=true
cheese108b.debug=true
cheese109b.debug=true
cheese110b.debug=true
cheese111b.debug=true
cheese112b.debug=true
cheese108.debug=true
cheese109.debug=true
cheese110.debug=true
cheese111.debug=true
cheese112.debug=true
cheese113.debug=true
cheese114.debug=true
cheese115f.debug=true
cheese115.debug=true
cheese116.debug=true
cheese117.debug=true
cheese118.debug=true
cheese119.debug=true
cheese120.debug=true
cheese121.debug=true
cheese122.debug=true
cheese123.debug=true
cheese124.debug=true
cheese125.debug=true
cheese126.debug=true
cheese127.debug=true
cheese128.debug=true
cheese129.debug=true
cheese130.debug=true
cheese131.debug=true
cheese132.debug=true
cheese133.debug=true
cheese134.debug=true
cheese135f.debug=true
cheese135.debug=true
cheese136.debug=true
cheese137.debug=true
cheese138.debug=true
cheese139.debug=true
cheese140.debug=true
cheese141b.debug=true
cheese142b.debug=true
cheese141.debug=true
cheese143b.debug=true
cheese144b.debug=true
cheese142.debug=true
cheese143.debug=true
cheese144.debug=true
cheese145.debug=true
cheese146.debug=true
cheese147.debug=true
cheese148.debug=true
cheese149.debug=true
cheese150.debug=true
cheese151.debug=true
cheese152.debug=true
cheese153.debug=true
cheese154.debug=true
cheese155.debug=true
cheese156.debug=true
cheese157.debug=true
cheese158.debug=true
cheese159.debug=true
cheese160.debug=true
cheese161.debug=true
cheese162.debug=true
cheese163.debug=true
cheese164.debug=true
cheese165.debug=true
cheese166.debug=true
cheese167.debug=true
cheese168.debug=true
cheese169.debug=true
cheese170.debug=true
cheese171.debug=true
cheese172.debug=true
cheese173.debug=true
cheese175.debug=true
cheese176.debug=true
cheese177.debug=true
cheese178.debug=true
cheese179.debug=true
cheese180.debug=true
cheese181.debug=true
cheese182.debug=true
cheese183.debug=true
cheese184.debug=true
cheese185.debug=true
cheese186.debug=true
cheese187.debug=true
cheese188.debug=true
cheese189.debug=true
cheese190.debug=true
cheese191.debug=true
cheese192.debug=true
cheese193.debug=true
cheese194.debug=true
cheese195.debug=true
cheese196.debug=true
cheese197.debug=true
cheese198.debug=true
}

function mouseControl(){
	if(keyIsDown(UP_ARROW)){
		bullet2.velocityX=-10
		bullet3.velocityX=10
		bullet4.velocityX=-10
		bullet5.velocityY=-10
		bullet6.velocityY=10
		bullet7.velocityY=10
		bullet.velocityX=10
		bullet.velocityX=5
		mouse.y-=10
		mouse.changeAnimation("mouseu",mouse_up)
	}
  
	else if(keyIsDown(RIGHT_ARROW)){
		bullet2.velocityX=-10
		bullet3.velocityX=10
		bullet4.velocityX=-10
		bullet5.velocityY=-10
		bullet6.velocityY=10
		bullet7.velocityY=10
		bullet.velocityX=10
		mouse.x+=10
	    mouse.changeAnimation("mouser",mouse_right)
  }
  
  else if(keyIsDown(LEFT_ARROW)){
	bullet2.velocityX=-10
	bullet3.velocityX=10
	bullet4.velocityX=-10
	bullet5.velocityY=-10
	bullet6.velocityY=10
	bullet7.velocityY=10
	bullet.velocityX=10
	
	  mouse.x-=10;
	  mouse.changeAnimation("mousel",mouse_left)
  }
  
  else if(keyIsDown(DOWN_ARROW)){
	bullet2.velocityX=-10
	bullet3.velocityX=10
	bullet4.velocityX=-10
	bullet5.velocityY=-10
	bullet6.velocityY=10
	bullet7.velocityY=10
	bullet.velocityX=10
	bullet.velocityX=5
	  mouse.y+=10
	  mouse.changeAnimation("moused",mouse_down)
  }
  else{
	  mouse.changeAnimation("mouse_still",mouse_img2)
  }
}
function mouseCollide(){
	mouse.collide(wall);
mouse.collide(wall2);
mouse.collide(wall3);
mouse.collide(wall4);
mouse.collide(wall5);
mouse.collide(wall6);
mouse.collide(wall7);
mouse.collide(wall8);
mouse.collide(wall9);
mouse.collide(wall10);
mouse.collide(wall11);
mouse.collide(wall12);
mouse.collide(wall13);
mouse.collide(wall14);
mouse.collide(wall15);
mouse.collide(wall16);
mouse.collide(wall17);
mouse.collide(wall18);
mouse.collide(wall19);
mouse.collide(wall20);
mouse.collide(wall21);
mouse.collide(wall22);
mouse.collide(wall23);
}
function mouseTouchingCheese(){
	if (mouse.isTouching(cheese)) {
		cheese.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese2)) {
		cheese2.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese3)) {
		cheese3.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese4)) {
		cheese4.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese5)) {
		cheese5.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese6)) {
		cheese6.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese7)) {
		cheese7.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese8)) {
		cheese8.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese9)) {
		cheese9.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese10)) {
		cheese10.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese11)) {
		cheese11.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese12)) {
		cheese12.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese13)) {
		cheese13.destroy();
		score++
			
	  }
	  if (mouse.isTouching(cheese14)) {
		cheese14.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese15)) {
		cheese15.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese16)) {
		cheese16.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese17)) {
		cheese17.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese18)) {
		cheese18.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese19)) {
		cheese19.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese20)) {
		cheese20.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese21)) {
		cheese21.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese22)) {
		cheese22.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese23)) {
		cheese23.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese24)) {
		cheese24.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese25)) {
		cheese25.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese26)) {
		cheese26.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese27)) {
		cheese27.destroy();
		score++
	
	  }
	  if (mouse.isTouching(cheese28)) {
		cheese28.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese29)) {
		cheese29.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese30)) {
		cheese30.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese31)) {
		cheese31.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese32)) {
		cheese32.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese33)) {
		cheese33.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese34)) {
		cheese34.destroy();
		score++
			
	  }
	  if (mouse.isTouching(cheese35)) {
		cheese35.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese36)) {
		cheese36.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese37)) {
		cheese37.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese38)) {
		cheese38.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese39)) {
		cheese39.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese40)) {
		cheese40.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese41)) {
		cheese41.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese42)) {
		cheese42.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese43)) {
		cheese43.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese44)) {
		cheese44.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese45)) {
		cheese45.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese46)) {
		cheese46.destroy();
		score++
	
	  }
	  if (mouse.isTouching(cheese47)) {
		cheese47.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese48)) {
		cheese48.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese49)) {
		cheese49.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese50)) {
		cheese50.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese51)) {
		cheese51.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese52)) {
		cheese52.destroy();
		score++
			
	  }
	  if (mouse.isTouching(cheese53)) {
		cheese53.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese54)) {
		cheese54.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese55)) {
		cheese55.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese56)) {
		cheese56.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese57)) {
		cheese57.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese58)) {
		cheese58.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese59)) {
		cheese59.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese60)) {
		cheese60.destroy();
		score++
			
	  }
	  if (mouse.isTouching(cheese61)) {
		cheese61.destroy();
		score++
			
	  }
	  if (mouse.isTouching(cheese62)) {
		cheese62.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese63)) {
		cheese63.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese64)) {
		cheese64.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese65)) {
		cheese65.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese66)) {
		cheese66.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese67)) {
		cheese67.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese68)) {
		cheese68.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese69)) {
		cheese69.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese70)) {
		cheese70.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese71)) {
		cheese71.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese72)) {
		cheese72.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese73)) {
		cheese73.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese74)) {
		cheese74.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese75)) {
		cheese75.destroy();
		score++
		
	  }
	  
	  if (mouse.isTouching(cheese77)) {
		cheese77.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese78)) {
		cheese78.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese79)) {
		cheese79.destroy();
		score++	
		
	  }
	  if (mouse.isTouching(cheese80)) {
		cheese80.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese81)) {
		cheese81.destroy();
		score++
		
	  }
	  
	  if (mouse.isTouching(cheese84)) {
		cheese84.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese88)) {
		cheese88.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese91)) {
		cheese91.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese95)) {
		cheese95.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese96)) {
		cheese96.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese97)) {
		cheese97.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese98)) {
		cheese98.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese99)) {
		cheese99.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese100)) {
		cheese100.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese101f)) {
		cheese101f.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese101)) {
		cheese101.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese102)) {
		cheese102.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese103)) {
		cheese103.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese104)) {
		cheese104.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese105)) {
		cheese105.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese106)) {
		cheese106.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese107)) {
		cheese107.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese107b)) {
		cheese107b.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese108b)) {
		cheese108b.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese109b)) {
		cheese109b.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese110b)) {
		cheese110b.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese111b)) {
		cheese111b.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese112b)) {
		cheese112b.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese108)) {
		cheese108.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese109)) {
		cheese109.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese110)) {
		cheese110.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese111)) {
		cheese111.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese112)) {
		cheese112.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese113)) {
		cheese113.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese114)) {
		cheese114.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese115f)) {
		cheese115f.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese115)) {
		cheese115.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese116)) {
		cheese116.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese117)) {
		cheese117.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese118)) {
		cheese118.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese119)) {
		cheese119.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese120)) {
		cheese120.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese121)) {
		cheese121.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese122)) {
		cheese122.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese123)) {
		cheese123.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese124)) {
		cheese124.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese125)) {
		cheese125.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese126)) {
		cheese126.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese127)) {
		cheese127.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese128)) {
		cheese128.destroy();
		score++
	
	  }
	  if (mouse.isTouching(cheese129)) {
		cheese129.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese130)) {
		cheese130.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese131)) {
		cheese131.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese132)) {
		cheese132.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese133)) {
		cheese133.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese134)) {
		cheese134.destroy();
		score++
	
	  }
	  if (mouse.isTouching(cheese135f)) {
		cheese135f.destroy();
		score++
		
	  } 
	  if (mouse.isTouching(cheese135)) {
		cheese135.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese136)) {
		cheese136.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese137)) {
		cheese137.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese138)) {
		cheese138.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese139)) {
		cheese139.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese140)) {
		cheese140.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese141b)) {
		cheese141b.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese142b)) {
		cheese142b.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese141)) {
		cheese141.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese143b)) {
		cheese143b.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese144b)) {
		cheese144b.destroy();
		score++
			
	  }
	  if (mouse.isTouching(cheese142)) {
		cheese142.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese143)) {
		cheese143.destroy();
		score++	
		
	  }
	  if (mouse.isTouching(cheese144)) {
		cheese144.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese145)) {
		cheese145.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese146)) {
		cheese146.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese147)) {
		cheese147.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese148)) {
		cheese148.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese149)) {
		cheese149.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese150)) {
		cheese150.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese151)) {
		cheese151.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese152)) {
		cheese152.destroy();
		score++
			
	  }
	  if (mouse.isTouching(cheese153)) {
		cheese153.destroy();
		score++
	
	  }
	  if (mouse.isTouching(cheese154)) {
		cheese154.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese155)) {
		cheese155.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese156)) {
		cheese156.destroy();
		score++
	
	  }
	  if (mouse.isTouching(cheese157)) {
		cheese157.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese158)) {
		cheese158.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese159)) {
		cheese159.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese160)) {
		cheese160.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese161)) {
		cheese161.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese162)) {
		cheese162.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese163)) {
		cheese163.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese164)) {
		cheese164.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese165)) {
		cheese165.destroy();
		score++

	  }
	  if (mouse.isTouching(cheese166)) {
		cheese166.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese167)) {
		cheese167.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese168)) {
		cheese168.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese169)) {
		cheese169.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese170)) {
		cheese170.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese171)) {
		cheese171.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese172)) {
		cheese172.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese173)) {
		cheese173.destroy();
		score++
		
	  }
	 
	  if (mouse.isTouching(cheese175)) {
		cheese175.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese176)) {
		cheese176.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese177)) {
		cheese177.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese178)) {
		cheese178.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese179)) {
		cheese179.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese180)) {
		cheese180.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese181)) {
		cheese181.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese182)) {
		cheese182.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese183)) {
		cheese183.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese184)) {
		cheese184.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese185)) {
		cheese185.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese186)) {
		cheese186.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese187)) {
		cheese187.destroy();
		score++
			
	  }
	  if (mouse.isTouching(cheese188)) {
		cheese188.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese189)) {
		cheese189.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese190)) {
		cheese190.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese191)) {
		cheese191.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese192)) {
		cheese192.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese193)) {
		cheese193.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese194)) {
		cheese194.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese195)) {
		cheese195.destroy();
		score++	
		
	  }
	  if (mouse.isTouching(cheese196)) {
		cheese196.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese197)) {
		cheese197.destroy();
		score++
		
	  }
	  if (mouse.isTouching(cheese198)) {
		cheese198.destroy();
		score++
		
	  }	
	
}
function settingCollider(){
mouse.setCollider("circle",0,0,60)
cheese.setCollider("rectangle",0,0,300,300)
cheese2.setCollider("rectangle",0,0,300,300)
cheese3.setCollider("rectangle",0,0,300,300)
cheese4.setCollider("rectangle",0,0,300,300)
cheese5.setCollider("rectangle",0,0,300,300)
cheese6.setCollider("rectangle",0,0,300,300)
cheese7.setCollider("rectangle",0,0,300,300)
cheese8.setCollider("rectangle",0,0,300,300)
cheese9.setCollider("rectangle",0,0,300,300)
cheese10.setCollider("rectangle",0,0,300,300)
cheese11.setCollider("rectangle",0,0,300,300)
cheese12.setCollider("rectangle",0,0,300,300)
cheese13.setCollider("rectangle",0,0,300,300)
cheese14.setCollider("rectangle",0,0,300,300)
cheese15.setCollider("rectangle",0,0,300,300)
cheese16.setCollider("rectangle",0,0,300,300)
cheese17.setCollider("rectangle",0,0,300,300)
cheese18.setCollider("rectangle",0,0,300,300)
cheese19.setCollider("rectangle",0,0,300,300)
cheese20.setCollider("rectangle",0,0,300,300)
cheese21.setCollider("rectangle",0,0,300,300)
cheese22.setCollider("rectangle",0,0,300,300)
cheese23.setCollider("rectangle",0,0,300,300)
cheese24.setCollider("rectangle",0,0,300,300)
cheese25.setCollider("rectangle",0,0,300,300)
cheese26.setCollider("rectangle",0,0,300,300)
cheese27.setCollider("rectangle",0,0,300,300)
cheese28.setCollider("rectangle",0,0,300,300)
cheese29.setCollider("rectangle",0,0,300,300)
cheese30.setCollider("rectangle",0,0,300,300)
cheese31.setCollider("rectangle",0,0,300,300)
cheese32.setCollider("rectangle",0,0,300,300)
cheese33.setCollider("rectangle",0,0,300,300)
cheese34.setCollider("rectangle",0,0,300,300)
cheese35.setCollider("rectangle",0,0,300,300)
cheese36.setCollider("rectangle",0,0,300,300)
cheese37.setCollider("rectangle",0,0,300,300)
cheese38.setCollider("rectangle",0,0,300,300)
cheese39.setCollider("rectangle",0,0,300,300)
cheese40.setCollider("rectangle",0,0,300,300)
cheese41.setCollider("rectangle",0,0,300,300)
cheese42.setCollider("rectangle",0,0,300,300)
cheese43.setCollider("rectangle",0,0,300,300)
cheese44.setCollider("rectangle",0,0,300,300)
cheese45.setCollider("rectangle",0,0,300,300)
cheese46.setCollider("rectangle",0,0,300,300)
cheese47.setCollider("rectangle",0,0,300,300)
cheese48.setCollider("rectangle",0,0,300,300)
cheese49.setCollider("rectangle",0,0,300,300)
cheese50.setCollider("rectangle",0,0,300,300)
cheese51.setCollider("rectangle",0,0,300,300)
cheese52.setCollider("rectangle",0,0,300,300)
cheese53.setCollider("rectangle",0,0,300,300)
cheese54.setCollider("rectangle",0,0,300,300)
cheese55.setCollider("rectangle",0,0,300,300)
cheese56.setCollider("rectangle",0,0,300,300)
cheese57.setCollider("rectangle",0,0,300,300)
cheese58.setCollider("rectangle",0,0,300,300)
cheese59.setCollider("rectangle",0,0,300,300)
cheese60.setCollider("rectangle",0,0,300,300)
cheese61.setCollider("rectangle",0,0,300,300)
cheese62.setCollider("rectangle",0,0,300,300)
cheese63.setCollider("rectangle",0,0,300,300)
cheese64.setCollider("rectangle",0,0,300,300)
cheese65.setCollider("rectangle",0,0,300,300)
cheese66.setCollider("rectangle",0,0,300,300)
cheese67.setCollider("rectangle",0,0,300,300)
cheese68.setCollider("rectangle",0,0,300,300)
cheese69.setCollider("rectangle",0,0,300,300)
cheese70.setCollider("rectangle",0,0,300,300)
cheese71.setCollider("rectangle",0,0,300,300)
cheese72.setCollider("rectangle",0,0,300,300)
cheese73.setCollider("rectangle",0,0,300,300)
cheese74.setCollider("rectangle",0,0,300,300)
cheese75.setCollider("rectangle",0,0,300,300)
cheese77.setCollider("rectangle",0,0,300,300)
cheese78.setCollider("rectangle",0,0,300,300)
cheese79.setCollider("rectangle",0,0,300,300)
cheese80.setCollider("rectangle",0,0,300,300)
cheese81.setCollider("rectangle",0,0,300,300)
cheese84.setCollider("rectangle",0,0,300,300)
cheese88.setCollider("rectangle",0,0,300,300)
cheese91.setCollider("rectangle",0,0,300,300)
cheese95.setCollider("rectangle",0,0,300,300)
cheese96.setCollider("rectangle",0,0,300,300)
cheese97.setCollider("rectangle",0,0,300,300)
cheese98.setCollider("rectangle",0,0,300,300)
cheese99.setCollider("rectangle",0,0,300,300)
cheese100.setCollider("rectangle",0,0,300,300)
cheese101f.setCollider("rectangle",0,0,300,300)
cheese101.setCollider("rectangle",0,0,300,300)
cheese102.setCollider("rectangle",0,0,300,300)
cheese103.setCollider("rectangle",0,0,300,300)
cheese104.setCollider("rectangle",0,0,300,300)
cheese105.setCollider("rectangle",0,0,300,300)
cheese106.setCollider("rectangle",0,0,300,300)
cheese107.setCollider("rectangle",0,0,300,300)
cheese107b.setCollider("rectangle",0,0,300,300)
cheese108b.setCollider("rectangle",0,0,300,300)
cheese109b.setCollider("rectangle",0,0,300,300)
cheese110b.setCollider("rectangle",0,0,300,300)
cheese111b.setCollider("rectangle",0,0,300,300)
cheese112b.setCollider("rectangle",0,0,300,300)
cheese108.setCollider("rectangle",0,0,300,300)
cheese109.setCollider("rectangle",0,0,300,300)
cheese110.setCollider("rectangle",0,0,300,300)
cheese111.setCollider("rectangle",0,0,300,300)
cheese112.setCollider("rectangle",0,0,300,300)
cheese113.setCollider("rectangle",0,0,300,300)
cheese114.setCollider("rectangle",0,0,300,300)
cheese115f.setCollider("rectangle",0,0,300,300)
cheese115.setCollider("rectangle",0,0,300,300)
cheese116.setCollider("rectangle",0,0,300,300)
cheese117.setCollider("rectangle",0,0,300,300)
cheese118.setCollider("rectangle",0,0,300,300)
cheese119.setCollider("rectangle",0,0,300,300)
cheese120.setCollider("rectangle",0,0,300,300)
cheese121.setCollider("rectangle",0,0,300,300)
cheese122.setCollider("rectangle",0,0,300,300)
cheese123.setCollider("rectangle",0,0,300,300)
cheese124.setCollider("rectangle",0,0,300,300)
cheese125.setCollider("rectangle",0,0,300,300)
cheese126.setCollider("rectangle",0,0,300,300)
cheese127.setCollider("rectangle",0,0,300,300)
cheese128.setCollider("rectangle",0,0,300,300)
cheese129.setCollider("rectangle",0,0,300,300)
cheese130.setCollider("rectangle",0,0,300,300)
cheese131.setCollider("rectangle",0,0,300,300)
cheese132.setCollider("rectangle",0,0,300,300)
cheese133.setCollider("rectangle",0,0,300,300)
cheese134.setCollider("rectangle",0,0,300,300)
cheese135f.setCollider("rectangle",0,0,300,300)
cheese135.setCollider("rectangle",0,0,300,300)
cheese136.setCollider("rectangle",0,0,300,300)
cheese137.setCollider("rectangle",0,0,300,300)
cheese138.setCollider("rectangle",0,0,300,300)
cheese139.setCollider("rectangle",0,0,300,300)
cheese140.setCollider("rectangle",0,0,300,300)
cheese141b.setCollider("rectangle",0,0,300,300)
cheese142b.setCollider("rectangle",0,0,300,300)
cheese141.setCollider("rectangle",0,0,300,300)
cheese143b.setCollider("rectangle",0,0,300,300)
cheese144b.setCollider("rectangle",0,0,300,300)
cheese142.setCollider("rectangle",0,0,300,300)
cheese143.setCollider("rectangle",0,0,300,300)
cheese144.setCollider("rectangle",0,0,300,300)
cheese145.setCollider("rectangle",0,0,300,300)
cheese146.setCollider("rectangle",0,0,300,300)
cheese147.setCollider("rectangle",0,0,300,300)
cheese148.setCollider("rectangle",0,0,300,300)
cheese149.setCollider("rectangle",0,0,300,300)
cheese150.setCollider("rectangle",0,0,300,300)
cheese151.setCollider("rectangle",0,0,300,300)
cheese152.setCollider("rectangle",0,0,300,300)
cheese153.setCollider("rectangle",0,0,300,300)
cheese154.setCollider("rectangle",0,0,300,300)
cheese155.setCollider("rectangle",0,0,300,300)
cheese156.setCollider("rectangle",0,0,300,300)
cheese157.setCollider("rectangle",0,0,300,300)
cheese158.setCollider("rectangle",0,0,300,300)
cheese159.setCollider("rectangle",0,0,300,300)
cheese160.setCollider("rectangle",0,0,300,300)
cheese161.setCollider("rectangle",0,0,300,300)
cheese162.setCollider("rectangle",0,0,300,300)
cheese163.setCollider("rectangle",0,0,300,300)
cheese164.setCollider("rectangle",0,0,300,300)
cheese165.setCollider("rectangle",0,0,300,300)
cheese166.setCollider("rectangle",0,0,300,300)
cheese167.setCollider("rectangle",0,0,300,300)
cheese168.setCollider("rectangle",0,0,300,300)
cheese169.setCollider("rectangle",0,0,300,300)
cheese170.setCollider("rectangle",0,0,300,300)
cheese171.setCollider("rectangle",0,0,300,300)
cheese172.setCollider("rectangle",0,0,300,300)
cheese173.setCollider("rectangle",0,0,300,300)
cheese175.setCollider("rectangle",0,0,300,300)
cheese176.setCollider("rectangle",0,0,300,300)
cheese177.setCollider("rectangle",0,0,300,300)
cheese178.setCollider("rectangle",0,0,300,300)
cheese179.setCollider("rectangle",0,0,300,300)
cheese180.setCollider("rectangle",0,0,300,300)
cheese181.setCollider("rectangle",0,0,300,300)
cheese182.setCollider("rectangle",0,0,300,300)
cheese183.setCollider("rectangle",0,0,300,300)
cheese184.setCollider("rectangle",0,0,300,300)
cheese185.setCollider("rectangle",0,0,300,300)
cheese186.setCollider("rectangle",0,0,300,300)
cheese187.setCollider("rectangle",0,0,300,300)
cheese188.setCollider("rectangle",0,0,300,300)
cheese189.setCollider("rectangle",0,0,300,300)
cheese190.setCollider("rectangle",0,0,300,300)
cheese191.setCollider("rectangle",0,0,300,300)
cheese192.setCollider("rectangle",0,0,300,300)
cheese193.setCollider("rectangle",0,0,300,300)
cheese194.setCollider("rectangle",0,0,300,300)
cheese195.setCollider("rectangle",0,0,300,300)
cheese196.setCollider("rectangle",0,0,300,300)
cheese197.setCollider("rectangle",0,0,300,300)
cheese198.setCollider("rectangle",0,0,300,300)
	
}