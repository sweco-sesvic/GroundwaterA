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


//****DESCRIPTION LABEL****
var descRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var descLabel = Titanium.UI.createLabel({
	text: "This application estimates the radial inflow to an excavation by Darcy´s equation Q=kiA.",
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	color: textColor,
	left: 5
});	

descRow.add(descLabel);
win.add(descRow);

    
//****************** INPUT FIELDS *******************
var estimatedInfluenceRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl0 = Titanium.UI.createLabel({
	text: 'Estimated influence\nradius R(0) (m): ',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
estimatedInfluenceRow.add(lbl0);

var var0 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width:110,
        right: 5
});
estimatedInfluenceRow.add(var0);
win.add(estimatedInfluenceRow);

var radiusOfExcavationRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl1 = Titanium.UI.createLabel({
	text: 'Radius of\nexcavation r(w) (m):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
radiusOfExcavationRow.add(lbl1);

var var1 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width:110,
        right: 5
});
radiusOfExcavationRow.add(var1);
win.add(radiusOfExcavationRow);

var waterHeadInfluenceRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl2 = Titanium.UI.createLabel({
	text: 'Water head H(0) at influence\nradius (m):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
waterHeadInfluenceRow.add(lbl2);

var var2 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 110
    });   
waterHeadInfluenceRow.add(var2);
win.add(waterHeadInfluenceRow);

var waterheadCentreRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl3 = Titanium.UI.createLabel({
	text: 'Water head H(w) at centre of\nexcavation (m):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
waterheadCentreRow.add(lbl3);

var var3 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width: 110,
        right: 5
    }); 
waterheadCentreRow.add(var3);
win.add(waterheadCentreRow);    

var hydraulicConductivityRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var lbl4 = Titanium.UI.createLabel({
	text: 'Hydraulic conductivity (m/s):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
hydraulicConductivityRow.add(lbl4);

var var4 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width: 110,
        right: 5
    });   
hydraulicConductivityRow.add(var4);
win.add(hydraulicConductivityRow);

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
	text: 'The estimated inflow Q is (m3/s):',
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
var val0 = parseFloat(var0.value.replace(',', '.'));
var val1 = parseFloat(var1.value.replace(',', '.'));
var val2 = parseFloat(var2.value.replace(',', '.'));
var val3 = parseFloat(var3.value.replace(',', '.'));
var val4 = parseFloat(var4.value.replace(',', '.'));

var m1 = val1+(val0-val1)/2;
var m4 = (val3+(val2-val3)*(m1/val0))*0.9756;
var m2 = 0.097*((m4-val3)/m1);
var m3 = 2* Math.PI*m1*m4;


var result = val4*m2*m3;

var resultRounded = Math.round(result*10000)/1000;
if (isNaN(resultRounded))
	{
		resultLbl.text = 'Result is null, check input fields!';
	}
	else 
	{
		resultLbl.text = 'The estimated inflow Q is (m3/s): '+resultRounded+'';
	}
}
win.addEventListener("click", function()
{
	var0.blur();
    var1.blur();
    var2.blur();
    var3.blur();
    var4.blur();

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
        	title: 'Inflow to excavation',
        	url: 'DetailDescription.js',
        	lblText: 'This application estimates the radial inflow to an excavation by Darcy´s equation Q=kiA.\n\nThis is the simplest empirical inflow formula, in which K denotes the representative hydraulic conductivity, i denotes the average hydraulic gradient and A denotes the cross-sectional area through which flow occurs. As A (and H0 and Hw) is measured from the aquifer base, both horizontal and vertical flow are accounted for. The formula is valid for low flows through uniform soils.\n\nWater head is measured upwards from aquifer base. Alternately, to use the Dupuit well equation accounts only for horizontal radial flow. As the vertical inflow can be greater than the horizontal inflow, the Darcy equation provides only an approximation of the size of the inflow. Prior to introducing numerical values, be ascertain that a correct conceptual model is formed.\n\nSee,  for instance: John Woodward, An Introduction to Geotechnical Processes, Spon Press,  2005, p. 24.'
     	});
     		
    	aboutWindow.open();
	});
};

//****************************************************

