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
	text: "This application calculates the groundwater capture zone radius based on pumping rate and groundwater recharge when the natural gradient equals zero.",
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

var var1 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width:130,
        right: 5
});
pumpingRateRow.add(var1);
win.add(pumpingRateRow);

var effectivePorosityRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var lbl2 = Titanium.UI.createLabel({
	text: 'Effective porosity (-):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
effectivePorosityRow.add(lbl2);

var var2 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130
    });    
effectivePorosityRow.add(var2);
win.add(effectivePorosityRow);

var arealRecharge = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var lbl3 = Titanium.UI.createLabel({
	text: 'Areal recharge (m/year):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
arealRecharge.add(lbl3);

var var3 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width: 130,
        right: 5
    });   
arealRecharge.add(var3);
win.add(arealRecharge);    

var saturatedThicknessRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var lbl4 = Titanium.UI.createLabel({
	text: 'Saturated thickness (m):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
saturatedThicknessRow.add(lbl4);

var var4 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width: 130,
        right: 5
    });    
saturatedThicknessRow.add(var4);
win.add(saturatedThicknessRow);

var timeRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl5 = Titanium.UI.createLabel({
	text: 'Time (year):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
timeRow.add(lbl5);

var var5 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width: 130,
        right: 5
    });   
timeRow.add(var5);
win.add(timeRow);    


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
	text: 'Radius of capture (m):',
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

var result = Math.sqrt((val1*val5*31500000)/((val3*Math.PI*val5)+(val2*val4*Math.PI)));
var resultRounded = Math.round(result*100)/100;

if (isNaN(resultRounded))
	{
		resultLbl.text = 'Result is null, check input fields!';
	}
	else 
	{
		resultLbl.text = 'Radius of capture (m) : '+resultRounded+'';
	}
}
win.addEventListener("click", function()
{
    var1.blur();
    var2.blur();
    var3.blur();
    var4.blur();
    var5.blur();

});

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
        	title: 'Groundwater balance',
        	url: 'DetailDescription.js',
    		lblText: 'This application calculates the groundwater capture zone radius based on pumping rate and groundwater recharge when the natural gradient equals zero. The pumping water derives from water contained in the aquifer cylinder and from recharge inflow on top. When pumping takes a long time, the original water content in the aquifer becomes negligable, and capture zone radius is dominated by the pumping rate and recharge.'
    	});
    	     		
    	aboutWindow.open();
	});
};

//****************************************************
