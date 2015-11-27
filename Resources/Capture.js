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
	text: "This application calculates three capture zone main measures from pumping in a sloping unconfined aquifer",
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	color: textColor,
	left: 5
});	

descRow.add(descLabel);
win.add(descRow);

    
//****************** INPUT FIELDS *******************

var pumpingRateRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl1 = Titanium.UI.createLabel({
	text: 'Pumping rate (m³/s):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
pumpingRateRow.add(lbl1);

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
pumpingRateRow.add(var1);
win.add(pumpingRateRow);

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

var hydrailicRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl3 = Titanium.UI.createLabel({
	text: 'Hydraulic gradient (-):',  
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
hydrailicRow.add(lbl3);

var var3 = Ti.UI.createTextArea({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130
    });
    
hydrailicRow.add(var3);
win.add(hydrailicRow);    

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

var resultRow1 = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
 
var resultLbl1 = Titanium.UI.createLabel({
	text: 'Maximum upstream width (m) :',
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor,
	width: 300,
	left: 5
});	

resultRow1.add(resultLbl1);
win.add(resultRow1);

var resultRow2 = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var resultLbl2 = Titanium.UI.createLabel({
	text: 'Width at well location (m) :',
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor,
	width: 300,
	left: 5
});	

resultRow2.add(resultLbl2);
win.add(resultRow2);

var resultRow3 = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var resultLbl3 = Titanium.UI.createLabel({
	text: 'Distance to stagnation point (m) :',
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor,
	width: 300,
	left: 5
});	

resultRow3.add(resultLbl3);
win.add(resultRow3);		


//********** Calculate ****************************
function Calculate()
{
	var val1 = parseFloat(var1.value.replace(',', '.'));	
	var val2 = parseFloat(var2.value.replace(',', '.'));
	var val3 = parseFloat(var3.value.replace(',', '.'));

	var result1 = val1/(val2*val3);
	var result2 = val1/(val2*val3*2);
	var result3 = val1/(val2*val3*2*Math.PI);
	var resultRounded1 = Math.round(result1*100)/100;
	var resultRounded2 = Math.round(result2*100)/100;
	var resultRounded3 = Math.round(result3*100)/100;

if (isNaN(resultRounded1))
	{
		resultLbl1.text = '';
		resultLbl2.text = 'Result is null, check input fields!';
	}
if (isNaN(resultRounded2))
	{
		resultLbl2.text = 'Result is null, check input fields!';
	}
if (isNaN(resultRounded3))
	{
		resultLbl3.text = '';
		resultLbl2.text = 'Result is null, check input fields!';
	}
else 
	{
		resultLbl1.text = 'Maximum upstream width (m) : '+resultRounded1+'';
		resultLbl2.text = 'Width at well location (m) : '+resultRounded2+'';
		resultLbl3.text = 'Distance to stagnation point (m) : '+resultRounded3+'';
	}
}

//***************** ABOUT WINDOW ***********************

currwin.activity.onCreateOptionsMenu = function(e) {
    var menu = e.menu;
 
    var aboutMenuItem = menu.add({
        title : "About",
    	showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM
    });
        
	aboutMenuItem.addEventListener("click", function(e) {
        var detailInfo = Titanium.UI.createWindow({
        	title: 'Capture zone',
        	url: 'DetailDescription.js',
        	lblText: 'This application calculates three capture zone main measures from pumping in a sloping unconfined aquifer. The far field flow is derived from Darcy´s law, which means that the flow equals the product of transmissivity and natural hydraulic gradient per unit width. In essence, the ratio between the far upstream width, width at well and downstream stagnation point that marks the end of the capture zone is 1:1/2:1/2(pi). Flow outside these hydraulic boundaries, is not contributing to the pumping.'
    	});
    	
    	detailInfo.open();
	});
};

//****************************************************

currwin.add(win);
