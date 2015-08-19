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
var descRow = createTableViewRow('auto', 'transparent', 'absolute');
var descLabel = Titanium.UI.createLabel({
	text: "This application estimates the basic settlements at a point of interest (POI), subject to groundwater drawdown, caused by nearby pumping/drainage.",
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	color: textColor,
	left: 5
});	

descRow.add(descLabel);
rows.push(descRow);
    
//****************** INPUT FIELDS *******************

var pumpingrateRow = createTableViewRow('auto', 'transparent', 'absolute');

var lbl1 = Titanium.UI.createLabel({
	text: 'Pumping rate (m³/s):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
pumpingrateRow.add(lbl1);

var var1 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width:130,
        right: 5
});
pumpingrateRow.height = rowHeight;
pumpingrateRow.add(var1);
rows.push(pumpingrateRow);

var transmissivityRow = createTableViewRow('auto', 'transparent', 'absolute');
var lbl2 = Titanium.UI.createLabel({
	text: 'Transmissivity (m²/s):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
transmissivityRow.add(lbl2);

var var2 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130
    });
transmissivityRow.height = rowHeight;    
transmissivityRow.add(var2);
rows.push(transmissivityRow);

var estimatedInfluenceRow = createTableViewRow('auto', 'transparent', 'absolute');
var lbl3 = Titanium.UI.createLabel({
	text: 'Estimated influence\nradius from pumping (m):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
estimatedInfluenceRow.add(lbl3);

var var3 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width: 130,
        right: 5
    });
estimatedInfluenceRow.height = rowHeight;    
estimatedInfluenceRow.add(var3);
rows.push(estimatedInfluenceRow);    

var distanceFromPumpingArea = createTableViewRow('auto', 'transparent', 'absolute');
var lbl4 = Titanium.UI.createLabel({
	text: 'Distance from\npumping area to POI (m):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
distanceFromPumpingArea.add(lbl4);

var var4 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width: 130,
        right: 5
    });
distanceFromPumpingArea.height = 45;    
distanceFromPumpingArea.add(var4);
rows.push(distanceFromPumpingArea);


var soilLayerThicknessRow = createTableViewRow('auto', 'transparent', 'absolute');
var lbl5 = Titanium.UI.createLabel({
	text: 'Soil layer thickness\nat POI with E`(0) (m):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
soilLayerThicknessRow.add(lbl5);

var var5 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width: 130,
        right: 5
    });
soilLayerThicknessRow.height = 45;    
soilLayerThicknessRow.add(var5);
rows.push(soilLayerThicknessRow);    


var oneDimensionalSoilRow = createTableViewRow('auto', 'transparent', 'absolute');
var lbl6 = Titanium.UI.createLabel({
	text: 'One-dimensional\nsoil stiffness E`(0) (MPa):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
oneDimensionalSoilRow.add(lbl6);

var var6 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width: 130,
        right: 5
    });
oneDimensionalSoilRow.height = 45;    
oneDimensionalSoilRow.add(var6);
rows.push(oneDimensionalSoilRow);


//******************** CALCULATEBTN************************** 
var calcRow = createTableViewRow(75, 'transparent', 'absolute');
var calculateBtn = Titanium.UI.createButton({
	title:'Calculate',
	width:200
});    

calcRow.add(calculateBtn);
rows.push(calcRow);
calculateBtn.addEventListener('click', function()
{
	Calculate();
});

//***********************************************************
var resultHeaderRow = createTableViewRow('auto', 'transparent', 'absolute'); 
resultHeaderRow.backgroundColor = 'lightgray';
var resultHeaderLbl = Titanium.UI.createLabel({
	text: 'Result:',
	font:{fontSize:18,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: 'black',
	left: 5
});	
resultHeaderRow.add(resultHeaderLbl);
rows.push(resultHeaderRow);

var resultRow = createTableViewRow('auto', 'transparent', 'absolute'); 
var resultLbl = Titanium.UI.createLabel({
	text: 'The magnitude of settlement at POI is (mm):',
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor,
	width: 300,
	left: 5
});
	
resultRow.height = rowHeight;
resultRow.add(resultLbl);
rows.push(resultRow);


var tableView = Titanium.UI.createTableView({
		data: rows, 
		style: Titanium.UI.iPhone.TableViewStyle.PLAIN,
		separatorStyle: 0, 
		separatorColor: 'transparent',
		backgroundColor:'transparent',
		height:'auto',
		left: 5,
		top: 10
	});

win.add(tableView);

//*************************************************

//Var4*Math.exp(2*3,14*var2*var3)/var1
//********** Calculate ****************************
function Calculate()
{
var val1 = parseFloat(var1.value.replace(',', '.'));
var val2 = parseFloat(var2.value.replace(',', '.'));
var val3 = parseFloat(var3.value.replace(',', '.'));
var val4 = parseFloat(var4.value.replace(',', '.'));
var val5 = parseFloat(var5.value.replace(',', '.'));
var val6 = parseFloat(var6.value.replace(',', '.'));

// var val1 = 0.001;
// var val2 = 0.0005;
// var val3= 500;
// var val4= 0.1;
// var val5 = 1;
// var val6 = 10;
 


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

win.addEventListener("click", function()
{
    var1.blur();
    var2.blur();
    var3.blur();
    var4.blur();
    var5.blur();
    var6.blur();
});

function createTableViewRow(height, selBgColor, layout){
	return Ti.UI.createTableViewRow({
		height: height,
		layout: layout,
		selectedBackgroundColor: selBgColor
	});
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
        	title: 'Settlements from drawdown',
        	url: 'DetailDescription.js',
        	lblText: "This application estimates the basic settlements at a point of interest (POI), subject to groundwater drawdown caused by nearby pumping/drainage.\n\nThiems formula is valid for a confined aquifer, where the groundwater flow is radial and horizontal to the pumping area. The soil is uniform and the surface is flat. The vertical settlement increases with the thickness of the soil and with the drawdown. It will be smaller if the one-dimensional soil stiffness E`(0) is larger.\n\nIn reality, the soil is not homogeneous, nor will the pressure drop be constant over the soil volume, nor is the soil stiffness constant. In general, settlements also will take time to develop.\n\nGeotechnical properties vary in space. Hence, assess the uncertainty, spatial variability and the consequences involved as the soil is inherently heterogeneous but may here be represented by the vertical weighted harmonic mean value as an estimate.\n\nSee, for instance:\nPreene, Roberts, Powrie, Dyer, Groundwater control-design and practice, CIRIA C515,\nCashman, Preene, Groundwater Lowering in Construction, CRC,\nHyun-Ki Kim, Spatial Variability in Soils: Stiffness and Strength, Thesis, Georgia Inst. of Technology, 2005."
    	});
     		
    	aboutWindow.open();
	});
};

//****************************************************
