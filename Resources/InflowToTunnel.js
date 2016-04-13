// this sets the background color of the master UIView (when there are no windows/tab groups on it)
/// <reference path="Titanium-vsdoc.js" />
/// <reference path="jquery-1.4.1-vsdoc" />
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');
var currwin = Titanium.UI.currentWindow;
currwin.backgroundImage = 'images/bgGradient.png';
currwin.navTintColor = '#B5CCEF';
var textColor ='#FFF';
var rowHeight = Ti.UI.SIZE;

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
	text: "Gustafson presents a formula, amongst others, based Thiem, of inflow to a tunnel, with and without sealing.",
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	color: textColor,
	left: 5
});	

descRow.add(descLabel);
win.add(descRow);
    
    
//****************** INPUT FIELDS *******************
var row0 = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl0 = Titanium.UI.createLabel({
	text: 'Mean permeability K(r) of \nrock (m/s): ',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
row0.add(lbl0);

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
row0.add(var0);
win.add(row0);


var row1 = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl1 = Titanium.UI.createLabel({
	text: 'Tunnel depth H below \ngroundwater level (m): ',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
row1.add(lbl1);

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
row1.add(var1);
win.add(row1);


var row2 = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl2 = Titanium.UI.createLabel({
	text: 'Tunnel radius r (m): ',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
row2.add(lbl2);

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
row2.add(var2);
win.add(row2);


var row3 = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl3 = Titanium.UI.createLabel({
	text: 'Skin factor ξ \nclose to tunnel (-): ',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
row3.add(lbl3);

var var3 = Ti.UI.createTextArea({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130,
        softKeyboardOnFocus : Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS
    });  
row3.add(var3);
win.add(row3);


var row4 = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl4 = Titanium.UI.createLabel({
	text: 'Mean permeability K(inj) \nof sealed zone (m/s): ',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
row4.add(lbl4);

var var4 = Ti.UI.createTextArea({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130,
        softKeyboardOnFocus : Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS
    }); 
row4.add(var4);
win.add(row4);


var row5 = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl5 = Titanium.UI.createLabel({
	text: 'Thickness t of sealed \nzone around tunnel (m): ',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
row5.add(lbl5);

var var5 = Ti.UI.createTextArea({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130,
        softKeyboardOnFocus : Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS
    }); 
row5.add(var5);
win.add(row5);


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
	text: 'Inflow to tunnel without sealing (L/min and 100 m): ',
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
	text: 'Inflow to tunnel with sealing (L/min and 100 m): ',
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
	text: 'Resulting inflow, compared to the unsealed inflow: ',
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
	text: 'Approximate influence distance R(sealed)/R(unsealad): ',
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
	var val3 = parseFloat(var3.value.replace(',', '.'));
	var val4 = parseFloat(var4.value.replace(',', '.'));
	var val5 = parseFloat(var5.value.replace(',', '.'));

	var result1 = 1000*60*100*(2*Math.PI*val0*val1)/(Math.log(2*val1/val2)+val3);	
	var result2 = 1000*60*100*(2*Math.PI*val0*val1)/(Math.log(2*val1/val2)+((val0/val4)-1)*(Math.log(1+(val5/val2)))+val3);  
	
	var resultRounded1 = Math.ceil(result1);
	var resultRounded2 = Math.round(result2);
	
	var result3 = resultRounded2/resultRounded1;
	var resultRounded3 = Math.round(result3*100);
	
	if (isNaN(resultRounded1) || isNaN(resultRounded2) || isNaN(resultRounded3))
	{
		resultLbl1.text = 'Result is null, check input fields!';
		resultLbl2.text = '';
		resultLbl3.text = '';
	}
	else 
	{
		resultLbl1.text = 'Inflow to tunnel without sealing (L/min and 100 m): '+resultRounded1+'';
		resultLbl2.text = 'Inflow to tunnel with sealing (L/min and 100 m): '+resultRounded2+'';
		resultLbl3.text = 'Resulting inflow, compared to the unsealed inflow: '+resultRounded3+'%';
		resultLbl4.text = 'Approximate influence distance Rsealed/Runsealad: '+resultRounded3+'%';
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
        	title: 'Steady state inflow to tunnel',
        	url: 'DetailDescription.js',
        	lblText: 'Gustafson presents a formula, amongst others, based Thiem, of inflow to a tunnel, with and without sealing. '
        		+ 'The inflow calculation refers to steady-state conditions. The tunnel is assumed long and rock is homogenous and permeability is isotropic (rarely the case).'
        		+ '\nThe groundwater drawdown is small, to maintain the driving head force. The rock permeability is also falsely assumed to be valid for the near-field of the tunnel. '
        		+ 'The formula includes effect from grouting and also the skin factor ξ, caused by the fractures closest to the tunnel to seal by precipitation and stress. It may usually be -1 to +3, zero without that effect, and initially negative with introduced damage effects from blasting. '
        		+ 'The size of ξ is usually unknown (SKB, Äspö, Sweden). Ongoing precipitation in fissures may also be present. Generally, a rule of thumb is that the inflow q(r) ≈ K(r)·H and that q(inj) ≈ 2·π·K(inj)·H for steady state conditions. '
        		+ '\nThus, the inflow reduction level q(inj)/q(r) is about 2·π·K(inj)/K(r) . Hence, the uncertainty of the permeability of the sealing is critical to the prediction of inflow for the steady state to a sealed tunnel. '
        		+ 'Additionally, the combined (K(inj) + ξ)-effect can be compared to the design-K(inj), from the magnitude of the actual inflow. The formula should be used with caution. The calculation error of inflow without sealing may well be large. '
        		+ 'A correction factor has been proposed by Heuer to about 10 % of the inflow rate predicted from the analytical solution. A reduction to about 30-40 % is obtained by setting the skin factor ξ to 5 instead of commonly set to zero in the Thiem formula. An actual skin >0 may explain some of the error in the estimates, using conventional setting of the Thiem formula. '
        		+ '\nThe influence radius reduction is proportional to (q(inj)/q(r)) to a linear tunnel, but proportional to √(q(inj)/q(r)) for a single well.'
        		+ '\n\nSee, for instance:'
        		+ '\nGustafson G., Hydrogeology for Rock Engineers, ISRM, BeFo, 2012.'
        		+ '\nCashman & Preene, Groundwater Lowering in Construction, A Practical Guide to Dewatering, CRC, 2013.'
        		+ '\nHeuer, R.E. , Estimating rock-tunnel water inflow, Proceeding of the Rapid Excavation and Tunneling Conference, June 18-21, 1995.'
        		+ '\nSKB (Swedish Nuclear Fuel and Waste Company), Site Investigations at Äspö, Sweden.'
     	});
     		
    	aboutWindow.open();
	});
};

//****************************************************

currwin.add(win);

