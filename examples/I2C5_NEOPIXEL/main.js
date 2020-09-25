var microBitBle;

var npix;

var neoPixels=64; // LED個数

async function connect(){
	microBitBle = await microBitBleFactory.connect();
	msg.innerHTML=("micro:bit BLE接続しました。");
	var i2cAccess = await microBitBle.requestI2CAccess();
	var i2cPort = i2cAccess.ports.get(1);
	// neopixel
	npix = new NEOPIXEL_I2C(i2cPort, 0x41);
	await npix.init(neoPixels);
	msg.innerHTML=("micro:bit neopixelを初期化しました。");
}

async function disconnect(){
	readEnable = false;
	await microBitBle.disconnect();
	msg.innerHTML=("micro:bit BLE接続を切断しました。");
}

async function nPixTest1(){
	console.log("nPix:",npix);
	await npix.setGlobal(10,0,0);
	await sleep(200);
	await npix.setGlobal(0,10,0);
	await sleep(200);
	await npix.setGlobal(0,0,10);
	await sleep(200);
	await npix.setGlobal(0,20,20);
	await sleep(200);
	await npix.setGlobal(20,0,20);
	await sleep(200);
	await npix.setGlobal(20,20,0);
	await sleep(200);
	await npix.setGlobal(20,20,20);
	await sleep(200);
	await npix.setGlobal(0,0,0);
}


async function setPattern0(iH){
	startH = 0;
	if ( iH ){
		startH=iH;
	}
	var grbArray = [];
	var nLED = npix.N_LEDS;
//	var nLED = 10;
	for ( var i = 0 ; i < nLED ; i++ ){
		var h = startH + 360 * i / nLED;
		var s = 1;
		var v = 0.05;
		var rgb = hsvToRgb(h , s , v );
		grbArray.push( rgb[1]);
		grbArray.push( rgb[0]);
		grbArray.push( rgb[2]);
//		await npix.setPixel(i , rgb[0],rgb[1],rgb[2]);
	}
	await npix.setPixels(grbArray);
}


// from https://qiita.com/hachisukansw/items/633d1bf6baf008e82847
function hsvToRgb(H,S,V) {
	//https://en.wikipedia.org/wiki/HSL_and_HSV#From_HSV
	
	H = H %360;
	
	var C = V * S;
	var Hp = H / 60;
	var X = C * (1 - Math.abs(Hp % 2 - 1));
	
	var R, G, B;
	if (0 <= Hp && Hp < 1) {[R,G,B]=[C,X,0]};
	if (1 <= Hp && Hp < 2) {[R,G,B]=[X,C,0]};
	if (2 <= Hp && Hp < 3) {[R,G,B]=[0,C,X]};
	if (3 <= Hp && Hp < 4) {[R,G,B]=[0,X,C]};
	if (4 <= Hp && Hp < 5) {[R,G,B]=[X,0,C]};
	if (5 <= Hp && Hp < 6) {[R,G,B]=[C,0,X]};
	
	var m = V - C;
	[R, G, B] = [R+m, G+m, B+m];
	
	R = Math.floor(R * 255);
	G = Math.floor(G * 255);
	B = Math.floor(B * 255);
	
	return [R ,G, B];
}

