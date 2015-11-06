// this sets the background color of the master UIView (when there are no windows/tab groups on it)
/// <reference path="Titanium-vsdoc.js" />
/// <reference path="jquery-1.4.1-vsdoc" />
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');
var win = Titanium.UI.currentWindow;
win.backgroundImage = 'images/bgGradient.png';
var textColor ='#FFF';
var rowHeight = 40;


//****DESCRIPTION LABEL****
var descRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var descLabel = Titanium.UI.createLabel({
	text: "A partially penetrating long trench down to a confined aquifer receives water from both sides of the trench.",
	font:{fontSize:fontSize,fontFamily:'Helvetica Neue'},
	color: textColor,
	left: 5
});	

descRow.add(descLabel);
win.add(descRow);

    
//****************** INPUT FIELDS *******************
var row1 = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl0 = Titanium.UI.createLabel({
	text: 'Linear length B of trench \n(m): ',
	left: 5,
	font:{fontSize:fontSize,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
row1.add(lbl0);

var var0 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        keyboardType: Titanium.UI.KEYBOARD_DECIMAL_PAD,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width:110 + plusIpad,
        height : fieldHeight,
        right: 5
});
row1.add(var0);
win.add(row1);


var row2 = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl1 = Titanium.UI.createLabel({
	text: 'Aquifer hydraulic \nconductivity K (m/s): ',
	left: 5,
	font:{fontSize:fontSize,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
row2.add(lbl1);

var var1 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        keyboardType: Titanium.UI.KEYBOARD_DECIMAL_PAD,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width:110 + plusIpad,
        height : fieldHeight,
        right: 5
});
row2.add(var1);
win.add(row2);


var row3 = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl2 = Titanium.UI.createLabel({
	text: 'Thickness of confined \naquifer D (m): ',
	left: 5,
	font:{fontSize:fontSize,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
row3.add(lbl2);

var var2 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        keyboardType: Titanium.UI.KEYBOARD_DECIMAL_PAD,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 110 + plusIpad,
        height : fieldHeight
});   
row3.add(var2);
win.add(row3);


var row4 = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl3 = Titanium.UI.createLabel({
	text: 'Drawdown s (m): ',
	left: 5,
	font:{fontSize:fontSize,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
row4.add(lbl3);

var var3 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        keyboardType: Titanium.UI.KEYBOARD_DECIMAL_PAD,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 110 + plusIpad,
        height : fieldHeight
    });  
row4.add(var3);
win.add(row4);


var row5 = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl4 = Titanium.UI.createLabel({
	text: 'Depth of penetration of \ntrench into aquifer p (m): ',
	left: 5,
	font:{fontSize:fontSize,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
row5.add(lbl4);

var var4 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        keyboardType: Titanium.UI.KEYBOARD_DECIMAL_PAD,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 110 + plusIpad,
        height : fieldHeight
    });
row5.add(var4);
win.add(row5);


//******************** CALCULATEBTN************************** 
var calcRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var calculateBtn = Titanium.UI.createButton({
	title:'Calculate',
	width:200,
	backgroundColor: 'transparent',
	color:'#B5CCEF'
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
	font:{fontSize:bigFontSize,fontWeight:'bold',fontFamily:'Helvetica Neue'},
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
	text: 'Steady-state inflow (L/s): ',
	font:{fontSize:fontSize,fontWeight:'bold',fontFamily:'Helvetica Neue'},
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
	text: 'Approximate distance of influence (m): ',
	font:{fontSize:fontSize,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor,
	width: 300,
	left: 5
});	
resultRow2.add(resultLbl2);
win.add(resultRow2);


//********** Calculate ****************************
function Calculate()
{
	var val0 = parseFloat(var0.value.replace(',', '.'));
	var val1 = parseFloat(var1.value.replace(',', '.'));
	var val2 = parseFloat(var2.value.replace(',', '.'));
	var val3 = parseFloat(var3.value.replace(',', '.'));
	var val4 = parseFloat(var4.value.replace(',', '.'));

	var result0 = ((1,44-1,338*Math.sqrt(val4/val2))^2);
	
	Ti.API.info("result0: " + result0);
		
	var result1 = (0,6*3000*val3*Math.sqrt(val1)-1);
	var result2 = 1000*(2*val1*val2*val0*val3)/(result1+result0*val2);
	
	var resultRounded1 = Math.round(result1*10)/10;
	var resultRounded2 = Math.round(result2*10)/10;
	
	if (isNaN(resultRounded1))
	{
		resultLbl1.text = '';
		resultLbl2.text = 'Result is null, check input fields!';
	}
	if (isNaN(resultRounded2))
	{
		resultLbl2.text = 'Result is null, check input fields!';
	}
	else 
	{
		resultLbl1.text = 'Steady-state inflow (L/s): '+resultRounded2+'';
		resultLbl2.text = 'Approximate distance of influence (m): '+resultRounded1+'';
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
        	title: 'Inflow to excavation',
        	url: 'DetailDescription.js',
        	lblText: 'A partially penetrating long trench down to a confined aquifer receives water from both sides of the trench.'
        		+ '\n\nThe formula is in essence Darcy´s law or Q=2·T·i·B, where T=K·D, B=B and i ≈ s/L, flow from two sides.'
        		+ '\n\nThe partial penetration is accounted for by multiplying a factor [0-2] to the thickness D and adding it to the distance of influence, thus L becomes L´.'
        		+ '\n\nQ = (2·K·D·B·s)/(L+λ*D)'
        		+ '\nλ ≈ [1,44-1,33·√(p/d)]2'
        		+ '\n\nThe crucial parameter, besides K, is distance of influence L. L can be estimated as:'
        		+ '\nL ≈ c·3000·s·√K (Sichardt), where c ≈ 0,5-0,7.'
        		+ '\n(here c=0,6).'
        		+ '\n\nLimitations in calculation, see:'
        		+ '\nCashman & Preene, Groundwater Lowering in Construction, A practical guide to Dewatering (ITALIC), CRC Press, 2013, table 7.1.'
     	});
     		
    	aboutWindow.open();
	});
};

//****************************************************
