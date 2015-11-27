// this sets the background color of the master UIView (when there are no windows/tab groups on it)
/// <reference path="Titanium-vsdoc.js" />
/// <reference path="jquery-1.4.1-vsdoc" />
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');
var currwin = Titanium.UI.currentWindow;
currwin.backgroundImage = 'images/bgGradient.png';
var textColor ='#FFF';
var rowHeight = 40;
var rows = [];

var win = Titanium.UI.createScrollView({
	top:0,
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:false,
	scrollType: 'vertical',
	layout: 'vertical'
});

//****DESCRIPTION LABEL*****
var descRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var descLabel = Titanium.UI.createLabel({
	text: "This application estimates the basic settlements at a point of interest (POI), subject to groundwater drawdown, caused by nearby pumping/drainage.",
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	color: textColor,
	left: 5
});	

descRow.add(descLabel);
win.add(descRow);
    
//****************** INPUT FIELDS *******************

var pumpingrateRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl1 = Titanium.UI.createLabel({
	text: 'Pumping rate (m³/s):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
pumpingrateRow.add(lbl1);

var var1 = Ti.UI.createTextArea({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130,
        softKeyboardOnFocus : Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS
    });

pumpingrateRow.add(var1);
win.add(pumpingrateRow);

var transmissivityRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var lbl2 = Titanium.UI.createLabel({
	text: 'Transmissivity (m²/s):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
transmissivityRow.add(lbl2);

var var2 = Ti.UI.createTextArea({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130
    });
transmissivityRow.add(var2);
win.add(transmissivityRow);

var estimatedInfluenceRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var lbl3 = Titanium.UI.createLabel({
	text: 'Estimated influence\nradius from pumping (m):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
estimatedInfluenceRow.add(lbl3);

var var3 = Ti.UI.createTextArea({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130
    }); 
estimatedInfluenceRow.add(var3);
win.add(estimatedInfluenceRow);    

var distanceFromPumpingArea = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var lbl4 = Titanium.UI.createLabel({
	text: 'Distance from\npumping area to POI (m):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
distanceFromPumpingArea.add(lbl4);

var var4 = Ti.UI.createTextArea({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130
    });    
distanceFromPumpingArea.add(var4);
win.add(distanceFromPumpingArea);

var soilLayerThicknessRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var lbl5 = Titanium.UI.createLabel({
	text: 'Soil layer thickness\nat POI with E`(0) (m):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
soilLayerThicknessRow.add(lbl5);

var var5 = Ti.UI.createTextArea({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130
    });  
soilLayerThicknessRow.add(var5);
win.add(soilLayerThicknessRow);    

var oneDimensionalSoilRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var lbl6 = Titanium.UI.createLabel({
	text: 'One-dimensional\nsoil stiffness E`(0) (MPa):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
oneDimensionalSoilRow.add(lbl6);

var var6 = Ti.UI.createTextArea({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130
    });   
oneDimensionalSoilRow.add(var6);
win.add(oneDimensionalSoilRow);


//******************** CALCULATEBTN************************** 
var calcRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var calculateBtn = Titanium.UI.createButton({
	title:'Calculate',
	width:200,
	backgroundColor: 'transparent',
	color: '#B5CCEF'
});    

calcRow.add(calculateBtn);
win.add(calcRow);

calculateBtn.addEventListener('click', function()
{
	Calculate();
});

//***********************************************************
var resultHeaderRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
resultHeaderRow.backgroundColor = '#909FB9';
var resultHeaderLbl = Titanium.UI.createLabel({
	text: 'Result:',
	font:{fontSize:18,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: 'black',
	left: 5
});	
resultHeaderRow.add(resultHeaderLbl);
win.add(resultHeaderRow);

var resultRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var resultLbl = Titanium.UI.createLabel({
	text: 'The magnitude of settlement at POI is (mm):',
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor,
	width: 300,
	left: 5
});
resultRow.add(resultLbl);
win.add(resultRow);


//********** Calculate ****************************
function Calculate()
{
var val1 = parseFloat(var1.value.replace(',', '.'));
var val2 = parseFloat(var2.value.replace(',', '.'));
var val3 = parseFloat(var3.value.replace(',', '.'));
var val4 = parseFloat(var4.value.replace(',', '.'));
var val5 = parseFloat(var5.value.replace(',', '.'));
var val6 = parseFloat(var6.value.replace(',', '.'));

var result = ((val1/(2*Math.PI*val2))*(Math.log(val3/val4)))*val5*((10/val6));

var resultRounded = Math.round(result*1)/1;
		if (isNaN(resultRounded))
		{
			resultLbl.text = 'Result is null, check input fields!';
		}
		else
		{
			resultLbl.text = 'The magnitude of settlement at POI is (mm): '+resultRounded+'';
		}
}

//***************** ABOUT WINDOW ***********************

currwin.activity.onCreateOptionsMenu = function(e) {
    var menu = e.menu;
 
    var aboutMenuItem = menu.add({
        title : "About",
        //backgroundImage: '/images/info_24w.png',
    	showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM
    });
        
	aboutMenuItem.addEventListener("click", function(e) {
        var aboutWindow = Titanium.UI.createWindow({
        	title: 'Settlements from drawdown',
        	url: 'DetailDescription.js',
        	lblText: "This application estimates the basic settlements at a point of interest (POI), subject to groundwater drawdown caused by nearby pumping/drainage.\n\nThiems formula is valid for a confined aquifer, where the groundwater flow is radial and horizontal to the pumping area. The soil is uniform and the surface is flat. The vertical settlement increases with the thickness of the soil and with the drawdown. It will be smaller if the one-dimensional soil stiffness E`(0) is larger.\n\nIn reality, the soil is not homogeneous, nor will the pressure drop be constant over the soil volume, nor is the soil stiffness constant. In general, settlements also will take time to develop.\n\nGeotechnical properties vary in space. Hence, assess the uncertainty, spatial variability and the consequences involved as the soil is inherently heterogeneous but may here be represented by the vertical weighted harmonic mean value as an estimate.\n\nSee, for instance:\nPreene, Roberts, Powrie, Dyer, Groundwater control-design and practice, CIRIA C515,\nCashman, Preene, Groundwater Lowering in Construction, CRC,\nHyun-Ki Kim, Spatial Variability in Soils: Stiffness and Strength, Thesis, Georgia Inst. of Technology, 2005."
    	});
     		
    	aboutWindow.open();
	});
};

//****************************************************

currwin.add(win);
