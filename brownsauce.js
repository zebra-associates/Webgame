
$(document).bind("contextmenu",function(e){
	return false;
    }); 
	
var radarBitmap=[];
var sideBar=false;
var textPause=false;
var won="";
var textText="";
var CANVAS_WIDTH = 900;
var CANVAS_HEIGHT = 640;
var MAP_WIDTH = 220;
var MAP_HEIGHT = 280;
var CRIT_CHANCE=100;
var FPS = 30;
var LAVA_RATE=2000;
var WATER_RATE=1000;
var BURN_RATE=100;
var CHARANI_RATE= 200;
var FALL_DMG=900;
var SPAWN_X=22;
var SPAWN_Y=19;
var GRAVITY_RATE=5;
var TEAM_SIZE = 12;
var SELECTED=0;
var MSELECTED=0;
var MUSELECTED=0;
var BSELECTED=0;
var NUM_STATUS=5;
var tick=0;
var gamespeed=0;//2;
var isBattle=false;
var isMenu=0;
var battlelength=10;
var combatants=new Array(2);
var battledelay=10;
var battletick=0;
var battleenddelay=10;
var battleendtick=0;
var winmode=1;
var looseX=0;
var looseY=0;
//var keychart = ["w","a","d","s","up","right","down","left","m","n","shift"];
var names= new Array (2);
names[0]=new Array(120);
names[1]=new Array(120);
var mX=120;
var mY=320;
var townnames=new Array(40);
townnames= ["Qarth","Meereen","Myr","Pentos","Ashford","Ashemark","Gulltown","Pyke","Lordsport","Lannisport","Lys","Tyrosh","Iben","New Ghis","Astapor","Yunkai","Qohor","Lorath","Volantis","Braavos","Vaes Dothrak","White Harbor","Maidenpool","Oldstones","Harrenhal","Riverrun","Seaguard","Winterfell","Saltpans","Castamere","Oxcross","Crakehall","The Crag","Duskendale","Dragonstone","Rosby","Highgarden","Oldtown","Grimston","Hardhome"];

names[0]= ["Eddard", "Theon","Bealor", "Aerys", "Aemon", "Aemond", "Fletcher Dick", "Beardless Dick", "Valarr", "Hot Pie", "Lommy", "Jon", "Matarys", "Dunk", "Egg", "Aerion","Bran","Bronn","Robb","Tyrion","Jamie","Tywin","Jeor","Jorah","Mero","Stannis","Gendrey","Yoren","Rickard","Drogo","Brandon","Gregor","Sandor","Polliver","Allister","Barristan","Jeoffery","Robert","Symon","Dolorous Edd","Podrick","Renly","Illyn","Aurane","Regular Ed","Merret","Walder","HODOR","Luwin","Cressen","Janos","Tytos","Garion","Willas","Garlan","Viserys","Loras","Willem","Martyn","Illyrio","Xaro Xhoan Ducksauce","Cleon","Aegon","Emmon","Skahaz","Cleos","Tygett","Vargo","Pono","Nimble Dick","Iron Emmett","Mance","Tormund","Varamyr","Orell","Jaquen","Wease","The Tickler","Dareon","Morroqo","Marwyn","Pate","Davos","Axel","Wyman","Pyter","Varys","Arnolf","Sigorn","Hoster","Tion","Helman","Torrhen","Yohn","Lyn","Nestor","Doran","Oberyn","Qyburn","Howland","Daario","Xhondo","Yellow Dick","Zachery","Zekko","Zollo","Will","Willbert","Wendel","Wendamyr","The Weeper","Wat","Walton","Vardis","Urrigon","Ulmer","Tobho","Timett","Syrio","Styr"];
names[1]= ["Alysane", "Lyra", "Naerys", "Pia", "Lynesse", "Maege", "Rhaenyra", "Elizibeth", "Rhae", "Tanselle", "Daena", "Elaena", "Myriah", "Aelinor","Arya","Sansa","Shae","Meera","Mina","Gilly","Ygritte","Ami","Cersei","Tanda","Lollys","Mya","Alayne","Myrcella","Lyanna","Lemore","Jayne","Talisa","Ros","Margery", "Catlyen", "Brienne", "Olenna", "Roslin", "Lysa", "Taena","Senelle","Falyse","Barra","Bella","Joanna","Joy","Janei","Dorna","Ashara","Allyria","Asha","Osha","Rhonda","Rhea","Alerie","Alysanne","Malora","Daenerys","Irri","Rhaella","Ellia","Illyrio","Quaithe", "Missandei", "Shireen","Mezzara","Kezmya","Qezza","Jhezene","Miklaz","Arianne","Shella","Mellario","Obara","Nymeria","Tyene","Obella","Dorea","Loreza","Myranda","Thistle","Alannys","Alla ","Alia","Alyce","Minisa","Meris","Wenda","Anya","Doreah","Horma","Weasel","Tysha","Sarella","Maggi","Jenny","Barbrey","Bethany","Wylla","Leona","Alys","Amarei","Old Nan","Yna","Ysilla","Victaria","Visenya","Val","The Waif","Tya","Tysane","Tansey","Talla","Taela","Squirrel","Shiera","Sharna","Scolera","Sarra","Sallei","S'vrone","Rhea","Rhialta"];
var namesused=new Array(2);
namesused[0]=new Array(120);
namesused[1]=new Array(120);
for(i=0;i<120;i++){namesused[0][i]=false;namesused[1][i]=false;}

var darkgrasssprite = Sprite("darkgrass"); //begin loading images.  Eventually I should put them all on one .png file
var grasssprite = Sprite("grass");
var watersprite = Sprite("water");
var stonesprite = Sprite("stone");
var mossysprite = Sprite("mossy");
var poisonsprite = Sprite("poison");
var selector = Sprite("cursor");
var noleader= Sprite("noleader");
var flagsprite = Sprite("flag");
var thingysprite = Sprite("thingy");
var clocksprite=new Array(6);
clocksprite[0] = Sprite("clock0");
clocksprite[1] = Sprite("clock1");
clocksprite[2] = Sprite("clock2");
clocksprite[3] = Sprite("clock3");
clocksprite[4] = Sprite("clock4");
clocksprite[5] = Sprite("clock5");
var explosionsprite=new Array(4);
explosionsprite[0] =Sprite("explosion0");
explosionsprite[1] =Sprite("explosion1");
explosionsprite[2] =Sprite("explosion2");
explosionsprite[3] =Sprite("explosion3");



var canvasElement = $("<canvas width='" + CANVAS_WIDTH + "' height='" + CANVAS_HEIGHT + "'></canvas");
var canvas = canvasElement.get(0).getContext("2d");

var radarElement = $("<canvas width='" + MAP_WIDTH + "' height='" + MAP_HEIGHT + "'></canvas");
var radarCanvas = radarElement.get(0).getContext("2d");

canvasElement.appendTo('body');
//radarElement.appendTo('body');
//todo:  find some way to put this in map or tile?
var tileani=0;
var anicount=0;
var anirate=1000;
var lastani=0;
var gotall=false;
var numsounds=0;
var soundsplaying ="";
var timestamp = new Date(); 
var milliseconds = timestamp.getTime();
var lasttime=0;
var battlespeed=100;
var paused=false;
var mappause=false;
var battleReport=false;
var battlePause=false;
var unitinfo=false;
var healcount=0;
var healrate=140;
var numTowns=8;
var CSELECTED=0;

function playSound(name){
    
    nerp=document.getElementById(name);
    if(nerp.ended == true || nerp.currentTime == 0){
		nerp.play();
		numsounds++;
    }
    
};

Status = {};
Status.Poison = 0; 
Status.Haste = 1;
Status.Slow = 2;
Status.Mute = 3;
Status.Imp = 4;
Status.Reflect = 5; 

    
AttackTypes = {};
AttackTypes.Physical = 0; 
AttackTypes.Ranged = 1;
AttackTypes.Magical = 2;
AttackTypes.Heal = 3;
AttackTypes.InflictStatus = 4;
AttackTypes.HealStatus = 5; 
AttackTypes.someweirdshitthatignoresdefensemaybe =6;

AITypes = {};
AITypes.Random=0;
AITypes.Rush=1;
AITypes.FanOut=2;
AITypes.AttackNearest=3;
AITypes.DefendBase=4;
AITypes.DefendTowns=5;

SEEAss = {};
SEEAss.Knight=0;
SEEAss.Palladin=1;
SEEAss.DarkKnight=2;
SEEAss.Wizard=3;
SEEAss.Mage=4;
SEEAss.Sage=5;

function card(){
	this.name = "Flaccid Dolphin";
	this.type = Math.floor(Math.random()*5);
	this.sprite = Sprite("card0");
	if(this.type==1){	this.sprite = Sprite("card1");}
	if(this.type==2){	this.sprite = Sprite("card2");}
	if(this.type==3){	this.sprite = Sprite("card3");}
	if(this.type==4){	this.sprite = Sprite("card4");}

	this.setSprite=function(){
		if(this.type==1){	this.sprite = Sprite("card1");}
		if(this.type==2){	this.sprite = Sprite("card2");}
		if(this.type==3){	this.sprite = Sprite("card3");}
		if(this.type==4){	this.sprite = Sprite("card4");}
	};
	this.use=function(usqd,esqd)
	{
		//console.log("Played the " + this.name+ " card!");
		if (this.type==0){
			console.log("Played the Mother card!");
			for(var i=0;i<usqd.numUnits;i++){
				if (usqd.units[i].alive) {
					usqd.units[i].hp+=25;
					if (usqd.units[i].hp>usqd.units[i].maxhp) {usqd.units[i].hp=usqd.units[i].maxhp;}
				}
			}
		}else if(this.type==1)
		{
			console.log("Played the Drowned God card!");
			for(var i=0;i<esqd.numUnits;i++){
				if (esqd.units[i].alive) {
					esqd.units[i].hurt(15);
				}
			}
		}else if(this.type==2)
		{
			console.log("Played The Father card!");
			esqd.turns=20;
			esqd.damaged=-1; //flee
		}else if(this.type==3)
		{
			console.log("Played The Stranger card!");
			esqd.row();
		}else if(this.type==5)
		{
			console.log("Played the R'hllor card!");
			for(var i=0;i<usqd.numUnits;i++){
				if (!usqd.units[i].alive) {
					usqd.units[i].hp+=25;
					usqd.units[i].alive=true;
					if (usqd.units[i].hp>usqd.units[i].maxhp) {usqd.units[i].hp=usqd.units[i].maxhp;}
				}
			}
		}else if(this.type==3)
		{
			console.log("Played The Crone card!");
			usqd.healStatus();
		}
	}
};

function akey(k) {  //represents a keyboard button
    k = k || "space";
    this.key =k;
    this.aflag=false;
	this.dflag=false;
    this.check= function(){
	if (keydown[this.key]) { 
		this.aflag=true;
		return false;
	}
	if((!keydown[this.key]) && (this.aflag==true)){
	    this.aflag=false;
	    return true;
	}
    };
	this.checkDown= function(){
	if ((keydown[this.key] )  && (!this.dflag)) { 
	    this.dflag=true;
	    return true;
	}
	if(!keydown[this.key]){
	    this.dflag=false;
	    return false;
	}
    };
    return this;
}

function status()
{
	this.haste=false;
	this.slow=false;
	this.beserk=false;
	this.posion=false;
	this.mute=false;
	this.reflect=false;
	this.protect=false;
	this.regen=false;
	this.imp=false;
	this.HIV=false;

};

function equipment()
{
	this.name="none";
	this.hitAll=false;
	this.slot=0;
	this.value=0;
	this.attack=0;
	this.def=0;
	this.mdef=0;
	this.evade=0;
	this.speed=0;
	this.mag=0;
	this.prefix="Shitty ";
	this.sprite=null;
	this.haste=false;
	this.slow=false;
	this.beserk=false;
	this.posion=false;
	this.mute=false;
	this.reflect=false;
	this.protect=false;
	this.regen=false;
	this.imp=false;
	this.HIV=false;
	this.tooltip = "";

};

unarmed = new equipment();
noarmor = new equipment();
noarmor.slot=1;
noaccessory = new equipment();
noaccessory.slot=2;
swords=new Array(3);
swords[0]= new equipment();
swords[0].name="Wooden Sword";
swords[0].attack=3;
swords[0].value=10;
swords[0].tooltip = "It is dangerous to go alone.";

swords[1]= new equipment();
swords[1].attack=10;
swords[1].name="Valyrian Sword";
swords[1].value=100;
swords[1].tooltip = "Forged in the fires of Valyria, New Jersey.";

swords[2]= new equipment();
swords[2].attack=24;
swords[2].name="Dawn Sword";
swords[2].value=1000;
swords[2].tooltip = "Forged from the heart of a fallen star.";

katana=new Array(2);
katana[0]= new equipment();
katana[0].name="Wooden Katana";
katana[0].attack=9;
katana[0].value=10;
katana[0].tooltip = "Who makes a wooden Katana?";

katana[1]= new equipment();
katana[1].attack=30;
katana[1].name="Muramasa";
katana[1].value=100;
katana[1].tooltip = "OGOPOGO!";

bow=new Array(2);
bow[0]= new equipment();
bow[0].slot=0;
bow[0].name="Wooden Bow";
bow[0].evade=1;
bow[0].attack=15;
bow[0].value=20;
bow[0].tooltip = "Finally, the power to slay your social betters.";

bow[1]= new equipment();
bow[1].slot=0;
bow[1].name="Weirwood Bow";
bow[1].evade=7;
bow[1].attack=35;
bow[1].value=300;
bow[1].tooltip = "Better bow!";

spear=new Array(2);
spear[0]= new equipment();
spear[0].slot=0;
spear[0].name="Wooden spear";
spear[0].evade=4;
spear[0].attack=15;
spear[0].value=20;
spear[0].tooltip = "Poke 'em mon!";

spear[1]= new equipment();
spear[1].slot=0;
spear[1].name="Zodiac spear";
spear[1].evade=12;
spear[1].attack=25;
spear[1].value=200;
spear[1].tooltip = "You cheated.";


crossbow=new Array(2);
crossbow[0]= new equipment();
crossbow[0].slot=0;
crossbow[0].name="X-Bow";
crossbow[0].evade=12;
crossbow[0].speed=1;
crossbow[0].attack=15;
crossbow[0].value=20;
crossbow[0].tooltip = "Banned by the catholic church!";

rod= new equipment();
rod.slot=1;
rod.name="Rod";
rod.attack=2;
rod.mag=5;
rod.mdef=5;
rod.value=20;
rod.tooltip = "Good for magic!";

icemagic=new Array(4);
icemagic[0]= new equipment();
icemagic[0].slot=0;
icemagic[0].name="Ice";
icemagic[0].evade=2;
icemagic[0].mag=15;
icemagic[0].value=20;
icemagic[0].tooltip = "Basic ice attack";

icemagic[1]= new equipment();
icemagic[1].slot=0;
icemagic[1].name="Ice 2";
icemagic[1].evade=0;
icemagic[1].mag=25;
icemagic[1].value=200;
icemagic[1].tooltip = "It's...Slightly colder!";

icemagic[2]= new equipment();
icemagic[2].slot=0;
icemagic[2].name="Blizzard 1";
icemagic[2].hitAll=true;
icemagic[2].evade=0;
icemagic[2].mag=10;
icemagic[2].value=2000;
icemagic[2].tooltip = "Hits all enemies";

icemagic[3]= new equipment();
icemagic[3].slot=0;
icemagic[3].hitAll=true;
icemagic[3].name="Blizzard 2";
icemagic[3].evade=0;
icemagic[3].mag=25;
icemagic[3].value=2000;
icemagic[3].tooltip = "Hits all enemies harder";

robe= new equipment();
robe.slot=1;
robe.name="Robe";
robe.def=1;
robe.mdef=5;
robe.value=20;
robe.tooltip = "Should conceal your erection.";

shirt= new equipment();
shirt.slot=1;
shirt.name="Shirt";
shirt.def=2;
shirt.mdef=1;
shirt.value=20;
shirt.tooltip = "It's got stripes!.";

breastplate= new equipment();
breastplate.slot=1;
breastplate.name="Breastplate";
breastplate.def=6;
breastplate.mdef=1;
breastplate.value=50;
breastplate.tooltip = "Why are there nipples on it?";

chainmail= new equipment();
chainmail.slot=1;
chainmail.name="chainmail";
chainmail.def=10;
chainmail.mdef=1;
chainmail.value=150;
chainmail.tooltip = "you can pretend you're a fence!";

cape= new equipment();
cape.slot=2;
cape.name="Wooden Bow";
cape.evade=5;
cape.attack=0;
cape.value=20;
cape.tooltip = "You're batman.";


function unit()
{
	this.hp=40;
	this.gender=Math.floor(Math.random()*2);
	this.name="Miles";
	this.mp=0;
	this.maxhp=40;
	this.maxmp=40;
	this.nextLevel=20;
	this.speed=1;
	this.evade=1;
	this.luck=5;
	this.ali=50;
	this.attackType=new Array(2);
	this.attackType[0]=AttackTypes.Physical;
	this.attackType[1]=AttackTypes.Physical;
	this.status=new Array(7);
	this.status[0]=false;
	this.status[1]=false;
	this.status[2]=false;
	this.status[3]=false;
	this.status[4]=false;
	this.status[5]=false;
	this.status[6]=false;
	this.class=Math.floor(Math.random()*15);
	this.row=Math.floor(Math.random()*2);
	this.viewrange=5;
	this.level=1;
	this.def=1;
	this.mdef=1;
	this.attack=10;
	this.mag=5;
	this.alive=true;
	this.attacking=0;
	this.hurting=0;
    this.atb=0;
	this.canlead = true;
	this.cost = 10;
	this.gambits = null;
	this.exp=0;
	this.level=1;
	this.equipment=new Array(3);
	this.equipment[0]=unarmed;
	this.equipment[1]=noarmor;
	this.equipment[2]=noaccessory;
	this.kills=0;
	this.damagetaken=0;
	this.damagedelt=0;
	this.battlesfought=0;
	this.battleswon=0;
	this.battleslost=0;
	var nami=Math.floor(Math.random()*120);
	while(true) {
		if(namesused[this.gender][nami]) 
		{
			nami=Math.floor(Math.random()*120);
		}else {break;}
	}
	this.name=names[this.gender][nami];
	namesused[this.gender][nami]=true;
	
	this.getAttack= function(){
	//if status==beserek attack harder
		if(this.getAttackType() == AttackTypes.Physical ) {
			return (this.attack-this.row)+this.equipAttack()+(this.level*1.5)+Math.floor(Math.random()*3);
		}else if( this.getAttackType() == AttackTypes.Ranged ) { //no row penalty
			return (this.attack)+this.equipAttack()+(this.level*1.5)+Math.floor(Math.random()*3);
		}else if( this.getAttackType() == AttackTypes.Magical ) {  //no row penalty
			return (this.mag)+this.equipMag()+(this.level*1.5)+Math.floor(Math.random()*3);
		}else if( this.getAttackType() == AttackTypes.Heal ) {
			return 0-this.mag;//todo problem?
		}
		//if(this.getAttackType() == AttackTypes.Physical ) {
		console.log(this.name+" "+this.class+" "+this.row);
			return (this.attack-this.row)+this.equipAttack()+(this.level*.5)+Math.floor(Math.random()*3);
	};
	
	this.giveExp= function(val){
		this.exp+=val;
		if (this.exp>this.nextLevel) {
			this.exp=0;
			this.levelUp();
		}
	};
	
	this.esuna=function(){
		for(var i=0;i<NUM_STATUS;i++){
			this.status[i]=false;
		}
	};
	
	this.drawInfo=function(){
	
		canvas.save();
		canvas.globalAlpha=0.60;
		canvas.fillStyle =  "#DCDCDC";
		canvas.fillRect(25,95,820,500);
		canvas.fillStyle =bColors[1];//Math.floor(Math.random()*5)];// "#483D8B ";
		canvas.fillRect(40,110,790,470);
		canvas.restore();
		canvas.font = "14pt Calibri";
		canvas.textAlign = "left";
		canvas.textBaseline = "middle";

		canvas.fillStyle = "white";
		var texticles= "Name: " + this.name;
		canvas.fillText(texticles, 60, 122);
		
		texticles= "HP: " + this.hp + " / " +this.maxhp;
		canvas.fillText(texticles, 60, 135);
		
		texticles= "MP: " + this.mp + " / " +this.maxmp;
		canvas.fillText(texticles, 60, 152);
		
		texticles= "Level: " + this.level;
		canvas.fillText(texticles, 60, 172);
		
		texticles= "Exp: " + this.exp +"/"+this.nextLevel;
		canvas.fillText(texticles, 60, 192);
		
		if(this.class==0) {var texticles= "Class: Bear"; }
		if(this.class==1) {var texticles= "Class: Shoe"; }
		if(this.class==2) {var texticles= "Class: Wizard"; }
		if(this.class==3) {var texticles= "Class: Frog"; }
		if(this.class==4) {var texticles= "Class: Archer"; }
		canvas.fillText(texticles, 180, 122);
		
		texticles= "Speed: " + this.speed+ "+"+this.equipment[1].speed ;
		canvas.fillText(texticles, 180, 135);
		
		texticles= "Attack " + this.attack + "+"+this.equipment[0].attack;
		canvas.fillText(texticles, 180, 152);
		
		texticles= "Def: " + this.def + "+"+this.equipment[1].def;
		canvas.fillText(texticles, 180, 172);
		
		texticles= "M.Def: " + this.mdef + "+"+this.equipment[1].mdef ;
		canvas.fillText(texticles, 180, 192);
		
		texticles= "Magic: " + this.mag + "+"+this.equipment[1].mdef ;
		canvas.fillText(texticles, 280, 135);
		
		texticles= "Luck: " + this.luck + "+"+this.equipment[1].luck ;
		canvas.fillText(texticles, 280, 152);
		
		texticles= "Evade: " + this.evade + "+"+this.equipment[1].evade ;
		canvas.fillText(texticles, 280, 172);
		
		texticles= "Ali: " + this.ali ;
		canvas.fillText(texticles, 280, 192);
		
		if(this.getAttackType()==0) {texticles= "Attack Type: Physical";} 
		if(this.getAttackType()==1) {texticles= "Attack Type: Ranged";} 
		if(this.getAttackType()==2) {texticles= "Attack Type: Magic";} 
		if(this.getAttackType()==3) {texticles= "Attack Type: Heal";} 
		if(this.getAttackType()==4) {texticles= "Attack Type: Inflict Status";} 
		canvas.fillText(texticles, 60, 212);
		
		texticles= "Can be leader: " + this.canlead ;
		canvas.fillText(texticles, 60, 232);
		
		texticles= "Weapon: " + this.equipment[0].name;
		canvas.fillText(texticles, 60, 272);
		
		texticles= "Armor: " + this.equipment[1].name;
		canvas.fillText(texticles, 60, 292);
		
		texticles= "Accessory: " + this.equipment[2].name;
		canvas.fillText(texticles, 60, 312);
		
				
		texticles= "Battles Won: " + this.battleswon ;
		canvas.fillText(texticles, 380, 232);
		
		texticles= "Battles Lost: " + this.battleslost;
		canvas.fillText(texticles, 380, 252);
		
		texticles= "Units Killed: " + this.kills;
		canvas.fillText(texticles, 380, 272);
		
		texticles= "Damage Delt: " + this.damagedelt;
		canvas.fillText(texticles, 380, 292);
		
		texticles= "Damage Taken: " + this.damagetaken;
		canvas.fillText(texticles, 380, 312);
		
	};
	
	this.levelUp=function(){
		this.level++;
		this.nextLevel=20+(5*this.level);
		this.maxhp+=4;
		this.hp+=4;
		this.maxmp+=4;
		this.mp+=4;
		this.speed+=.2;
		this.evade+=1;
		this.def+=1;
		this.mdef+=1;
		this.attack+=1;
		var tmpstr=this.name+ " gained a level!";
		console.log(tmpstr);
		//playSound("level");
	};
	
	this.getAttackType=function(){
		return this.attackType[this.row];
	};
	
	this.equipDef=function(){
		return this.equipment[0].def+this.equipment[1].def+this.equipment[2].def;
	};
	this.equipMDef=function(){	
		return this.equipment[0].mdef+this.equipment[1].mdef+this.equipment[2].mdef;
	};
	this.equipMag=function(){
		return this.equipment[0].mag+this.equipment[1].mag+this.equipment[2].mag;
	};
	this.equipSpeed=function(){
		return this.equipment[0].speed+this.equipment[1].speed+this.equipment[2].speed;
	};
	this.equipAttack=function(){
		return this.equipment[0].attack+this.equipment[1].attack+this.equipment[2].attack;
	};
	this.equipEvade=function(){
		return this.equipment[0].evade+this.equipment[1].evade+this.equipment[2].evade;
	};
	
	this.getDef= function(attacktype){
		if((attacktype==AttackTypes.Physical) || (attacktype==AttackTypes.Ranged)){
			if(this.row==0){
				return this.def+this.equipDef();
			}else{
				return this.def+5+this.equipDef();
			}
		}else
		{
			return this.mdef+this.equipMDef();
		}
		
	};
	this.hurt = function(dmg){
		this.hp-=dmg;
		this.damagetaken+=dmg;
		if (this.hp<0) {this.hp=0; this.alive=false; 			var tmpstr=this.name + " died.";
			console.log(tmpstr);//todo MONSOLE
			}
	}; 
	
	this.heal=function(val){
		if (this.alive) {
			this.hp+=val;
			if (this.hp>this.maxhp) {this.hp=this.maxhp;}
		}
	};
	
	this.giveAli= function(val){
		this.ali+=val;
		if(this.ali>100) {this.ali=100;}
		if(this.ali<0) {this.ali=0;}
	};
	
	this.changeClass=function(){
		
	};
	
	this.giveStatus=function(stats){
		this.status[stats]=true;
	}
	
	this.removeStatus=function(stats){
		this.status[stats]=false;
	}
	
	
	this.hasStatus=function(stats){
		if(this.status[stats]) {return true;}
		return false;
	}
	
	this.update = function (usqd,esqd){
		if(paused) {return;}
		if(battleReport) {return;}
		if(battlePause) {return;}//todo for now
		if (this.attacking>0) {this.attacking--; return;}
		if (this.hurting>0) {this.hurting--; return;}
		if (this.atb>battlespeed) {
			//gambits, attack
			if(this.hasStatus(Status.Poison)){
					this.hurt(3);
			}
			this.atb=0;
			var targe=null;
			if(this.getAttackType()==AttackTypes.Heal)
			{
				if((this.class==9) || (this.class==11)){
					var deadguy=null;
					for(var i=0;i<usqd.numUnits;i++){
						if (!usqd.units[i].alive){
							deadguy=usqd.units[i];
							continue;
						}
					}
					if(deadguy!=null)
					{
						deadguy.alive=true;
						deadguy.heal(this.mag);
						//esqd.damaged-=this.mag;
						this.giveExp(this.mag);
						var tmpstr=this.name + " revived " +deadguy.name;
						console.log(tmpstr);
					}else  if (this.class==11) 
					{
						var tmpstr=this.name + " healed the party" ;
						console.log(tmpstr);
						for(var i=0;i<usqd.numUnits;i++){
							if (usqd.units[i].alive) {
								usqd.units[i].heal(20);
							}
						}
	
					}else
					{
						targe=usqd.getWeakestHeal();
						targe.heal(this.mag);
						esqd.damaged-=this.mag;
						this.giveExp(this.mag);
						var tmpstr=this.name + " healed " +targe.name+ " " +this.mag+ " points.";
						console.log(tmpstr);
					}
				}else 
				{
					targe=usqd.getWeakestHeal();
					targe.heal(this.mag);
					esqd.damaged-=this.mag;
					this.giveExp(this.mag);
					var tmpstr=this.name + " healed " +targe.name+ " " +this.mag+ " points.";
					console.log(tmpstr);
				}
			}else
			{
			if(this.equipment[0].hitAll){
				for(var i=0;i<esqd.numUnits;i++)
				{
					if (esqd.units[i].alive)
					{
						targe=esqd.units[i];
						var delt=Math.floor(this.getAttack()-targe.getDef(this.getAttackType()));
						if (delt<1) {delt=1;};
						if(Math.floor(Math.random()*20) > targe.evade) {
						var temper="";
						if(Math.floor(Math.random()*CRIT_CHANCE) < this.luck) { delt=delt+(delt/2); temper=" critical";} //critical hit
							
						var tmpstr=this.name + temper+" hit " +targe.name+ " for " +delt+ " damage.";
						if(usqd.team==0) {
							console.log(tmpstr);//todo MONSOLE
						}else
						{
							console.warn(tmpstr);
						}
						this.giveExp(delt);
						this.damagedelt+=delt;
						targe.hurt(delt); 
						if(!targe.alive) { 
							this.kills++;
							if(targe.ali>this.ali+5){this.giveAli(2);}
							if(targe.ali<this.ali-5){this.giveAli(2);}
						}
						if((targe==esqd.leader) &&(!targe.alive)) {esqd.pickNewLeader();}
						this.attacking=10;
						targe.hurting=20;
						usqd.turns++;
						usqd.damaged+=delt;
					}
				}
			}
			}else
			{
				if (usqd.battleAI==0) //weakest
				{
					targe=esqd.getWeakest();
				}else if (usqd.battleAI==1) //Strongest
				{
					targe=esqd.getStrongest();
				}else if (usqd.battleAI==2) //leader
				{
					targe=esqd.leader;
					if(!targe.alive) {targe=esqd.getWeakest(); }
				}
				if((esqd!=null) && (esqd.alive)){
					if(targe==null) { return;}//esqd.checkSurvivors(); return;}
					var delt=Math.floor(this.getAttack()-targe.getDef(this.getAttackType()));
					if (delt<1) {delt=1;};
					if(Math.floor(Math.random()*20) > targe.evade) {
					var temper="";
					if(Math.floor(Math.random()*CRIT_CHANCE) < this.luck) { delt=delt+(delt/2); temper=" critical";} //critical hit
						
						var tmpstr=this.name + temper+" hit " +targe.name+ " for " +delt+ " damage.";
						if(usqd.team==0) {
							console.log(tmpstr);//todo MONSOLE
						}else
						{
							console.warn(tmpstr);
						}
						this.giveExp(delt); //todo exp based on levels
						this.damagedelt+=delt;
						targe.hurt(delt); 
						if(!targe.alive) { 
							this.kills++;
							if(targe.ali>this.ali+5){this.giveAli(2);}
							if(targe.ali<this.ali-5){this.giveAli(2);}
						}
						if((targe==esqd.leader) &&(!targe.alive)) {esqd.pickNewLeader();}
						this.attacking=10;
						targe.hurting=20;
						usqd.turns++;
						usqd.damaged+=delt;
					}else {this.attacking=10; usqd.turns++;this.attacking=10; tmpstr = this.name + " missed "+ targe.name; console.log(tmpstr);} //miss
				}else {endBattle(usqd,esqd);}
			}
			}
			
		}
		if((this.alive) &&(this.hp<1)) {
			this.hp=0; 
			this.alive=false;
			var tmpstr=this.name + " died.";
			console.log(tmpstr);//todo MONSOLE
			//usqd.checkSurvivors();
		}



		if(this.hasStatus(Status.Haste)){
				this.atb+=(this.speed*2);
		}else if(this.hasStatus(Status.Slow)){
				this.atb+=(this.speed/2);
		}else {
			this.atb+=this.speed;
		}
	};
	
	this.rowswap=function(){
		if (this.row==0) { this.row=1;}
		else if (this.row==1) { this.row=0;}
	};
	
	this.setClass=function() {
		var cla=this.class;
		if(cla==0) { //bear
			this.maxhp=60;
			this.hp=60;
			this.attack=14
			this.maxmp=40;
			this.speed=2;
			this.luck=5;
			this.ali=50;
			this.viewrange=5;
			this.def=2;
			this.mdef=3;
			this.cost=10;
			this.canlead=true;
			this.attackType[0]=AttackTypes.Physical;
			this.attackType[1]=AttackTypes.Physical;
			this.equipment[0]=swords[0];
			this.equipment[1]=breastplate;
			this.sprite = Sprite("bear1");
			if (this.gender==1) {this.sprite = Sprite("beargirl");}
		}else if(cla==3) { //frog
			this.maxhp=60;
			this.hp=60;
			this.attack=11;
			this.maxmp=40;
			this.speed=3;
			this.luck=5;
			this.ali=20;
			this.viewrange=5;
			this.def=2;
			this.mdef=5;
			this.cost=10;
			this.canlead=true;
			this.attackType[0]=AttackTypes.Physical;
			this.attackType[1]=AttackTypes.Ranged;
			this.equipment[1]=breastplate;
			this.sprite = Sprite("frogman1");
			if (this.gender==1) {this.sprite = Sprite("froggirl");}
		}else if(cla==2) { //wizard
			this.maxhp=50;
			this.hp=50;
			this.attack=5;
			this.maxmp=40;
			this.speed=2;
			this.luck=5;
			this.ali=35;
			this.viewrange=5;
			this.sprite = Sprite("wizard");
			this.equipment[0]=rod;
			this.equipment[1]=robe;
			if (this.gender==1) {this.sprite = Sprite("wizardgirl");}
			this.def=2;
			this.mdef=5;
			this.mag=20;
			this.cost=10;
			this.canlead=true;
			this.attackType[0]=AttackTypes.Physical;
			this.attackType[1]=AttackTypes.Magical;
		}else if(cla==1) { //shoe
			this.maxhp=60;
			this.hp=60;
			this.attack=9;
			this.maxmp=40;
			this.speed=4;
			this.evade=4;
			this.luck=5;
			this.ali=10;
			this.viewrange=5;
			this.def=2;
			this.mdef=5;
			this.cost=10;
			this.canlead=false;
			this.sprite = Sprite("shoe");
			this.attackType[0]=AttackTypes.Physical;
			this.attackType[1]=AttackTypes.Physical;
			if (this.gender==1) {this.sprite = Sprite("shoegirl");}
		}else if(cla==4) { //archer
			this.maxhp=40;
			this.hp=40;
			this.attack=5;
			this.maxmp=40;
			this.speed=3;
			this.luck=5;
			this.ali=40;
			this.viewrange=5;
			this.def=2;
			this.mdef=5;
			this.cost=10;
			this.equipment[0]=bow[0];
			this.equipment[1]=shirt;
			this.canlead=true;
			this.sprite = Sprite("archer");
			this.attackType[0]=AttackTypes.Ranged;
			this.attackType[1]=AttackTypes.Ranged;
			if (this.gender==1) {this.sprite = Sprite("archergirl");}
		}else if(cla==5) { //healer
			this.maxhp=30;
			this.hp=30;
			this.attack=5;
			this.maxmp=40;
			this.speed=2;
			this.luck=5;
			this.ali=60;
			this.viewrange=5;
			this.def=2;
			this.mdef=5;
			this.mag=15;
			this.cost=10;
			this.equipment[0]=rod;
			this.equipment[1]=robe;
			this.canlead=true;
			this.sprite = Sprite("healer");
			this.attackType[0]=AttackTypes.Physical;
			this.attackType[1]=AttackTypes.Heal;
			if (this.gender==1) {this.sprite = Sprite("healergirl");}
		}else if(cla==6) { //ninja
			this.maxhp=30;
			this.hp=30;
			this.attack=5;
			this.maxmp=40;
			this.speed=2;
			this.luck=5;
			this.ali=30;
			this.viewrange=5;
			this.def=2;
			this.evade=9;
			this.mdef=5;
			this.mag=15;
			this.cost=10;
			this.equipment[0]=katana[0];
			this.equipment[1]=robe;
			this.canlead=true;
			this.sprite = Sprite("ninja");
			this.attackType[0]=AttackTypes.Physical;
			this.attackType[1]=AttackTypes.Ranged;
			if (this.gender==1) {this.sprite = Sprite("ninjagirl");}
		}else if(cla==7) { //winger
			this.maxhp=40;
			this.hp=40;
			this.attack=8;
			this.maxmp=40;
			this.speed=3;
			this.luck=5;
			this.ali=40;
			this.viewrange=5;
			this.def=2;
			this.mdef=5;
			this.mag=15;
			this.cost=10;
			this.equipment[0]=spear[0];
			this.equipment[1]=robe;
			this.canlead=true;
			this.sprite = Sprite("winger");
			this.attackType[0]=AttackTypes.Physical;
			this.attackType[1]=AttackTypes.Physical;
			if (this.gender==1) {this.sprite = Sprite("wingergirl");}
		}else if(cla==8) { //knight
			this.maxhp=40;
			this.hp=40;
			this.attack=12;
			this.maxmp=40;
			this.speed=3;
			this.luck=5;
			this.ali=50;
			this.viewrange=5;
			this.def=12;
			this.mdef=5;
			this.mag=15;
			this.cost=10;
			this.equipment[0]=swords[1];
			this.equipment[1]=chainmail;
			this.canlead=true;
			this.sprite = Sprite("knight");
			this.attackType[0]=AttackTypes.Physical;
			this.attackType[1]=AttackTypes.Physical;
			if (this.gender==1) {this.sprite = Sprite("knightgirl");}
		}else if(cla==9) { //cleric
			this.maxhp=50;
			this.hp=40;
			this.attack=8;
			this.maxmp=40;
			this.speed=3;
			this.luck=5;
			this.ali=70;
			this.viewrange=5;
			this.def=2;
			this.mdef=5;
			this.mag=30;
			this.cost=10;
			this.equipment[1]=robe;
			this.canlead=true;
			this.sprite = Sprite("cleric");
			this.attackType[0]=AttackTypes.Magical;
			this.attackType[1]=AttackTypes.Heal;
			if (this.gender==1) {this.sprite = Sprite("clericgirl");}
		}else if(cla==10) { //sage
			this.maxhp=60;
			this.hp=50;
			this.attack=5;
			this.maxmp=40;
			this.speed=2;
			this.luck=5;
			this.ali=30;
			this.viewrange=5;
			this.sprite = Sprite("sage");
			this.equipment[0]=icemagic[2];
			this.equipment[1]=robe;
			if (this.gender==1) {this.sprite = Sprite("sagegirl");}
			this.def=2;
			this.mdef=5;
			this.mag=20;
			this.cost=10;
			this.canlead=true;
			this.attackType[0]=AttackTypes.Physical;
			this.attackType[1]=AttackTypes.Magical;
		}else if(cla==11) { //angel
			this.maxhp=60;
			this.hp=50;
			this.attack=5;
			this.maxmp=40;
			this.speed=2;
			this.luck=5;
			this.ali=90;
			this.viewrange=5;
			this.sprite = Sprite("angel");
			this.equipment[0]=icemagic[1];
			this.equipment[1]=robe;
			if (this.gender==1) {this.sprite = Sprite("angelgirl");}
			this.def=2;
			this.mdef=15;
			this.mag=30;
			this.cost=10;
			this.canlead=true;
			this.attackType[0]=AttackTypes.Magical;
			this.attackType[1]=AttackTypes.Heal;
		}else if(cla==12) { //darkknight
			this.maxhp=70;
			this.hp=50;
			this.attack=35;
			this.maxmp=40;
			this.speed=2;
			this.luck=5;
			this.ali=10;
			this.viewrange=5;
			this.sprite = Sprite("darkknight");
			this.equipment[0]=swords[1];
			this.equipment[1]=breastplate;
			if (this.gender==1) {this.sprite = Sprite("darkknightgirl");}
			this.def=12;
			this.mdef=15;
			this.mag=30;
			this.cost=10;
			this.canlead=true;
			this.attackType[0]=AttackTypes.Physical;
			this.attackType[1]=AttackTypes.Physical;
		}else if(cla==13) { //palladin
			this.maxhp=90;
			this.hp=50;
			this.attack=25;
			this.maxmp=40;
			this.speed=2;
			this.luck=5;
			this.ali=90;
			this.viewrange=5;
			this.sprite = Sprite("whiteknight");
			this.equipment[0]=icemagic[1];
			this.equipment[1]=robe;
			if (this.gender==1) {this.sprite = Sprite("whiteknightgirl");}
			this.def=6;
			this.mdef=15;
			this.mag=60;
			this.cost=10;
			this.canlead=true;
			this.attackType[0]=AttackTypes.Physical;
			this.attackType[1]=AttackTypes.Heal;
		}else if(cla==14) { //polar
			this.maxhp=90;
			this.hp=50;
			this.attack=25;
			this.maxmp=40;
			this.speed=2;
			this.luck=9;
			this.ali=90;
			this.viewrange=5;
			this.sprite = Sprite("polarbear");
			this.equipment[0]=icemagic[1];
			this.equipment[1]=breastplate
			if (this.gender==1) {this.sprite = Sprite("polarbear");}
			this.def=16;
			this.mdef=15;
			this.mag=30;
			this.cost=10;
			this.canlead=true;
			this.attackType[0]=AttackTypes.Physical;
			this.attackType[1]=AttackTypes.Heal;
		}
		
	};
		this.setClass();
		this.hp=this.maxhp;
		this.mp=this.maxmp;
		if (this.gender==2) {this.name="Nancy";}
}

function numSquads(team){
	var count=0;
	for(var i=0;i<armies[0].numSquads;i++) 
	{
		if(team==0) {if((armies[0].squads[i].alive) &&(armies[0].squads[i].deployed)) {count++;} }
	}	
	for(var i=0;i<armies[1].numSquads;i++) 
	{
		if(team==1) {if((armies[1].squads[i].alive) &&(armies[1].squads[i].deployed)){count++;} }
	}
	return count;
};

function numArmyUnits(team){
	var count=0;
	if(team==0){
		for(var i=0;i<armies[0].numSquads;i++) 
		{
			if(armies[0].squads[i].alive) 
			{
				count+=armies[0].squads[i].numSquadUnits();
			}
		}
	}else if (team==1) {
		 for(var i=0;i<armies[1].numSquads;i++) 
		 {
			 if(armies[1].squads[i].alive) 
				{
					for(var j=0;j<armies[1].squads[i].numUnits;j++){
						if(armies[1].squads[i].units[j].alive) {count++;}
					}
				}

		}
	}
	return count;
};

maps = [];
maps.push(Map());

function town() {
	this.x = 1;
	this.y = 1;
	this.base=false;
	this.name="Qarth";
	this.team=1;
	this.pop=2;
	this.width=32;
	this.height=32;
	this.sprite = Sprite("town");
	this.bsprite=new Array(2);
	this.bsprite[0] = Sprite("townblue");
	this.bsprite[1] = Sprite("townblues");
	this.rsprite=new Array(2);
	this.rsprite[0] = Sprite("townred");
	this.rsprite[1] = Sprite("townreds");
	this.checkCollision=function(squd){
		return ((squd.alive)&&(squd.x>this.x-1) && (squd.x<this.x+4) && (squd.y>this.y-1) && (squd.y<this.y+4)); 
	};
	this.draw=function(cam)
	{
		if(maps[0].zoom<2) {
			this.sprite.draw(canvas,
				(this.x * 16  - 8 - cam.x * 16) / maps[0].zoom, 
				(this.y * 16  - 8- cam.y * 16) / maps[0].zoom);
			if(this.team==0)
			{
				this.bsprite[0].draw(canvas,
				(this.x * 16  - 8 - cam.x * 16) / maps[0].zoom, 
				(this.y * 16  - 8- cam.y * 16) / maps[0].zoom);
			}else if(this.team==1)
			{
				this.rsprite[0].draw(canvas,
				(this.x * 16  - 8 - cam.x * 16) / maps[0].zoom, 
				(this.y * 16  - 8- cam.y * 16) / maps[0].zoom);
			}
		}else
		{
			if(this.team==0)
			{
				this.bsprite[1].draw(canvas,
				(this.x * 16  - 8 - cam.x * 16) / maps[0].zoom, 
				(this.y * 16  - 8- cam.y * 16) / maps[0].zoom);
			}else if(this.team==1)
			{
				this.rsprite[1].draw(canvas,
				(this.x * 16  - 8 - cam.x * 16) / maps[0].zoom, 
				(this.y * 16  - 8- cam.y * 16) / maps[0].zoom);
			}
		}
	};
};

towns=new Array(numTowns+1);
function initTowns(){

	for(var i=0;i<numTowns;i++)
	{
		towns[i] =new town();
		var thx=Math.floor(Math.random()*190);
		var thy=Math.floor(Math.random()*245);
		towns[i].x=thx;
		towns[i].y=thy;
		maps[0].tiles[thx][thy].data=0;
		maps[0].tiles[thx+1][thy+1].data=0;
		maps[0].tiles[thx][thy+1].data=0;
		maps[0].tiles[thx+1][thy].data=0;
		maps[0].tiles[thx+1][thy].data=0;
		maps[0].tiles[thx+2][thy+1].data=0;
		maps[0].tiles[thx+1][thy+1].data=0;
		maps[0].tiles[thx+2][thy].data=0;
		maps[0].tiles[thx][thy+1].data=0;
		maps[0].tiles[thx+1][thy+2].data=0;
		maps[0].tiles[thx][thy+2].data=0;
		maps[0].tiles[thx+1][thy+1].data=0;
		maps[0].tiles[thx+2][thy+2].data=0;
		towns[i].name=townnames[Math.floor(Math.random()*40)];
	}

	towns[0].x=2;
	towns[0].y=2;
	towns[0].team=0;
	towns[0].name="King's Landing";

	towns[1].x=180;
	towns[1].y=256;
	towns[1].team=1;
	towns[1].name="The Dreadfort";
}

function endgame(){
	if(winmode==0)
	{
		if(towns[0].team==1) { console.log("YOU LOSE");}
		if(towns[1].team==0) { console.log("A WINNER IS YOU");}
	}else if(winmode==1)
	{
		var toaster=true;
		for(var i=0;i<numTowns;i++)
		{
			if(towns[i].team!=0) {toaster=false;}
		}
		//if(toaster) {console.log("A WINNER IS YOU");}
		
		toaster=true;
		for(var i=0;i<numTowns;i++)
		{
			if(towns[i].team!=1) {toaster=false;}
		}
		//if(toaster) {console.log("YOU LOSE");}
	}
};


	


function army() {
	this.numSquads=8;
	this.team=0;
	this.ali=50;
	this.basex=2;
	this.basey=2;
	this.opinion=50;
	this.fieldAI=AITypes.Random;
	this.cards=new Array(5);
	this.cards[0]=new card();
	this.cards[1]=new card();
	this.cards[2]=new card();
	this.cards[3]=new card();
	this.cards[4]=new card();
	this.numLooseUnits=2;
	this.looseUnits=new Array (64);
	this.looseUnits[0]=new unit();
	this.looseUnits[1]=new unit();
	this.gold=4000; 
	this.name="Fighting Mongooses"
	this.squads=new Array (TEAM_SIZE);
	this.wins=0;
	this.losses=0;
	this.lastDeployed=1;
	this.getOpinion=function(){
		return this.opinion;
	};
	
	this.addLoose=function(uknit)
	{
		if (this.numLooseUnits>9) {return false;}
		this.looseUnits[this.numLooseUnits]=uknit;//new unit();
		this.numLooseUnits++;
	};
	
	this.removeLoose=function(id)
	{
		if (this.numLooseUnits<0) {return false;}
		this.looseUnits[id]=null;
		this.numLooseUnits--;
	};
	this.init=function(side){
		this.numSquads=8;
		this.team=side;
		this.gold=4000;
		this.name="Fighting Mongooses"
		for(var i=0;i<this.numSquads;i++){
			//if(i=0) { this.squads[i].numUnits=5;}
			this.squads[i]=new squad();
			this.squads[i].ID=i;
		}
		this.leader=this.squads[0].leader;
		if (side==1) {
				this.leader=this.squads[0].leader;
				this.leader.hp+=100
				this.leader.equipment[1]=breastplate;
		}
	
	};
}

var armies=new Array (2);
armies[0]=new army();
armies[1]=new army();
function squad() {
	//list of units
	//list of items
	//list of blokemon
	//leader
	//AI 
	//target
	//waypoints?
	this.x = 2;
	this.y = 2;
	this.army=0;
	this.basex=2;
	this.basey=2;
	this.battleAI=0;
	this.alive=true;
    this.numUnits=Math.floor(Math.random()*3)+3;//3;
	this.battling=false;
	this.units = new Array (5);
	this.units[0]= new unit();
	this.units[1]= new unit();
	this.units[2]= new unit();
	this.units[3]= new unit();
	this.units[4]= new unit();
	//for(var i=0;i<this.numUnits;i++) { this.units[i].alive=true;}
	this.leader = this.units[0];
	this.knockback=7;
	this.deployed=false;
	this.width=32;
	this.height=32;
	this.bx = 8;
	this.by = 8;
	this.dx = 0;
	this.dy = 0;
	this.team=0;
	this.cohesion=50;
	this.damaged=0;
	this.leaderless=false;
	this.ID=89;
	this.turns=0;
	this.sprite = this.leader.sprite;
	this.path = null;
	this.nextMove = null;
	this.nextTile = {x: this.x, y: this.y};
	this.inNextTile = false;
	
	this.addUnit=function(uknit)
	{
		if (this.numUnits>4) {return false;}
		this.units[this.numUnits]=uknit;//new unit();
		this.numUnits++;
	};
	
	this.removeUnit=function(id)
	{
		if (this.numUnits<1) {return false;}
		this.units[id].exists=false;
		this.units[id].alive=false;
		
		for(var i=id;i<this.numUnits-1;i++)
		{
			this.units[i]=this.units[i+1];
	
		}
		/*this.units[this.numUnits].alive=false;
		this.units[this.numUnits].exists=false;
		this.units[this.numUnits].alive=null;*/
		this.numUnits--;
	};
	
	this.deploy=function()
	{
		var cst = this.getCost();
		if (armies[this.team].gold<cst) { return; console.log("Not enough gold to deploy"+ this.leader.name+ "'s unit.");}
			armies[this.team].gold-=cst;
		//revive and heal all just in case.
		this.deployed=true;
	}
	
	this.healStatus=function(){
		for(var i=0;i<numUnits;i++){
			this.units[i].esuna();
		}
	};
	
	this.refresh=function(){
		for(var i=0;i<numUnits;i++){
			this.units[i].alive=true;
			this.units[i].hp=this.units[i].maxhp;
			this.units[i].mp=this.units[i].maxmp;
			this.units[i].atb=0;
			//reset stats?
		}
		this.healStatus();
	}
	
	this.row=function(){
		for (var i=0;i<this.numUnits;i++)
		{
				if (this.units[i].row==0) { this.units[i].row=1;}
				else if (this.units[i].row==1) { this.units[i].row=0;}
		}
	};
	this.heal=function(){
	if (healcount<healrate) {healcount++; return;}
		healcount=0;
		for(var i=0;i<this.numUnits;i++){
			if (this.units[i].alive) {
				this.units[i].hp++;
				if (this.units[i].hp>this.units[i].maxhp) {this.units[i].hp=this.units[i].maxhp;}
			}
		}
	}
	
	this.getCost=function(){
		return 100;
	};
	this.flee= function(c)
	{
		if(Math.floor(Math.random()*30) > (15)) {
			this.turns=20;
			this.damaged=-1;
		}else
		{
			console.log("Couldn't escape!");
		}
	};
	this.getHP=function(){
		var herbert=0;
		for (var i=0;i<this.numUnits;i++) {
			if(this.units[i].alive) {
				herbert=herbert+this.units[i].hp;
			}
		}
		return herbert;
	};
	this.getMaxHP=function(){
		var herbert=0;
		for (var i=0;i<this.numUnits;i++) {
			if(this.units[i].alive) {
				herbert=herbert+this.units[i].maxhp;
			}
		}
		return herbert;
	};
	this.getMP=function(){
		var herbert=0;
		for (var i=0;i<this.numUnits;i++) {
			if(this.units[i].alive) {
				herbert=herbert+this.units[i].mp;
			}
		}
		return herbert;
	};
	
	this.pickNewLeader=function() { 
		var oldlead=this.leader;
		for(var i=0;i<this.numUnits;i++)
		{	
			if((this.units[i].alive) && (this.units[i].canlead)) {
			this.leader=this.units[i];
			console.log(this.leader.name + " took over " + oldlead.name+"'s squad" );
				return;
			}
		}
		if(this.alive==true){
			console.log(this.leader.name + "'s squad has no qualified leader! returning to base!" );
			this.leaderless=true;
			this.clearDestination();
			//this.setDestination(this.basex,this.basey,maps[0]);
		}
		return ;
	};
	
	this.smartRow=function()
	{
		for(var j=0;j<this.numUnits;j++)
		{
			if(this.units[j].alive) {
				this.units[j].row=0;
				if ((this.units[j].class==5) || (this.units[j].class==4)||(this.units[j].class==2))
				{
					this.units[j].row=1;
				}
			}
		}
	};
	
	this.numSquadUnits=function() {
	var count=0;
	if(this.alive) 
	{
		for(var j=0;j<this.numUnits;j++)
		{
			if(this.units[j].alive) {count++;}
		}
	}
	return count;
   };

	this.getStrongest=function(){
		var strongest=null;
		var h=0;
		for(var i=0;i<this.numUnits;i++){
			if(this.units[i].hp>h) {
				h=this.units[i].hp;
				strongest=this.units[i];
			}
		}
		return strongest;
	};
	
	this.checkSurvivors=function() { 	//check for any living units if not kill squad.
		var anylife=false;
		for(var j=0;j<this.numUnits;j++)
		{
			if(this.units[j].alive) {anylife=true;}
		}
		if (anylife==false) { 
					this.alive=false;
					return false;
		}
		return true;
	};

	this.getWeakest=function() {
		var weakest=null;
		var h=999;
		for(var i=0;i<this.numUnits;i++){
			if((this.units[i].hp<h) && (this.units[i].hp>0)) {
				h=this.units[1].hp;
				weakest=this.units[i];
			}
		}
		return weakest;
	};
	
	
	this.getWeakestHeal=function() {
		var weakest=this.leader;
		var h=999;
		for(var i=0;i<this.numUnits;i++){
			if((this.units[i].hp<h) && (this.units[i].hp>0) && (this.units[i].hp<this.units[i].maxhp)) {
				h=this.units[i].hp;
				weakest=this.units[i];
			}
		}
		return weakest;
	};

	this.draw = function(cam) {
		  if ((!this.alive) ||(!this.deployed)){return;} //TODO: also check visual range for enemies
		  this.sprite.draw(canvas,
                                   (this.x * 16 + (Math.round(this.bx) - 8) - cam.x * 16) / maps[0].zoom, 
                                   (this.y * 16 + (Math.round(this.by) - 8) - cam.y * 16) / maps[0].zoom);
		  if (this.leaderless){
		  noleader.draw(canvas,
                                   (this.x * 16 + (Math.round(this.bx) - 8) - cam.x * 16) / maps[0].zoom, 
                                   (this.y * 16 + (Math.round(this.by) - 8) - cam.y * 16) / maps[0].zoom);
		}
        };

	this.drawdest = function(cam) {
		  if ((!this.alive) ||(!this.deployed)){return;} 
		  flagsprite.draw(canvas, ((this.dx * 16 - cam.x * 16)+8) / maps[0].zoom, ((this.dy * 16 - cam.y * 16)+8) / maps[0].zoom);
        };
 
	this.checkcollision= function() {

			if (this.team==0) {
				for(var i=0;i<armies[1].numSquads;i++){
					if ((this.alive)&&(armies[1].squads[i].x+2>this.x) && (armies[1].squads[i].x-2<this.x) && (armies[1].squads[i].y+2>this.y) && (armies[1].squads[i].y-2<=this.y)) {return armies[1].squads[i];} //TODO:START BATTLE
				}
			}else if(this.team==1) {
				for(var i=0;i<armies[0].numSquads;i++){
					if ((this.alive)&&(armies[0].squads[i].x+2>this.x) && (armies[0].squads[i].x-2<this.x) && (armies[0].squads[i].y+2>this.y) && (armies[0].squads[i].y-2<=this.y)) {return armies[0].squads[i];}
				}
			}

		return null;
	};
	this.update = function(map) {
		if ((paused) || (!this.alive) ||(!this.deployed)|| (battleReport) || (isBattle)) {return;}
	   targ=this.checkcollision();
	   if(this.team==1) {targ=null;} 
	   if ((targ!=null) && (targ.alive)) {
			mode=1; isBattle=true; combatants[0]=this; combatants[1]=targ; camera.center(this); SELECTED=this.ID;
			var tmpstr=this.leader.name + "'s squad encountered an enemy @ " +this.x + " , " +this.y;
					console.log(tmpstr);//todo MONSOLEreturn;
		};
		if((this.leaderless==true) && (this.path==null)){
			this.setDestination(this.basex,this.basey,maps[0])}
		for(var i=0;i<numTowns;i++)
		{
			if(towns[i].checkCollision(this)) 
			{
				if(towns[i].team!=this.team){
					towns[i].team=this.team;
					if(towns[i].team==0) {armies[0].opinion+=5;console.log(this.leader.name+"'s unit liberated " + towns[i].name);}
					if(towns[i].team==1) {armies[0].opinion-=10; console.warn(this.leader.name+"'s unit captured " + towns[i].name);}
				}
				this.heal();
			}
		}
       if( !this.nextMove ) {
	     this.updateNextMove();
	   }
	   if( !this.nextMove ) {
	     return;
	   }
	   var terrain = map.tiles[this.nextTile.x][this.nextTile.y].data;
	   var speed = (terrain == 4 ? 2 : 4);
	   if (this.leaderless) {speed=3;} //PROBLEM?
	   if((terrain==4) &&(this.units[0].class==3)) {speed=4};

           speed = speed / map.zoom;

	   if( this.nextMove.x > this.x ) {
	     this.bx += speed;
	   } else if( this.nextMove.x < this.x ) {
	     this.bx -= speed;
	   }
	   if( this.nextMove.y > this.y ) {
	     this.by += speed;
	   } else if( this.nextMove.y < this.y ) {
	     this.by -= speed;
	   }

	   if( !this.inNextTile && ( this.bx <= 0 || this.bx >= 16 || this.by <= 0 || this.by >= 16 )) {
	   	 this.nextTile = {};
		 this.nextTile.x = this.nextMove.x;
		 this.nextTile.y = this.nextMove.y;
//		 if( this.bx == 0 ) { this.bx = 16 } else if( this.bx == 16 ) { this.bx = 0; } 
//		 if( this.by == 0 ) { this.by = 16 } else if( this.by == 16 ) { this.by = 0; }		
		 this.inNextTile = true;
	   }
	   if(( this.bx >= 24 || this.bx <= -8 ) || ( this.by <= -8 || this.by >= 24 )) {
		 this.bx = this.by = 8;
		 this.inNextTile = false;
		 this.x = this.nextMove.x;
		 this.y = this.nextMove.y;
	  	 this.nextTile = {x: this.x, y: this.y};

		 this.nextMove = null;

	   }
	}
	this.updateNextMove = function() {
	  if( !this.path ) {
	    return;
	  }
	  this.nextMove = this.path.shift();
	  if( !this.nextMove ) {
	    this.path = null; return;
	  }
	};
	this.isWalking = function() {
	  return this.path != null;
	};
	this.clearDestination=function(){
		this.path=null; this.dx = 0; this.dy = 0; this.nextMove = null;
	};
	this.setDestination = function(x, y, map) {
		this.clearDestination();
	  this.path = map.getPath(this.x, this.y, x, y,this);
	  this.dx=x;
	  this.dy=y;
	};
}
function time(){
	this.hours=0; 
	this.minutes=0;
	this.seconds=0;
	this.days=0;
	this.update=function(){
	this.seconds++;
	if(this.seconds>60){
	
		this.minutes++;
		if (this.minutes>60){
			this.hours++;
			if(this.hours>24) {this.hours=0; this.days++;} 
			this.minutes=0;
			this.seconds=0;
		}
	}
	};
}
var theTime=new time();
function endBattle(usqd,esqd){
	isBattle=false;
	battleReport=true;
	battleendtick=100;

	if(usqd.damaged>=esqd.damaged) //win
	{
		if(usqd.x>esqd.x) {
			esqd.x-=usqd.knockback;
			if(esqd.x<1) {esqd.x=0;}
		}else
		{
			esqd.x+=usqd.knockback
			if(esqd.x>MAP_WIDTH) {esqd.x=MAP_WIDTH-1;}
		}
		if(usqd.y>esqd.y) {
			esqd.y-=usqd.knockback;
			if(esqd.y<1) {esqd.y=0;}
		}else
		{
			esqd.y+=usqd.knockback;
			if(esqd.y>MAP_HEIGHT) {esqd.y=MAP_HEIGHT-1;}
		}
		//esqd.path=null;
		esqd.setDestination(usqd.x,usqd.y,maps[0]);
		console.log("win @", usqd.x,usqd.y) 
		won="Victory!";
		armies[1].losses++;
		armies[0].wins++;
		usqd.cohesion++;
		for(var i=0;i<esqd.numUnits;i++)
		{
			esqd.units[i].battleslost++;
		}
		for(var i=0;i<usqd.numUnits;i++)
		{
			usqd.units[i].battleswon++;
		}
	}else if(usqd.damaged<esqd.damaged) {//lose
		if(esqd.x>usqd.x) {
			usqd.x-=esqd.knockback;
			if(usqd.x<1) {usqd.x=1;}
		}else
		{
			usqd.x+=esqd.knockback;
			if(usqd.x>MAP_WIDTH-1) {usqd.x=MAP_WIDTH-1;}
		}
		if(esqd.y>usqd.y) {
			usqd.y-=esqd.knockback;
			if(usqd.y<1) {usqd.y=1;}
		}else
		{
			usqd.y+=esqd.knockback;
			if(usqd.y>MAP_HEIGHT-1) {usqd.y=MAP_HEIGHT-1;}
		}
		//usqd.setDestination(usqd.x,usqd.y,maps[0]);
		usqd.clearDestination();
		console.log("loss");
		usqd.cohesion--;
		won="Defeat!"
		armies[0].losses++;
		armies[1].wins++;
		for(var i=0;i<esqd.numUnits;i++)
		{
			esqd.units[i].battleswon++;
		}
		for(var i=0;i<usqd.numUnits;i++)
		{
			usqd.units[i].battleslost++;
		}
		if(usqd.turns==20) {won = "Ran away";}
		//paused=true; //TODO
	}

	usqd.turns=0;
	usqd.damaged=0;
	esqd.turns=0;
	esqd.damaged=0;
	for(var i=0;i<usqd.numUnits;i++)
	{
		usqd.units[i].atb=0;
		usqd.units[i].attacking=0;
		usqd.units[i].hurting=0;
	}
	for(var i=0;i<esqd.numUnits;i++)
	{
		esqd.units[i].atb=0;
		esqd.units[i].attacking=0;
		esqd.units[i].hurting=0;
	}
	paused=battlePause;
	
};

function textbox(msg) {  //draws a text box
    canvas.save();
    canvas.globalAlpha=0.80;
    canvas.fillStyle = "#DCDCDC";
    canvas.fillRect(30,400,840,210);
    
    canvas.fillStyle = "#483D8B ";
    canvas.fillRect(40,410,820,190);
    
    canvas.font = "16pt Calibri";
    canvas.textAlign = "left";
    canvas.textBaseline = "middle";
    canvas.fillStyle = "white";
    canvas.fillText(msg, 60,410+15);
    
    canvas.restore();
};

function armyInfo(sq){
	canvas.font = "14pt Calibri";
	canvas.textAlign = "left";
	canvas.textBaseline = "middle";
	canvas.fillStyle = "white";
	canvas.fillText(armies[0].name, 360, 8);
	canvas.fillText("Gold: "+armies[0].gold, 515, 8);

	canvas.fillText("Wins/losses: " +armies[0].wins+ " / " + armies[0].losses, 515, 24);
	canvas.fillText("Deployed: "+armies[0].lastDeployed, 515, 36);
	canvas.fillText("Days: "+theTime.days, 515, 56);
	canvas.fillText("Selected: " + SELECTED, 680, 8);
	canvas.fillText("Squads: "+armies[0].numSquads, 680, 24);
	canvas.fillText("Units: " + numArmyUnits(0), 680, 38);
	canvas.fillText(armies[0].squads[SELECTED].leader.name + "'s unit", 680, 56);
	
	canvas.fillStyle = "white";
    canvas.fillRect(810+37,114,8,-(armies[0].opinion/2));//getAli());
	thingysprite.draw(canvas,810,8);
	var timeRound =1;
	//if(theTime.hours>4) {timeRound=1;}
	if(theTime.hours>8) {timeRound=2;}
	if(theTime.hours>12) {timeRound=3;}
	if(theTime.hours>16) {timeRound=4;}
	if(theTime.hours>20) {timeRound=0;}
	clocksprite[timeRound].draw(canvas,822,8);

	

};

function squadInfo(sq){
	canvas.font = "14pt Calibri";
	canvas.textAlign = "left";
	canvas.textBaseline = "middle";
	canvas.fillStyle = "white";
	/*for(var i=0;i<sq.numUnits;i++)
	{
		var closs="";
		if(sq.units[i].class==0) {closs="bear";}
		if(sq.units[i].class==1) {closs="Shoe";}
		if(sq.units[i].class==2) {closs="Wizard";}
		if(sq.units[i].class==3) {closs="Frog";}
		canvas.fillText("HP:", 760, 94+i*45);
		canvas.fillText(sq.units[i].hp, 840, 94+i*45);
		canvas.fillText("alive?:", 760, 109+i*45);
		canvas.fillText(sq.units[i].alive, 840, 109+i*45);
		canvas.fillText(closs, 760, 122+i*45);

	}*/
};

function drawmousetext(targ,cam) { //draws unit status info
    canvas.font = "14pt Calibri";
    canvas.textAlign = "center";
    canvas.textBaseline = "middle";
	canvas.fillStyle = "blue";
	if(targ.team==1) {	canvas.fillStyle = "red";}

    tempstr = targ.leader.name+": "+targ.getHP()+ " / " +targ.getMaxHP();
    canvas.fillText(tempstr, (targ.x-cam.x)*16/maps[0].zoom+(targ.width/2), (targ.y-cam.y)*16/maps[0].zoom+targ.height+8);
    
    canvas.fillStyle = "#5F9EA0";
};

function drawtowntext(targ,cam) { //draws town name
    canvas.font = "14pt Calibri";
    canvas.textAlign = "center";
    canvas.textBaseline = "middle";
	canvas.fillStyle = "white";
	//if(targ.team==1) {	canvas.fillStyle = "red";}

    tempstr = targ.name;
    canvas.fillText(tempstr, (targ.x-cam.x)*16/maps[0].zoom+(targ.width/2), (targ.y-cam.y)*16/maps[0].zoom+targ.height-4);
    
    canvas.fillStyle = "#5F9EA0";
};

    isOver= function(targ,cam){ //is the mouse over the player/object 
	if((mX>(targ.x-cam.x)*16/maps[0].zoom) && (mX<((targ.x-cam.x)*16+targ.width*maps[0].zoom)/maps[0].zoom) &&(mY>((targ.y-cam.y)*16)/maps[0].zoom) &&(mY<((targ.y-cam.y)*16+targ.height)/maps[0].zoom)) {return true;}
	return false;
    };

function mouseClick(e) {  //represents the mouse

	  e.preventDefault();    
  	  mX = e.pageX - canvasElement.get(0).offsetLeft;
	  mY = e.pageY - canvasElement.get(0).offsetTop;	

      tx=Math.floor(mX/16) * maps[0].zoom;
	  ty=Math.floor(mY/16) * maps[0].zoom;

	  onSomething=null;
	  for(var i=0;i<armies[0].numSquads;i++)
	  {
		if (isOver(armies[0].squads[i],camera)) {onSomething=armies[0].squads[i];SELECTED=i;}
	  }
	  if (onSomething==null){
		  if( armies[0].squads[SELECTED].path ) { armies[0].squads[SELECTED].clearDestination(); return; }
		  armies[0].squads[SELECTED].setDestination(tx + camera.x, ty + camera.y,maps[0]); 
	  }

};

mouseXY= function(e) {
	if (!e) var e = event;
	mX = e.pageX - canvasElement.get(0).offsetLeft;
	mY = e.pageY - canvasElement.get(0).offsetTop;
			
    };



document.body.addEventListener("click", mouseClick, false);

var ksavekey=new akey("o"); //define the different keys
var loadkey=new akey("l");

var randomwalk=false;
var radar=true;

var pausekey=new akey("space");
var radarkey=new akey("y");
var escapekey=new akey("q");
var serversavekey=new akey("i");
var serverloadkey=new akey("k");
var upkey=new akey("up");
var rightkey=new akey("right");
var downkey=new akey("down");
var leftkey=new akey("left");
var tabkey=new akey("shift");
var zoomkey=new akey("z");
var helpkey=new akey("h");
var speedkey=new akey("x");
var statuskey=new akey("s");
var rowkey=new akey("r");
var enterkey=new akey("space");
var menukey=new akey("m");
var fleekey=new akey("f");
var aikey=new akey("a");
var addkey=aikey;
var removekey="d";
var unitinfokey=new akey("u");
var cardkey=new akey("c");
var deploykey=new akey("d");
var removekey=deploykey;
var createkey=new akey("j");

var camera = {  //represents the camera, aka what part of the map is on screen
    x: 0,
    y: 0,
    width: 60,
    height: 40,
	zoom: 1,

    center: function(targ) {
	if(this.zoom>1) {tx=0;ty=0;x=0;y=0;return;}
	tx=targ.x-26;
	ty=targ.y-20;
	if (tx<0) {tx=0;}
	if (ty<0) {ty=0;}
	if (tx>MAP_WIDTH-this.width) {tx=MAP_WIDTH-this.width;}
	if (ty>MAP_HEIGHT-this.height) {ty=MAP_HEIGHT-this.height;}

	this.x=tx;
	this.y=ty;
    },
    check: function() {
	this.x.clamp(0, MAP_WIDTH-60);
	this.y.clamp(0, MAP_HEIGHT-40);
	//if(this.zoom>1) {tx=0;ty=0;x=0;y=0;return;}
    },
    rX: function(fx) {
	return fx-this.x;
    },
    rY: function(fy) {
	return fy-this.y;
    }
};




var bColors = ["#008000","#006400", "#FF4500", "#000080", "#696969", "#800080", "#808000", "#A52A2A", "#8B4513", "#FFDEAD", "#FFFF40","#000080" , "#FFFF80"]; //list of colors for radar/a few other things

function makeNewTile() { //the Map is made of a 2D array of tiles.
    var tile = {
	width: 16,
	height: 16,
	x: 0,
	y: 0,

	ani:0,
	color: "#FFC020",
	data: 0,
	draw: function(cam) { 
	    if(this.data==0){
		grasssprite.draw(canvas, (this.x-cam.x)*16, (this.y-cam.y)*16);
	    }else if(this.data==1){
		stonesprite.draw(canvas, (this.x-cam.x)*16, (this.y-cam.y)*16);
	    }else if(this.data==2){
		mudsprite.draw(canvas, (this.x-cam.x)*16, (this.y-cam.y)*16);
	    }else if(this.data==3){
		crystalsprite.draw(canvas, (this.x-cam.x)*16, (this.y-cam.y)*16); 
	    }else if(this.data==4){
		mossysprite.draw(canvas, (this.x-cam.x)*16, (this.y-cam.y)*16);
	    }else if(this.data==5){
		stonebricksprite.draw(canvas, (this.x-cam.x)*16, (this.y-cam.y)*16);
	    }else if(this.data==6){
		plankssprite.draw(canvas, (this.x-cam.x)*16, (this.y-cam.y)*16);

	    }else if(this.data==42){
		watersprite.draw(canvas, (this.x-cam.x)*16, (this.y-cam.y)*16);
	    }else{  //if strange data, draw a solid color
		canvas.fillStyle = bColors[0]; 
		canvas.fillRect((this.x-cam.x)*this.width, (this.y-cam.y)*this.height, this.width, this.height);
	    }
	    if(this.cracked==1){
		crackedsprite.draw(canvas, (this.x-cam.x)*16, (this.y-cam.y)*16);
	    }
		if(this.platform==1){
		platformsprite.draw(canvas, (this.x-cam.x)*16, (this.y-cam.y)*16);
	    }
            
	}
    };
    
    return tile;
};

function tileToCost(data, sqd) {
  if((data==4) &&(sqd.leader.class==3)) {return 4};
  if( data == 1 ) return 0;
  if( data == 4 ) return 4;
  return 1;
};

function mapToGraph(map, sqd) { 
  var tilesArray = [];
  for( var i=0; i<MAP_WIDTH; ++i ) {
    var rowArray = [];
    for( var j=0; j<MAP_HEIGHT; ++j ) {
	  var tile = map.tiles[i][j];
	  var data = tileToCost(tile.data, sqd);
	  for( var ii=-1; ii<2; ++ii ) {
	    for( var jj=-1; jj<2; ++jj) {
		  if( i+ii < 0 || i+ii >= MAP_WIDTH || j+jj < 0 || j+jj >= MAP_WIDTH ) {
		    continue;
		  }
		  var adjTile = map.tiles[i+ii][j+jj];
		  if( !adjTile ) continue;
		  adjData = tileToCost(adjTile.data,sqd);
		  if( data == 0 || adjData == 0 ) { data = 0; } else {
  		    data = Math.max(data, adjData);
	      }
		}
	  }
	  rowArray.push(data);
    }
    tilesArray.push(rowArray);
  }
  return new Graph(tilesArray);
}


function Map(I) { //map object
    I = I || {};
    var i = 0;
    var j = 0;
    I.active = true;
    I.color = "#00A";
    I.tiles = new Array(MAP_WIDTH);
    for( i=0; i<MAP_WIDTH; i++ ) { I.tiles[i] = new Array(MAP_HEIGHT);  }
    for (i=0;i<MAP_WIDTH; i++){
	for (j=0;j<MAP_HEIGHT; j++){
	    I.tiles[i][j]= makeNewTile();
	    I.tiles[i][j].x=i;
	    I.tiles[i][j].y=j;
	}
    }
    I.width = MAP_WIDTH;
    I.height = MAP_HEIGHT;

	I.getPath = function(startX, startY, endX, endY,sqd) {
      var graph = mapToGraph(I,sqd);
	  return astar.search(graph.nodes, graph.nodes[startX][startY], graph.nodes[endX][endY]);
    };
 
 I.drawPath = function(x,y,xx,yy) {
   var path = I.getPath(x, y, xx, yy);
   for( var i=0; i<path.length; ++i ) {
     I.setTile(path[i].x, path[i].y, 1);
   }
 };
    I.zoom = 1;

    I.setZoom = function(cam) {
		if (I.zoom == 1) {I.zoom=2;} else /*if (I.zoom==2) {I.zoom=4;} else*/ {I.zoom=1;}
        cam.x=0;
		cam.y=0;
		cam.zoom=I.zoom;
    };

    I.draw = function(cam) {
	cam.zoom=I.zoom;
	cam.check();
	for (i=cam.x;i<cam.x+cam.width*I.zoom; i+=I.zoom){
	    for (j=cam.y;j<cam.y+cam.height*I.zoom; j+=I.zoom){
		    var tileTypes = {};
			for( var ii=0; ii<I.zoom; ii+=1 ) {
				if ((i+ii>=MAP_WIDTH)) { continue;}
			  for( var jj=0; jj<I.zoom; jj+=1 ) {
				if ((j+jj>=MAP_HEIGHT)) {continue;}
			    var data = I.tiles[i+ii][j+jj];
				if( data ) {
				  if( !tileTypes[data.data] ) { tileTypes[data.data] = 1; }
				  else{ tileTypes[data.data] += 1; }
				}
			  }
			}
			var dominantType = {type: null, occurs: 0};
			for( var type in tileTypes ) {
			  if( tileTypes[type] && tileTypes[type] > dominantType.occurs ) {
			    dominantType.occurs = tileTypes[type];
				dominantType.type = type;
			  }
			}
			if(dominantType.type && dominantType.type <41) {
				if(dominantType.type==0){
				grasssprite.draw(canvas, (i-cam.x)*16/Math.pow(2,I.zoom-1), (j-cam.y)*16/Math.pow(2,I.zoom-1));
				}else if(dominantType.type==1){
				stonesprite.draw(canvas, (i-cam.x)*16/Math.pow(2,I.zoom-1), (j-cam.y)*16/Math.pow(2,I.zoom-1));
				}else if(dominantType.type==2){
				mudsprite.draw(canvas, (i-cam.x)*16/Math.pow(2,I.zoom-1), (j-cam.y)*16/Math.pow(2,I.zoom-1));
				}else if(dominantType.type==3){
				crystalsprite.draw(canvas, (i-cam.x)*16/Math.pow(2,I.zoom-1), (j-cam.y)*16/Math.pow(2,I.zoom-1)); 
				}else if(dominantType.type==4){
				mossysprite.draw(canvas, (i-cam.x)*16/Math.pow(2,I.zoom-1), (j-cam.y)*16/Math.pow(2,I.zoom-1));
				}else{  //if strange data, draw a solid color
				canvas.fillStyle = bColors[0]; 
				canvas.fillRect((this.x-cam.x)*this.width, (this.y-cam.y)*this.height, this.width, this.height);
				}	
			}
		}
		}
    };
    I.clear =function(){
	for (i=0;i<MAP_WIDTH; i++){
	    for (j=0;j<MAP_HEIGHT; j++){
		I.tiles[i][j]= makeNewTile();
		I.tiles[i][j].x=i;
		I.tiles[i][j].y=j;
	    }
	}
    };
   

    I.setTile = function (x,y,data) {
	I.tiles[x][y].data = data;
    };
	
	I.buildRadar= function(){
	
	radarCanvas.globalAlpha = 0.75;
		for (var i=0;i<MAP_WIDTH; i++){
			for (j=0;j<MAP_HEIGHT; j++){
				radarCanvas.fillStyle = bColors[I.tiles[i][j].data];
				radarCanvas.fillRect(i, j, 2, 2);
		    }
		}
		radarBitmap = radarCanvas.getImageData(0, 0, MAP_WIDTH, MAP_HEIGHT);

	};

	I.drawRadar= function (cam,x,y,arm) {
	cam.check();
	canvas.save();
	canvas.globalAlpha = 0.75;
	canvas.putImageData(radarBitmap,x,y);
	
	for(var i=0;i<numTowns;i++)
	{
		canvas.fillStyle = "blue";
		if(towns[i].team==1){ canvas.fillStyle = "#FF2C85";}
		canvas.fillRect(x+towns[i].x, y+towns[i].y, 8, 8);
	}
	
	for(var i=0;i<arm[0].numSquads;i++){
	
		canvas.fillStyle = "#FFD700";
		canvas.fillRect(x+arm[0].squads[i].x, y+arm[0].squads[i].y, 4, 4);
	}
	
	for(var i=0;i<arm[1].numSquads;i++){
	
		canvas.fillStyle = "red";
		canvas.fillRect(x+arm[1].squads[i].x, y+arm[1].squads[i].y, 4, 4);
	}

	canvas.globalAlpha = 0.35;
	canvas.fillStyle = "white";
	canvas.fillRect(x+cam.x, y+cam.y, cam.width*I.zoom, cam.height*I.zoom);
	canvas.restore();
    };
    return I;
}





maps[0].clear();
maps[0].setTile(24,24,1);
maps[0].setTile(23,24,1);
maps[0].setTile(22,24,1);
maps[0].setTile(24,25,1);
maps[0].setTile(23,25,1);
maps[0].setTile(22,25,1);
maps[0].setTile(24,26,1);
maps[0].setTile(23,26,1);
maps[0].setTile(22,26,1);

maps[0].setTile(27,24,1);
maps[0].setTile(26,24,1);
maps[0].setTile(25,24,1);
maps[0].setTile(27,25,1);
maps[0].setTile(26,25,1);
maps[0].setTile(25,25,1);
maps[0].setTile(27,26,1);
maps[0].setTile(26,26,1);
maps[0].setTile(25,26,1);

maps[0].setTile(28,24,1);
maps[0].setTile(29,24,1);
maps[0].setTile(30,24,1);
maps[0].setTile(28,25,1);
maps[0].setTile(29,25,1);
maps[0].setTile(30,25,1);
maps[0].setTile(28,26,1);
maps[0].setTile(29,26,1);
maps[0].setTile(30,26,1);

for (var p=0;p<300;p++)
{
	var i=Math.floor(Math.random()*190)+4;
	var k=Math.floor(Math.random()*260)+4;
	maps[0].setTile(24,24,1);
	maps[0].setTile(i,k,1);
	maps[0].setTile(i+1,k+1,1);
    maps[0].setTile(i+1,k,1);
	maps[0].setTile(i,k+1,1);
	maps[0].setTile(i+1,k+1,1);

  
}



for(var i=0;i<15;i++){
	for(var k=0;k<70;k++)
	{
		maps[0].setTile(20+i,0+k,4);
		maps[0].setTile(20+i,0+k,4);
		maps[0].setTile(20+i,0+k,4);
	}
	}

/*var squid= new Array(TEAM_SIZE);
var frogs= new Array(TEAM_SIZE);

/*for( var i=0;i<TEAM_SIZE;i++)
{
	armies[0].squads[i]=new squad();
	armies[0].squads[i].ID=i;
	armies[1].squads[i]=new squad();
	armies[1].squads[i].ID=i;
}*/
armies[0].init(0);
armies[1].init(1);
armies[0].squads[0].deploy();
//armies[0].name = "Lannisters";
armies[0].name = "The Kingsguard";
armies[1].name = "The Bastard Boys";
armies[1].leader.name="Roose";
armies[1].basex=180;
armies[1].basey=256;
for (var i=0;i<armies[1].numSquads;i++){
	armies[1].squads[i].leader.class=14;
	armies[1].squads[i].basex=180;
	armies[1].squads[i].basey=256;
	armies[1].squads[i].leader.setClass();
	armies[1].squads[i].sprite=armies[1].squads[i].leader.sprite;
	armies[1].squads[i].team=1;
	armies[1].squads[i].x=180;
	armies[1].squads[i].y=256;
	armies[1].squads[i].smartRow();
	armies[1].squads[i].deploy();//TODO delay between deployment 
	armies[1].lastDeployed++;
}
armies[0].leader.name="Bearistan";
armies[0].leader.class=0;
armies[0].leader.setClass();
armies[0].leader.maxhp+=20;
armies[0].leader.hp=armies[0].leader.maxhp;
armies[0].squads[0].sprite=armies[0].squads[0].leader.sprite;

armies[1].leader.name="Ramsey";
armies[1].leader.class=12;
armies[1].leader.setClass();
armies[1].squads[0].sprite=armies[1].squads[0].leader.sprite;

armies[1].leader.maxhp+=150;
armies[1].leader.hp=armies[1].leader.maxhp
armies[1].leader.equipment[0]=swords[2];
armies[1].leader.equipment[1]=breastplate;
//armies[1].leader.equipment[2]=cape;
armies[1].squads[0].units[1].name="Reek";
armies[1].squads[0].units[1].class=9;
armies[1].squads[0].units[1].setClass();

armies[1].squads[0].units[1].maxhp+=25;
armies[1].squads[0].units[1].hp=armies[1].leader.maxhp;
armies[1].squads[0].units[1].row=1;

setInterval(function() {

	update();
    }, 1000/FPS);


canvasElement.get(0).addEventListener("mousemove", mouseXY, false);
document.getElementById("myAudio").addEventListener('ended', function() { //loops music
	this.currentTime = 0;
	this.play();
    }, false);

function menuDraw()
{

	battletick++;
	canvas.save();
    canvas.globalAlpha=0.80;
	canvas.fillStyle =  "#DCDCDC";
    canvas.fillRect(25,95,850,500);
	canvas.fillStyle =bColors[6];//Math.floor(Math.random()*5)];// "#483D8B ";
    canvas.fillRect(40,110,820,470);
	canvas.restore();
	canvas.font = "14pt Calibri";
	canvas.textAlign = "left";
	canvas.textBaseline = "middle";
	
}
	
function battleDraw()
{

	battletick++;
	canvas.save();
    canvas.globalAlpha=0.60;
	canvas.fillStyle =  "#DCDCDC";
    canvas.fillRect(25,95,820,500);
	canvas.fillStyle =bColors[6];//Math.floor(Math.random()*5)];// "#483D8B ";
    canvas.fillRect(40,110,790,470);
	canvas.restore();
	canvas.font = "14pt Calibri";
	canvas.textAlign = "left";
	canvas.textBaseline = "middle";

	canvas.fillStyle = "blue";
	var texticles= "";
	if (combatants[0].battleAI==0) {texticles="Weakest";}
	if (combatants[0].battleAI==1) {texticles="Strongest";}
	if (combatants[0].battleAI==2) {texticles="Leader";}
	canvas.fillText(texticles, 515, 132);
	for(var i=0;i<combatants[0].numUnits;i++)
	{
		if(!combatants[0].units[i].alive) {continue;}
		var closs="";
		if(combatants[0].units[i].class==0) {closs="bear";}
		if(combatants[0].units[i].class==1) {closs="Shoe";}
		if(combatants[0].units[i].class==2) {closs="Wizard";}
		if(combatants[0].units[i].class==3) {closs="Frog";}
		if(combatants[0].units[i].class==4) {closs="Archer";}
		if(combatants[0].units[i].class==5) {closs="Healer";}
		if(combatants[0].units[i].class==6) {closs="Ninja";}
		if(combatants[0].units[i].class==7) {closs="Winger";}
		if(combatants[0].units[i].class==8) {closs="Knight";}
		if(combatants[0].units[i].class==9) {closs="Cleric";}
		if(combatants[0].units[i].class==10) {closs="Sage";}
		if(combatants[0].units[i].class==11) {closs="Angel";}
		if(combatants[0].units[i].class==12) {closs="Dark Knight";}
		if(combatants[0].units[i].class==13) {closs="Palladin";}
		if(combatants[0].units[i].class==14) {closs="Polar Bear";}
		var xp=600+combatants[0].units[i].row*40;
		canvas.fillText("HP:", xp, 130+i*2*45);
		canvas.fillText(combatants[0].units[i].hp, xp+30, 130+i*2*45);
		canvas.fillText("/", xp+60, 130+i*2*45);
		canvas.fillText(combatants[0].units[i].maxhp, xp+70, 130+i*2*45);
		canvas.fillText("Lvl:", xp+100, 130+i*2*45);
		canvas.fillText(combatants[0].units[i].level, xp+130, 130+i*2*45);
		canvas.fillText("ATB:", xp, 145+i*2*45);
		canvas.fillStyle =  "#DCDCDC";
		canvas.fillRect(xp+60,143+(i*45*2),battlespeed+3,15);
		if(combatants[0].units[i].hasStatus(Status.Haste)){
			canvas.fillStyle =  "green";
		}else if(combatants[0].units[i].hasStatus(Status.Slow)){
			canvas.fillStyle =  "red";
		}else
		{
			canvas.fillStyle =  "yellow";
		}
		canvas.fillRect(xp+60+1,144+(i*45*2),combatants[0].units[i].atb,13);

		canvas.fillStyle = "blue";
		canvas.fillText("Name:", xp, 172+i*2*45);
		canvas.fillText(combatants[0].units[i].name, xp+52, 172+i*2*45);
		canvas.fillText(closs, xp, 158+i*2*45);

		if(combatants[0].units[i].attacking>0) {combatants[0].units[i].sprite.draw(canvas, xp-40-combatants[0].units[i].attacking/2, 135+i*2*45);}
		if(i==BSELECTED) {selector.draw(canvas, xp-40-combatants[0].units[i].attacking/2, 135+i*2*45);}
		if(combatants[0].units[i].hasStatus(Status.Poison)) {poisonsprite.draw(canvas, xp-40-combatants[0].units[i].attacking/2, 135+i*2*45);}
		
		if((combatants[0].units[i].hurting<1) || (combatants[0].units[i].hurting%2==0)) {
			combatants[0].units[i].sprite.draw(canvas, xp-40-combatants[0].units[i].attacking/2, 135+i*2*45);
		}
		if(battletick>battledelay) { combatants[0].units[i].update(combatants[0],combatants[1]);}
		if(combatants[0].units[i].hasStatus(Status.Poison)) {poisonsprite.draw(canvas, xp-40-combatants[0].units[i].attacking/2, 135+i*2*45);}
		if(combatants[0].units[i].attacking>0) {combatants[0].units[i].attacking--;}
		if(combatants[0].units[i].hurting>0) {combatants[0].units[i].hurting--;}
	}

	canvas.fillStyle = "red";
	if (combatants[1].battleAI==0) {texticles="Weakest";}
	if (combatants[1].battleAI==1) {texticles="Strongest";}
	if (combatants[1].battleAI==2) {texticles="Leader";}
	canvas.fillText(texticles, 275, 132);
		for(var i=0;i<combatants[1].numUnits;i++)
	{
		var closs="";
		if(!combatants[1].units[i].alive) {continue;}
		if(combatants[1].units[i].class==0) {closs="bear";}
		if(combatants[1].units[i].class==1) {closs="Shoe";}
		if(combatants[1].units[i].class==2) {closs="Wizard";}
		if(combatants[1].units[i].class==3) {closs="Frog";}
		if(combatants[1].units[i].class==4) {closs="Archer";}
		if(combatants[1].units[i].class==5) {closs="Healer";}
		if(combatants[1].units[i].class==6) {closs="Ninja";}
		if(combatants[1].units[i].class==7) {closs="Winger";}
		if(combatants[1].units[i].class==8) {closs="Knight";}
		if(combatants[1].units[i].class==9) {closs="Cleric";}
		if(combatants[1].units[i].class==10) {closs="Sage";}
		if(combatants[1].units[i].class==11) {closs="Angel";}
		if(combatants[1].units[i].class==12) {closs="Dark Knight";}
		if(combatants[1].units[i].class==13) {closs="Palladin";}
		if(combatants[1].units[i].class==14) {closs="Polar Bear";}
		var xp=135-combatants[1].units[i].row*40;
		canvas.fillText("HP:", xp, 130+i*2*45);
		canvas.fillText(combatants[1].units[i].hp, xp+30, 130+i*2*45);
		canvas.fillText("/", xp+60, 130+i*2*45);
		canvas.fillText(combatants[1].units[i].maxhp, xp+70, 130+i*2*45);
		canvas.fillText("Lvl:", xp+100, 130+i*2*45);
		canvas.fillText(combatants[1].units[i].level, xp+130, 130+i*2*45);
		canvas.fillText("ATB:", xp, 143+i*2*45);
		canvas.fillStyle =  "#DCDCDC";
		canvas.fillRect(xp+60,143+(i*45*2),battlespeed+3,15);
		canvas.fillStyle =  "yellow";
		canvas.fillRect(xp+60+1,144+(i*45*2),combatants[1].units[i].atb,13);

		canvas.fillStyle = "red";
		canvas.fillText(closs, xp, 158+i*2*45);
		canvas.fillText("Name:", xp, 172+i*2*45);
		canvas.fillText(combatants[1].units[i].name, xp+80, 172+i*2*45);

		if((combatants[1].units[i].attacking>0) && (combatants[1].units[i].hurting<1)) {combatants[1].units[i].sprite.draw(canvas, xp-40+combatants[1].units[i].attacking/2, 135+i*2*45);}
		
		if((combatants[1].units[i].hurting<1) || (combatants[1].units[i].hurting%2==0)) {
			combatants[1].units[i].sprite.draw(canvas, xp-40+combatants[1].units[i].attacking/2, 135+i*2*45);
		}
			if(battletick>battledelay) {combatants[1].units[i].update(combatants[1],combatants[0]);}
			if(combatants[1].units[i].hasStatus(Status.Poison)) {poisonsprite.draw(canvas, xp-40-combatants[0].units[i].attacking/2, 135+i*2*45);}
			if(combatants[1].units[i].attacking>0) {combatants[1].units[i].attacking--;}
			if(combatants[1].units[i].hurting>0) {combatants[1].units[i].hurting--;}
	}
	canvas.fillStyle = "white";
	var texticle= "Turns:" +(combatants[0].turns+combatants[1].turns) + "/"+battlelength;
	canvas.fillText(texticle, 360, 132);
	if(battlePause) {//in battle menu
		canvas.fillText("battle pause!", 350, 432);
	}
	if((combatants[0].alive)&& (!combatants[0].checkSurvivors()))   { 
		var tmpstr=combatants[0].leader.name + "'s squad was eliminated.";
		console.log(tmpstr); 
		combatants[0].damaged=0;
		combatants[1].damaged=10;
		endBattle(combatants[0],combatants[1]);
	}
	if((combatants[1].alive)&& (!combatants[1].checkSurvivors()))   
	{ 
		var tmpstr=combatants[1].leader.name + "'s squad was eliminated.";
		console.log(tmpstr); 
		combatants[1].damaged=0;
		combatants[0].damaged=10;
		endBattle(combatants[0],combatants[1]);
	}
	if(combatants[0].turns+combatants[1].turns>=battlelength) {endBattle(combatants[0],combatants[1]);}
	if(battletick>battledelay) {battletick=0;}
}

//document.getElementById("myAudio").play(); //starts music
initTowns();
maps[0].buildRadar();
//------------MAIN LOOP-----------------------------------------
function update() {
    lasttime=milliseconds;
    timestamp = new Date();
    milliseconds = timestamp.getTime();
	tick++;
	if(menukey.check()) {
		 if(!isBattle)
		 {
			if(isMenu==1) 
			{	
				isMenu=2;
			}else if(isMenu==2)
			{
				isMenu=0;
			}else
			{
				isMenu=1;
			}
			
		 }
	}
	if(isMenu==1) 
	{
		menuDraw();
		//draw out squad
		canvas.fillStyle = "white";
		canvas.fillRect(284,110,16,470);
		for(var i=0;i<armies[0].squads[MSELECTED].numUnits;i++)
		{
			if(!armies[0].squads[MSELECTED].units[i].alive) {continue;}
			var closs="";
			if(armies[0].squads[MSELECTED].units[i].class==0) {closs="bear";}
			if(armies[0].squads[MSELECTED].units[i].class==1) {closs="Shoe";}
			if(armies[0].squads[MSELECTED].units[i].class==2) {closs="Wizard";}
			if(armies[0].squads[MSELECTED].units[i].class==3) {closs="Frog";}
			if(armies[0].squads[MSELECTED].units[i].class==4) {closs="Archer";}
			if(armies[0].squads[MSELECTED].units[i].class==5) {closs="Healer";}
			if(armies[0].squads[MSELECTED].units[i].class==6) {closs="Ninja";}
			if(armies[0].squads[MSELECTED].units[i].class==7) {closs="Winger";}
			if(armies[0].squads[MSELECTED].units[i].class==8) {closs="Knight";}
			if(armies[0].squads[MSELECTED].units[i].class==9) {closs="Cleric";}
			if(armies[0].squads[MSELECTED].units[i].class==10) {closs="Sage";}
			if(armies[0].squads[MSELECTED].units[i].class==11) {closs="Angel";}
			if(armies[0].squads[MSELECTED].units[i].class==12) {closs="Dark Knight";}
			if(armies[0].squads[MSELECTED].units[i].class==13) {closs="Palladin";}
			if(armies[0].squads[MSELECTED].units[i].class==14) {closs="Polar Bear";}
			var xp=80;
			canvas.fillText("HP:", xp, 130+i*2*45);
			canvas.fillText(armies[0].squads[MSELECTED].units[i].hp, xp+30, 130+i*2*45);
			canvas.fillText("/", xp+60, 130+i*2*45);
			canvas.fillText(armies[0].squads[MSELECTED].units[i].maxhp, xp+70, 130+i*2*45);
			canvas.fillText("Lvl:", xp+100, 130+i*2*45);
			canvas.fillText(armies[0].squads[MSELECTED].units[i].level, xp+130, 130+i*2*45);


			canvas.fillStyle = "blue";
			canvas.fillText("Name:", xp, 172+i*2*45);
			canvas.fillText(armies[0].squads[MSELECTED].units[i].name, xp+52, 172+i*2*45);
			canvas.fillText(closs, xp, 158+i*2*45);

			armies[0].squads[MSELECTED].units[i].sprite.draw(canvas, xp-40, 135+i*2*45);
			//if(i==MSELECTED) {selector.draw(canvas, xp-40-armies[0].squads[MSELECTED].units[i].attacking/2, 135+i*2*45);}
			if(armies[0].squads[MSELECTED].units[i].hasStatus(Status.Poison)) {poisonsprite.draw(canvas, xp-40-armies[0].squads[MSELECTED].units[i].attacking/2, 135+i*2*45);}
			if(armies[0].squads[MSELECTED].units[i].hasStatus(Status.Poison)) {poisonsprite.draw(canvas, xp-40-armies[0].squads[MSELECTED].units[i].attacking/2, 135+i*2*45);}

		}
		for(var i=0;i<armies[0].numLooseUnits;i++)
		{
			if((armies[0].looseUnits[i]==null)||(!armies[0].looseUnits[i].alive)) {continue;}
			var closs="";
			if(armies[0].looseUnits[i].class==0) {closs="bear";}
			if(armies[0].looseUnits[i].class==1) {closs="Shoe";}
			if(armies[0].looseUnits[i].class==2) {closs="Wizard";}
			if(armies[0].looseUnits[i].class==3) {closs="Frog";}
			if(armies[0].looseUnits[i].class==4) {closs="Archer";}
			if(armies[0].looseUnits[i].class==5) {closs="Healer";}
			if(armies[0].looseUnits[i].class==6) {closs="Ninja";}
			if(armies[0].looseUnits[i].class==7) {closs="Winger";}
			if(armies[0].looseUnits[i].class==8) {closs="Knight";}
			if(armies[0].looseUnits[i].class==9) {closs="Cleric";}
			if(armies[0].looseUnits[i].class==10) {closs="Sage";}
			if(armies[0].looseUnits[i].class==11) {closs="Angel";}
			if(armies[0].looseUnits[i].class==12) {closs="Dark Knight";}
			if(armies[0].looseUnits[i].class==13) {closs="Palladin";}
			if(armies[0].looseUnits[i].class==14) {closs="Polar Bear";}
			var xp=340;
			canvas.fillText("HP:", xp, 130+i*2*45);
			canvas.fillText(armies[0].looseUnits[i].hp, xp+30, 130+i*2*45);
			canvas.fillText("/", xp+60, 130+i*2*45);
			canvas.fillText(armies[0].looseUnits[i].maxhp, xp+70, 130+i*2*45);
			canvas.fillText("Lvl:", xp+100, 130+i*2*45);
			canvas.fillText(armies[0].looseUnits[i].level, xp+130, 130+i*2*45);


			canvas.fillStyle = "blue";
			canvas.fillText("Name:", xp, 172+i*2*45);
			canvas.fillText(armies[0].looseUnits[i].name, xp+52, 172+i*2*45);
			canvas.fillText(closs, xp, 158+i*2*45);

			armies[0].looseUnits[i].sprite.draw(canvas, xp-40, 135+i*2*45);

			if(armies[0].looseUnits[i].hasStatus(Status.Poison)) {poisonsprite.draw(canvas, xp-40-armies[0].looseUnits[i].attacking/2, 135+i*2*45);}
			if(armies[0].looseUnits[i].hasStatus(Status.Poison)) {poisonsprite.draw(canvas, xp-40-armies[0].looseUnits[i].attacking/2, 135+i*2*45);}

		}
		if(tabkey.check())
		{
			MSELECTED++;
			if(MSELECTED>armies[0].numSquads-1)
			{
				MSELECTED=0;
			}
			
		}
		if(downkey.check())
		{
			looseY++;
			if(looseY>4) { looseY=4;}
		}else if(upkey.check())
		{
			looseY--;
			if(looseY<1) { looseY=0;}
		
		}else if(leftkey.check())
		{
			looseX--;
			if(looseX<1) { looseX=0;sideBar=true;}
		
		}else if(rightkey.check())
		{
			if(!sideBar){
				looseX++;
				if(looseX>3) { looseX=3;}
			}else
			{
				sideBar=false;
			}
		
		}
		if(addkey.check()){
			if(!sideBar){
				armies[0].squads[MSELECTED].addUnit(armies[0].looseUnits[looseY]); //TODO
				armies[0].removeLoose(looseY);
			}
		}
		if(removekey.check()){
			if(sideBar){
				armies[0].addLoose(armies[0].squads[MSELECTED].units[looseY]);
				armies[0].squads[MSELECTED].removeUnit(looseY); //TODO
			}
		}
		if(!sideBar){
			selector.draw(canvas, xp-40+looseX*200, looseY*2*45+92+45);
		}else
		{
			selector.draw(canvas, 40, looseY*2*45+92+45);
		}
		if(enterkey.check())
		{
			isMenu=2;
		}
		return;
	}else if (isMenu==2)
	{
		//menuDraw();
		armies[0].squads[MSELECTED].units[MUSELECTED].drawInfo();
		
		if(tabkey.check())
		{
			MUSELECTED++;
			if(MUSELECTED>armies[0].squads[MSELECTED].numUnits-1)
			{
				MUSELECTED=0;
			}
			
		}
		if(enterkey.check())
		{
			isMenu=1;
		}
		return;
	}
	if(zoomkey.check()) {
		maps[0].setZoom(camera);
	}
	maps[0].draw(camera);
	for(var i=0;i<numTowns;i++)
	{
		towns[i].draw(camera);
	}
	if ((tick>gamespeed) && (!isBattle)){
		tick=0;
		if(battleReport) {
			battleendtick++; 
			if (battleendtick>200){
				battleReport=false;
				//paused=true;
				battleendtick=0;
				}
			}
		for (var i=0;i<armies[0].numSquads;i++) {
			armies[0].squads[i].update(maps[0]);
			if(armies[0].fieldAI==AITypes.Random){
				if( (!armies[0].squads[i].path) && (randomwalk) && i != SELECTED ) {
					armies[0].squads[i].setDestination(Math.floor(Math.random()*70),Math.floor(Math.random()*70),maps[0]); };
			}else if(armies[0].fieldAI==AITypes.Rush){
				if( (!armies[0].squads[i].path) && (!((armies[0].squads[i].x==armies[1].basex) &&(armies[0].squads[i].y==armies[1].basey)))) {
					armies[0].squads[i].setDestination(armies[1].basex,armies[1].basey,maps[0]); 
				}
			}
		}
		
		for(var i=0;i<armies[1].numSquads;i++){	
			armies[1].squads[i].update(maps[0]);
			if(armies[1].fieldAI==AITypes.Random){
				if( (!armies[1].squads[i].path) && (i != 0 )) {
					armies[1].squads[i].setDestination(Math.floor(Math.random()*70),Math.floor(Math.random()*70),maps[0]); };
			}else if(armies[1].fieldAI==AITypes.Rush){
				if( (!armies[1].squads[i].path)&& (i != 0 ) && (!((armies[1].squads[i].x==armies[0].basex) &&(armies[1].squads[i].y==armies[0].basey)))) {
					armies[1].squads[i].setDestination(armies[0].basex,armies[0].basey,maps[0]); };
			}
		}
	}

	for (var i=0;i<armies[0].numSquads;i++) {//save and load canvas.
		armies[0].squads[i].draw(camera);
		if(isOver(armies[0].squads[i],camera)) { drawmousetext(armies[0].squads[i],camera); };
		if ((i==SELECTED)&&(armies[0].squads[i].path!=null)) {armies[0].squads[i].drawdest(camera);}
	}
	for (var i=0;i<armies[1].numSquads;i++) {
		armies[1].squads[i].draw(camera);
		if(isOver(armies[1].squads[i],camera)) { drawmousetext(armies[1].squads[i],camera); };
		
	}
	
	for (var i=0;i<numTowns;i++) {
		if (isOver(towns[i],camera)){drawtowntext(towns[i],camera);}
	}
	if((!isBattle) &&(!isMenu)&&(!paused)&&(!battleReport)) {
		theTime.update();
	}
	canvas.save();
	canvas.globalAlpha=0.00;
	if(theTime.hours>8){canvas.globalAlpha=0.20;}
	if(theTime.hours>12){canvas.globalAlpha=0.30;}
	if(theTime.hours>16){canvas.globalAlpha=0.40;}
	if(theTime.hours>20){canvas.globalAlpha=0.50;}
	canvas.fillStyle="#1B1733 ";//"#483D8B ";
	canvas.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
	canvas.restore();
	
	selector.draw(canvas, (armies[0].squads[SELECTED].x * 16 + (Math.round(armies[0].squads[SELECTED].bx) - 8) - camera.x * 16) / maps[0].zoom, (armies[0].squads[SELECTED].y * 16 + (Math.round(armies[0].squads[SELECTED].by) - 8) - camera.y * 16) / maps[0].zoom);
	//camera controls
	//if(maps[0].zoom<3){
		if(keydown.left) {
		camera.x -= 1*maps[0].zoom;
		if (camera.x<0) {camera.x=0;}
		}
		
		if(keydown.right) {
		camera.x += 1*maps[0].zoom;
		if (camera.x>(MAP_WIDTH-(camera.width*maps[0].zoom))) {camera.x=MAP_WIDTH-(camera.width*maps[0].zoom);}
		}
		
		if(keydown.up) {
		camera.y -= 1*maps[0].zoom;
		if (camera.y<0) {camera.y=0;}
		}
		
		if(keydown.down) {
		camera.y += 1*maps[0].zoom;
		if (camera.y>(MAP_HEIGHT-(camera.height*maps[0].zoom))) {(camera.y=MAP_HEIGHT-(camera.height*maps[0].zoom));}
		}
	//}
	if (ksavekey.check()) {randomwalk=!randomwalk;}

	if(isBattle){
		if (tabkey.check()) {BSELECTED++; if(BSELECTED>armies[0].squads[SELECTED].numUnits-1) {BSELECTED=0;}}
	}else{
		if (tabkey.check()) {SELECTED++; if(SELECTED>armies[0].numSquads-1) {SELECTED=0; camera.center(armies[0].squads[SELECTED]);}camera.center(armies[0].squads[SELECTED]);}
	}

	if ((armies[0].squads[SELECTED]) && ((!armies[0].squads[SELECTED].alive) || (!armies[0].squads[SELECTED].deployed))) {SELECTED++; if(SELECTED>armies[0].numSquads-1) {SELECTED=0;camera.center(armies[0].squads[SELECTED]);} camera.center(armies[0].squads[SELECTED]);}

	if(pausekey.check()) {
		if(isBattle){
			battlePause=!battlePause;
		}else
		{
			paused=!paused; 
			battleReport=false;	
		}
	}
	
	if(createkey.check()){
		if (armies[0].numSquads>TEAM_SIZE-1) {
			//return;
		}else
		{
			armies[0].numSquads++;
			armies[0].squads[armies[0].numSquads-1]=new squad();
			armies[0].squads[armies[0].numSquads-1].team=0;
			armies[0].squads[armies[0].numSquads-1].ID=armies[0].numSquads-1;
			armies[0].squads[armies[0].numSquads-1].deployed=false;
		}
	}
	if((deploykey.check())&&(isMenu==0)){
		if (armies[0].lastDeployed>armies[0].numSquads-1) {
				//return;
		}else
		{
			armies[0].squads[armies[0].lastDeployed].deploy();
			armies[0].lastDeployed++; 
		}
	/*	if (armies[0].lastDeployed>armies[0].numSquads-1) {
			if (armies[0].numSquads>TEAM_SIZE-1) {
		
				return;
			}	
			armies[0].numSquads++;
		}else
		{
			armies[0].squads[armies[0].lastDeployed].deploy();
			armies[0].lastDeployed++; 
		}*/
	}
	
	
	if(zoomkey.check()) {
		 maps[0].setZoom(camera);
	}
	
	if(aikey.check()) {
		 armies[0].squads[SELECTED].battleAI++;
		 if (armies[0].squads[SELECTED].battleAI>2) {armies[0].squads[SELECTED].battleAI=0;}
	}
	
	if(rowkey.check()) {
		 if(!isBattle)
		 {
			armies[0].squads[SELECTED].row();
		 }else
		 armies[0].squads[SELECTED].units[BSELECTED].rowswap();
	}

	if(cardkey.check()) {
		 if(isBattle)
		 {
			armies[0].cards[CSELECTED].type=CSELECTED;
			armies[0].cards[CSELECTED].setSprite();
			armies[0].cards[CSELECTED].use(combatants[0],combatants[1]);
		 }else {
			CSELECTED++;
			if(CSELECTED>4) { CSELECTED=0;}
		 }
	}
	
	if(fleekey.check()) {
		 armies[0].squads[SELECTED].flee();
	}

	armyInfo();
	
	armies[0].cards[CSELECTED].sprite.draw(canvas,300, 5);

	if(radarkey.check())
	{
		radar=!radar;
	}
	
	if((radar) && (!isBattle))
	{
		maps[0].drawRadar(camera, 660, 340,armies);
	}
	
	if((isBattle) || (battleReport)) {
		battleDraw();
		if (escapekey.check()) {isBattle=false;}
	}
	if(helpkey.check()){
	    alert("Arrow keys=move camera, Z=zoom, X=cycle gamespeed,O=toggle ally AI,S=get squad status,shift=cycle units, space = pause, R=row,A=change AI,F=Flee");
	}
	if(speedkey.check()){
		gamespeed++;
		if (gamespeed>2) {gamespeed=0;}
	}
	
	if(unitinfokey.check()){
		unitinfo=!unitinfo;
	}
	if(statuskey.check()){
		var texticle = "Units:" + armies[0].squads[SELECTED].numSquadUnits() + " / " + armies[0].squads[SELECTED].numUnits;
		alert(texticle);
	}
	if((paused) && (!battleReport)) {canvas.fillText("P A U S E D", 450, 370);}
	if(battleReport) {canvas.fillText(won, 430, 370);}
	if(unitinfo) {
		if((isBattle) || (battleReport)){
			armies[0].squads[SELECTED].units[BSELECTED].drawInfo();
		}else {
			armies[0].squads[SELECTED].leader.drawInfo();
		}
	}
	endgame();
}
