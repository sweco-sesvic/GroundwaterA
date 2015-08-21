// this sets the background color of the master UIView (when there are no windows/tab groups on it)
/// <reference path="Titanium-vsdoc.js" />
/// <reference path="jquery-1.4.1-vsdoc" />
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var win = Titanium.UI.currentWindow;
win.titleControl = Ti.UI.createLabel({ text: win.title, color: 'white' });
var textColor ='#FFF';

var scrolly = Titanium.UI.createScrollView({
	bottom: 65,
	top:0,
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:false,
	scrollType: 'vertical'
	});

var detailInfoLabel = Titanium.UI.createLabel({
	text: win.lblText,
	top: 10,
	left: 5,
	height:'auto',
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	color: textColor,
	width:300
});

var logoView = Titanium.UI.createView({
	width: '100%',
	height: 60,
	bottom: 0,
	backgroundColor: 'black'
});
var swecoLogo = Titanium.UI.createImageView({
	image: 'images/sweco.png',
	height: 40,
	bottom: 7
});	
	
scrolly.add(detailInfoLabel);
win.add(scrolly);
logoView.add(swecoLogo);
win.add(logoView);



