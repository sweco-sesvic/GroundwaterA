// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');
var win = Ti.UI.createWindow({
	// layout: 'vertical'
});

var tableData = [
		{
			title: 'Drawdown in a well', 
			hasChild: true, 
			height: 68, 
			color: 'white',
			id: '1'
		}, 
		{
			title: 'Capture zone', 
			hasChild: true, 
			height: 68,
			color: 'white',
			id: '2'
		},
		{
			title: 'Groundwater balance', 
			hasChild: true, 
			color: 'white',
			height: 68, 
			id: '3'
		}, 
		{
			title: "Influence radius by Thiem equation", 
			hasChild: true, 
			height: 68,
			color: 'white', 
			id: '4'
		}, 
		{
			title: 'Groundwater age and depths', 
			hasChild: true, 
			height: 68,			
			color: 'white', 
			id: '5'
		}, 
		{
			title: 'Travel time to well', 
			hasChild: true, 
			height: 68,			
			color: 'white',
			id:'6' 
		}, 
		{
			title: 'Flow velocity', 
			hasChild: true, 
			height: 68,			
			color: 'white', 
			id:'7'
		},
		{
			title: 'Approximate hydraulic conductivity', 
			hasChild: true, 
			height: 68,			
			color: 'white', 
			id:'8'
		}, 
		{
			title:'Flushing of aquifer concentration', 
			hasChild: true, 
			height: 68,			
			color: 'white', 
			id:'9'
		},
		{
			title:'Exit toe gradient in sheet pile trench', 
			hasChild: true, 
			height: 68,			
			color: 'white', 
			id:'10'
		}, 
		{
			title:'Water head between trenches', 
			hasChild: true, 
			height: 68,			
			color: 'white', 
			id:'11'
		}, 
		{
			title:'Inflow to excavation', 
			hasChild: true, 
			height: 68,			
			color: 'white', 
			id:'12'
		},
		{
			title:'Basic settlement sensitivity for soils', 
			hasChild: true, 
			height: 68,			
			color: 'white', 
			id:'13'
		}, 
		{
			title:'Settlements from drawdown', 
			hasChild: true, 
			height: 68,			
			color: 'white', 
			id:'14'
		}, 
		{
			title:'Harmonic mean of weighted values', 
			hasChild: true, 
			height: 68,			
			color: 'white', 
			id:'15'
		},
		{
			title:'Bayesian Updating', 
			hasChild: true, 
			height: 68,			
			color: 'white', 
			id:'16'
		}, 
		{
			title:'Characteristic value', 
			hasChild: true, 
			height: 68,			
			color: 'white', 
			id:'17'
		},  
		{
			title:'Groundwater flow', 
			hasChild: true, 
			height: 68,			
			color: 'white', 
			id:'18'
		},
		{
			title:'Uniform distribution', 
			hasChild: true, 
			height: 68,			
			color: 'white', 
			id:'19'
		}, 
		{
			title:'Reliability of systems', 
			hasChild: true, 
			height: 68,			
			color: 'white', 
			id:'20'
		}, 
		{
			title:'Inflow to long trench', 
			hasChild: true, 
			height: 68,			
			color: 'white', 
			id:'21'
		}, 
		{
			title:'Influence Radius by Sichardt and Weber', 
			hasChild: true, 
			height: 68,			
			color: 'white', 
			id:'22'
		}, 
		{
			title:'Inflow to tunnel', 
			hasChild: true, 
			height: 68,			
			color: 'white', 
			id:'23'
		}  
	];

var table = Ti.UI.createTableView({
  	data: tableData,
  	bottom: 65
});

win.add(table);


var url = '';

table.addEventListener('click', function (e) {	
	
	if (e.index == '0') 
	{
		url = 'Drawdown.js';
	}
	if (e.index == '1') 
	{
		url = 'Capture.js';
	}
	if (e.index == '2') 
	{
		url = 'Groundwater.js';	
	}
	if (e.index == '3') 
	{
		url = 'Influence.js';	
	}
	if (e.index == '4') 
	{
		url = 'GroundwaterAge.js';	
	}
	if (e.index == '5') 
	{
		url = 'TimeOfTravel.js';	
	}
	if (e.index == '6') 
	{
		url = 'FlowVelocity.js';	
	}
	if (e.index =='7')
	{
		url = 'HydraulicConductivity.js';	
	}
	if (e.index =='8')
	{
		url = 'FlushingAquifer.js';	
	}
	if (e.index =='9')
	{
		url = 'ExitToeGradient.js';	
	}
	if (e.index =='10')
	{
		url = 'WaterHead.js';	
	}
	if (e.index =='11')
	{
		url = 'InflowToExcavation.js';	
	}
	if (e.index =='12')
	{
		url = 'BasicSettlement.js';	
	}
	if (e.index =='13')
	{
		url = 'SettlementsFromDrawDown.js';	
	}
	if (e.index =='14')
	{
		url = 'HarmonicMean.js';	
	}
	if (e.index =='15')
	{
		url = 'BayesianUpdating.js';	
	}
	if (e.index =='16')
	{
		url = 'CharecteristicValue.js';	
	}
	if (e.index =='17')
	{
		url = 'GroundwaterFlow.js';	
	}
	if (e.index =='18')
	{
		url = 'UniformDistribution.js';	
	}
	if (e.index =='19')
	{
		url = 'ReliabilityOfSystems.js';	
	}
	if (e.index =='20')
	{
		url = 'InflowToLongTrench.js';	
	}
	if (e.index =='21')
	{
		url = 'InfluenceRadius.js';	
	}
	if (e.index =='22')
	{
		url = 'InflowToTunnel.js';	
	}
	
   	var contentInfo = Titanium.UI.createWindow({
        title: e.row.title,
        url: url,
        layout: 'vertical'
    });
    
    contentInfo.open();
});

//***************** SWECO LOGO ***********************
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

logoView.add(swecoLogo);
win.add(logoView);


//***************** ABOUT WINDOW ***********************

win.activity.onCreateOptionsMenu = function(e) {
    var menu = e.menu;
 
    var aboutMenuItem = menu.add({
        title : "About",
    	showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM
    });
        
	aboutMenuItem.addEventListener("click", function(e) {
        var aboutWindow = Titanium.UI.createWindow({
        	title: 'About',
        	url: 'About.js'
    	});
     		
    	aboutWindow.open();
	});
};

//****************************************************

win.open();
