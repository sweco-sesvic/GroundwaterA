// this sets the background color of the master UIView (when there are no windows/tab groups on it)
/// <reference path="Titanium-vsdoc.js" />
/// <reference path="jquery-1.4.1-vsdoc" />
// this sets the background color of the master UIView (when there are no windows/tab groups on it)

Titanium.UI.setBackgroundColor('#000');

var aboutWin = Titanium.UI.currentWindow;
aboutWin.backgroundImage = 'images/bgGradient.png';
aboutWin.translucent = true;



var doneBtn = Titanium.UI.createButton({
    title:'Done',
    enabled: true
});

var backBtn = Titanium.UI.createButton({
    title:'Back',
    enabled: true
});

var platform = Titanium.Platform.getVersion();
var top = 0;
if (platform == 6.0)
{
	top = 35;
	aboutWin.setLeftNavButton(backBtn);
}

var scrolly = Titanium.UI.createScrollView({
	bottom: 55,
	top: top,
	contentWidth: 'auto',
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:false	
	});


//****
var aboutWindowText = Titanium.UI.createLabel({
		text: "GROUNDWATER TOOLBOX\n\n" 
		+"This application is served by Sweco. Sweco is a provider of international consulting engineering services whose engineers, architects and environmental experts are working together to contribute to the creation of a sustainable society. The service offering covers the entire spectrum from feasibility studies, analyses and strategic planning to engineering, design and project management.\n\n" 
		+"To facilitate our work, this application provides some of the most basic hydrogeological methods.\n\n" 
		+"Visit us at www.swecogroup.com", 
    color:'#FFF',
    font:{fontSize:14, fontWeight:'bold',fontFamily:'Helvetica Neue'},
    textAlign:'center',
    top:30,
    left: 5,
    right: 5,
    height: 'auto'
	});
	
	scrolly.add(aboutWindowText);
	
	
var logoView = Titanium.UI.createView({
		width: '100%',
		height: 50,
		bottom: 0,
		backgroundColor: 'black'
		});
			
var aboutImgView = Titanium.UI.createImageView({
		image: 'images/sweco.png',
		height: 40,
		bottom: 7
	});
	logoView.add(aboutImgView);
	


//**

//removed btn iOs7  --- 8 oktober 2013
//aboutWin.setRightNavButton(doneBtn);
aboutWin.add(scrolly);
aboutWin.add(logoView);

backBtn.addEventListener('click', function (e) {
    Titanium.UI.currentWindow.close();
});




