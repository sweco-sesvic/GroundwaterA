// this sets the background color of the master UIView (when there are no windows/tab groups on it)
/// <reference path="Titanium-vsdoc.js" />
/// <reference path="jquery-1.4.1-vsdoc" />
// this sets the background color of the master UIView (when there are no windows/tab groups on it)

Titanium.UI.setBackgroundColor('#000');
var win = Titanium.UI.currentWindow;
win.backgroundImage = 'images/bgGradient.png';
var textColor ='#FFF';
var rowHeight = 40;
var rows = [];


//****DESCRIPTION LABEL*****
var descRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var descLabel = Titanium.UI.createLabel({
	text: "This application calculates the drawdown in a well situated in a confined aquifer using Thiem's equation.",
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

var influenceRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var lbl3 = Titanium.UI.createLabel({
	text: 'Influence radius (m):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
influenceRow.add(lbl3);

var var3 = Ti.UI.createTextArea({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130
    });
influenceRow.add(var3);
win.add(influenceRow);    

var wellRadiusRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var lbl4 = Titanium.UI.createLabel({
	text: 'Well radius (m):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
wellRadiusRow.add(lbl4);

var var4 = Ti.UI.createTextArea({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130
    });
wellRadiusRow.add(var4);
win.add(wellRadiusRow);

var skinFactorRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var lbl5 = Titanium.UI.createLabel({
	text: 'Skin factor (-):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
skinFactorRow.add(lbl5);

var var5 = Ti.UI.createTextArea({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130
    });
skinFactorRow.add(var5);
win.add(skinFactorRow);    


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
	text: 'Drawdown (m) :',
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
	
	var result = (val1/(2*Math.PI*val2)) * (Math.log(val3/val4) +val5);
	var resultRounded = Math.round(result*100)/100;
	if (isNaN(resultRounded))
	{
		resultLbl.text = 'Result is null, check input fields!';
	}
	else 
	{
		resultLbl.text = 'Drawdown (m) : '+resultRounded+'';
	}
}

//***************** ABOUT WINDOW ***********************

win.activity.onCreateOptionsMenu = function(e) {
    var menu = e.menu;
 
    var aboutMenuItem = menu.add({
        title : "About",
        //backgroundImage: '/images/info_24w.png',
    	showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM
    });
        
	aboutMenuItem.addEventListener("click", function(e) {
        var aboutWindow = Titanium.UI.createWindow({
        	title: 'Drawdown in a well',
        	url: 'DetailDescription.js',
        	lblText: "This application calculates the drawdown in a well situated in a confined aquifer using Thiem's equation. Thiem's equation is valid for a confined aquifer, where the groundwater flow is radial and horizontal to the pumping well.\n\nThe skin factor denotes the additional drawdown in the well usually caused by a combination of partial filter penetration and clogging in wells. The skin factor is usually negative and -3 to -6 for wells in crystalline rocks, and is +2 to +5 in normal unclogged soil deposit pumping wells. For low developed and partially clogged wells, the skin factor can be >+6. A negative skin factor implies a larger effective well radius than the nominal, and a positive skin factor denotes a smaller effective radius than the nominal."
    	});
     		
    	aboutWindow.open();
	});
};

//****************************************************

