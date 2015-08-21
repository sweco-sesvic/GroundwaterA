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
	text: "This application estimates the harmonic mean value for three different properties of different weights.",
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	color: textColor,
	left: 5
});	

descRow.add(descLabel);
win.add(descRow);

    
//****************** INPUT FIELDS *******************

var property1Row = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl1 = Titanium.UI.createLabel({
	text: 'Property of layer 1\n(f.i. K(1) or E`(1)):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
property1Row.add(lbl1);

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
property1Row.add(var1);
win.add(property1Row);

var thickness1Row = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var lbl2 = Titanium.UI.createLabel({
	text: 'Thickness of layer 1\n(f.i. b(1) (m)):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
thickness1Row.add(lbl2);

var var2 = Ti.UI.createTextArea({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130
    });
thickness1Row.add(var2);
win.add(thickness1Row);

var property2Row = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var lbl3 = Titanium.UI.createLabel({
	text: 'Property of layer 2\n(f.i. K(2) or E`(2)):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
property2Row.add(lbl3);

var var3 =Ti.UI.createTextArea({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130
    });
property2Row.add(var3);
win.add(property2Row);    

var thickness2Row = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var lbl4 = Titanium.UI.createLabel({
	text: 'Thickness of layer 2\n(f.i. b(2) (m)):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
thickness2Row.add(lbl4);

var var4 = Ti.UI.createTextArea({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130
    });   
thickness2Row.add(var4);
win.add(thickness2Row);

var property3Row = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var lbl5 = Titanium.UI.createLabel({
	text: 'Property  of layer 3\n(f.i. K(3) or E`(3)):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
property3Row.add(lbl5);

var var5 = Ti.UI.createTextArea({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130
    });
property3Row.add(var5);
win.add(property3Row);    


var thickness3Row = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var lbl6 = Titanium.UI.createLabel({
	text: 'Thickness of layer 3\n(f.i. b(3) (m)):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
thickness3Row.add(lbl6);

var var6 = Ti.UI.createTextArea({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130
    });
thickness3Row.add(var6);
win.add(thickness3Row);


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
	text: 'The weighted harmonic mean is:',
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

var result =(val2+val4+val6)/((val2/val1)+(val4/val3)+(val6/val5));
var toExponential = result.toExponential(1);


var resultRounded = Math.round(result*100)/100;
		if (isNaN(resultRounded))
		{
			resultLbl.text = 'Result is null, check input fields!';
		}
		else
		{
			resultLbl.text = 'The weighted harmonic mean is: '+toExponential.toUpperCase()+'';
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
        	title: 'Harmonic mean of weighted values',
        	url: 'DetailDescription.js',
        	lblText: "This application estimates the harmonic mean value for three different properties of different weights. The harmonic mean is often used to represent rates and ratios.\n\nThis application can for instance be used to estimate the representative hydraulic conductivity K(v) for a vertical groundwater transport through a three layer horizontal sediment, each with a thickness of b(n) and a hydraulic conductivity of K(n), n=1 to 3.\n\nThe weighted harmonic can also be used to represent the overall vertical soil stiffness E`(v) of a three layer soil for settlement estimation, each layer with a thickness of b(n) and a soil stiffness of E`(n), n=1 to 3.\n\nSee, for instance:\nFetter, Applied Hydrogeology,\nPrentice-Hall, and Hyun-Ki Kim, Spatial Variability in Soils: Stiffness and Strength, Thesis, Georgia Inst. of Technology, 2005."
		});
     		
    	aboutWindow.open();
	});
};

//****************************************************
