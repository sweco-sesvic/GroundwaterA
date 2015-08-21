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
	text: "This application calculates the travel time to a well from an upstream polluted area, based on recharge.",
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	color: textColor,
	left: 5
});	

descRow.add(descLabel);
win.add(descRow);

    
//****************** INPUT FIELDS *******************

var aquiferRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl1 = Titanium.UI.createLabel({
	text: 'Aquifer depth (m):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
aquiferRow.add(lbl1);

var var1 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width:130,
        right: 5
});
aquiferRow.add(var1);
win.add(aquiferRow);

var rechargeRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var lbl2 = Titanium.UI.createLabel({
	text: 'Recharge (m/yr):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
rechargeRow.add(lbl2);

var var2 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130
    }); 
rechargeRow.add(var2);
win.add(rechargeRow);

var effectivePorosityRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var lbl3 = Titanium.UI.createLabel({
	text: 'Effective porosity (-):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
effectivePorosityRow.add(lbl3);

var var3 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width: 130,
        right: 5
    });   
effectivePorosityRow.add(var3);
win.add(effectivePorosityRow);    

var distanceFromWellRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var lbl4 = Titanium.UI.createLabel({
	text: 'Distance from well\nto upstream divide (m):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
distanceFromWellRow.add(lbl4);

var var4 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width: 130,
        right: 5
    });    
distanceFromWellRow.add(var4);
win.add(distanceFromWellRow);

var distanceFromPollutedRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var lbl5 = Titanium.UI.createLabel({
	text: 'Distance from divide\nto polluted area (m):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
distanceFromPollutedRow.add(lbl5);

var var5 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width: 130,
        right: 5
    });    
distanceFromPollutedRow.add(var5);
win.add(distanceFromPollutedRow);    


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
	text: 'Mean travel time to well (yr):',
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

var result = ((Math.log(val4/val5))*val1*val3)/val2;
var resultRounded = Math.round(result*100)/100;
		if (isNaN(resultRounded))
		{
			resultLbl.text = 'Result is null, check input fields!';
		}
		else
		{
			resultLbl.text = 'Mean travel time to well (yr) : '+resultRounded+'';
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
        	title: 'Time of travel to a well',
        	url: 'DetailDescription.js',
        	lblText: "This application calculates the travel time to a well from an upstream polluted area, based on recharge.\n\n" 
			+"As v=dx/dt= [(W*x)/(D*n(e))], this implies that\n\n" 
			+"t=[ln(x/x(0))*D*n(e)/W], see\n" 
			+"Appelo&Postma, \"Geochemistry, groundwater and pollution\".\n\n" 
			+"where\n" 
			+"W = recharge\n" 
			+"x = distance from water divide\n" 
			+"x(0) = distance from water divide to infiltration\n" 
			+"D = aquifer depth\n" 
			+"n(e) = effective porosity"
    	});
     		
    	aboutWindow.open();
	});
};

//****************************************************
