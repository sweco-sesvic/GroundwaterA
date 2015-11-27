// this sets the background color of the master UIView (when there are no windows/tab groups on it)
/// <reference path="Titanium-vsdoc.js" />
/// <reference path="jquery-1.4.1-vsdoc" />
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');
var currwin = Titanium.UI.currentWindow;
currwin.backgroundImage = 'images/bgGradient.png';
var textColor ='#FFF';
var rowHeight = Ti.UI.SIZE;
var rows = [];

var win = Titanium.UI.createScrollView({
	top:0,
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:false,
	scrollType: 'vertical',
	layout: 'vertical'
});

//****DESCRIPTION LABEL****
var descRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var descLabel = Titanium.UI.createLabel({
	text: "Sichardt and Weber present two formulas to quickly estimate the size of the influence radius R(0) from a production well with a drawdown.",
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	color: textColor,
	left: 5
});	

descRow.add(descLabel);
win.add(descRow);


//****************** INPUT FIELDS *******************
var estimatedDrawdownRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl0 = Titanium.UI.createLabel({
	text: 'Drawdown in aquifer, just \noutside the well s (m): ',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
estimatedDrawdownRow.add(lbl0);

var var0 = Ti.UI.createTextArea({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130,
        softKeyboardOnFocus : Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS
    });
estimatedDrawdownRow.add(var0);
win.add(estimatedDrawdownRow);


var ConductivityRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl1 = Titanium.UI.createLabel({
	text: 'Aquifer hydraulic \nconductivity K (m/s): ',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
ConductivityRow.add(lbl1);

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
ConductivityRow.add(var1);
win.add(ConductivityRow);


var timeCalculationRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl2 = Titanium.UI.createLabel({
	text: 'Calculation time t (days): ',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
timeCalculationRow.add(lbl2);

var var2 = Ti.UI.createTextArea({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130,
        softKeyboardOnFocus : Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS
    }); 
timeCalculationRow.add(var2);
win.add(timeCalculationRow);


//******************** CALCULATEBTN************************** 
var calcRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var calculateBtn = Titanium.UI.createButton({
	title:'Calculate',
	width:200,
	color:'#B5CCEF',
	backgroundColor: 'transparent'
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
	text: 'Sichardt: Approximate influence radius R(0) (m): ',
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
	text: 'Weber: Approximate influence radius R(0) (m): ',
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
	text: 'Approximate time to reach steady state (days): ',
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor,
	width: 300,
	left: 5
});	
resultRow3.add(resultLbl3);
win.add(resultRow3);


var resultRow4 = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
}); 

var resultLbl4 = Titanium.UI.createLabel({
	text: 'Approximate mean influence radius R(0) (m): ',
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor,
	width: 300,
	left: 5
});	
resultRow4.add(resultLbl4);
win.add(resultRow4);


//********** Calculate ****************************
function Calculate()
{
	var val0 = parseFloat(var0.value.replace(',', '.'));
	var val1 = parseFloat(var1.value.replace(',', '.'));
	var val2 = parseFloat(var2.value.replace(',', '.'));

	var result1 = 3000*val0*Math.sqrt(val1);
	var resultRounded1 = Math.round(result1 / 10) * 10;
	var result2 = 3*Math.sqrt(val0*val1*val2*86400/0.4);
	var resultRounded2 = Math.round(result2 / 10) * 10;
	var result3 = val0*4;
	var result4 = (resultRounded1+resultRounded2)/2;
	
	if (isNaN(resultRounded1) || isNaN(resultRounded2) || isNaN(result3) || isNaN(result4))
	{
		resultLbl1.text = 'Result is null, check input fields!';
		resultLbl2.text = '';
		resultLbl3.text = '';
		resultLbl4.text = '';
	}
	else 
	{
		resultLbl1.text = 'Sichardt: Approximate influence radius R(0) (m): '+resultRounded1+'';
		resultLbl2.text = 'Weber: Approximate influence radius R(0) (m): '+resultRounded2+'';
		resultLbl3.text = 'Approximate time to reach steady state (days): '+result3+'';
		resultLbl4.text = 'Approximate mean influence radius R(0) (m): '+result4+''; 
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
        	title: 'Influence Radius by Sichardt and Weber',
        	url: 'DetailDescription.js',
        	lblText: 'Sichardt and Weber present two formulas to quickly estimate the size of the influence radius R(0) from a production well with a drawdown.' 
					+ '\nThe formulas are however not their prime interest work, but mere an intermediate steps to calculate drawdown in a well. The Sichardt formula is: R(0) ≈ 3000·s·√K'
					+ '\n\nThe formula does not directly account for groundwater recharge, but indirectly do so by including the hydraulic conductivity K.'
					+ '\nIt is valid for unconfined conditions. For high K-values, the formula may underestimate the influence radius. If not the drawdown is from a single well,' 
					+ 'but from a line of wells, R(0) is about 50-70 % of the result. The result is presented as powers of 10 meters, which still may be incorrect.'
					+ '\n\nWeber presents an approximate solution, based on aquifer thickness H, hydraulic conductivity K, time t and two parameters c and b,' 
					+ 'of which c is 2,8-3,5 and β is 0,14 for coarse soil and 0,42 for fine sand.'
					+ '\n\nThe formula can be generalized to (s=H): R(0) ≈ c·√(s·K·t/β)'
					+ '\n\nThe result is presented as powers of 10 meters. Here is used: c=3 and β=0,4 (≈sand)'
					+ '\n\nAn approximate estimate is presented of the time to reach steady state. Also this estimate is uncertain: t ≈ 4·s (days, when drawdown=s is in meters)'
					+ '\n\nIt must be emphasized that the formulas only should be used for initial estimates, and are not correct to use for important statements or assessments! The error may be large.'
					+ '\nProcedure:'
					+ '\n1. Estimate the time to reach steady state from drawdown in aquifer (=Result #3)'
					+ '\n2. Use this figure as Entry #3, "Calculation time".'
					+ '\n3. Recalculate'
					+ '\n4. Use mean of Sichardt and Weber ((=Result #4)'
					+ '\n\nSee, for instance:'
					+ '\nThurner, Hydrogeologie, Springer-Verlag, 1967.'
					+ '\nWeber, Die Rechweite von Grundwasserabsenkungen mittels Rohrbrunnen, Springer, 1928.'
					+ '\nJohn Woodward, An Introduction to Geotechnical Processes, Spon Press,  2005, p. 24.'
   		});
     		
    	aboutWindow.open();
	});
};

//****************************************************

currwin.add(win);
