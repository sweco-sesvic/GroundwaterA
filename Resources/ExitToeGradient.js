// this sets the background color of the master UIView (when there are no windows/tab groups on it)
/// <reference path="Titanium-vsdoc.js" />
/// <reference path="jquery-1.4.1-vsdoc" />
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');
var win = Titanium.UI.currentWindow;
win.backgroundImage = 'images/bgGradient.png';
var textColor ='#FFF';
var rowHeight = 45;
var rows = [];


//****DESCRIPTION LABEL*****
var descRow = createTableViewRow('auto', 'transparent', 'absolute');
var descLabel = Titanium.UI.createLabel({
	text: "This application calculates the approximate toe exit gradient i(max) in a wide (W>H) sheet pile trench.",
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	color: textColor,
	left: 5
});	

descRow.add(descLabel);
rows.push(descRow);
    
//****************** INPUT FIELDS *******************

var aquiferHeightRow = createTableViewRow('auto', 'transparent', 'absolute');

var lbl1 = Titanium.UI.createLabel({
	text: 'Aquifer height H\nabove trench bottom (m):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
aquiferHeightRow.add(lbl1);

var var1 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width:110,
        right: 5
});
aquiferHeightRow.height = rowHeight;
aquiferHeightRow.add(var1);
rows.push(aquiferHeightRow);

var pileSheetDepthRow = createTableViewRow('auto', 'transparent', 'absolute');
var lbl2 = Titanium.UI.createLabel({
	text: 'Pile sheet depth D\nbelow trench bottom (m):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
pileSheetDepthRow.add(lbl2);

var var2 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 110
    });
pileSheetDepthRow.height = rowHeight;    
pileSheetDepthRow.add(var2);
rows.push(pileSheetDepthRow);

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
	text: 'The approximate exit gradient i(max) at toe\n(-):',
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

//********** Calculate ****************************
function Calculate()
{
var val1 = parseFloat(var1.value.replace(',', '.'));
var val2 = parseFloat(var2.value.replace(',', '.'));


var result = (val1/(val2*Math.PI));
var resultRounded = Math.round(result*100)/100;
if (isNaN(resultRounded))
	{
		resultLbl.text = 'Result is null, check input fields!';
	}
	else 
	{
		resultLbl.text = 'The approximate exit gradient i(max) at toe\n(-): '+resultRounded+'';
	}
}
win.addEventListener("click", function()
{
    var1.blur();
    var2.blur();

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
        	title: 'Exit toe gradient in sheet pile trench',
        	url: 'DetailDescription.js',
        	lblText: 'This application calculates the approximate toe exit gradient i(max) in a wide (W>H) sheet pile trench. The solution is valid for infinite groundwater depth. The exit gradient is unbounded at the toe of a sheet structure set at the ground level.\n\nA pumped water level is at the trench bottom level, thus Δp=H. The maximum exit gradient i(max) is given by Harr as i(max) = H/[pi*D], where H=aquifer heigth above pumped trench bottom and D=sheet pile depth below trench bottom. The formula is valid for wide trenches, W>H. It is assumed that the porous media has infinite depth.\n\nThe teoretical Safety Factor then is F=1/i(max). High gradients cause piping or heaving within ca D/2, in Terzaghi´s model tests (according to Cedergren). For proper use, limitation and interpretation, see f.i.:\n\nMilton E. Harr, Groundwater and Seepage, Dover Publ. 1990, p.111/124, NAVFAC-DM 7.1p.267-268, John Woodward, An Introduction to Geotechnical Processes, Spon Press, 2005, p.24-25 and Harry Cedergren, Seepage, Drainage an Flow nets,Wiley, 1989, p. 411'
    	});
     		
    	aboutWindow.open();
	});
};

//****************************************************
