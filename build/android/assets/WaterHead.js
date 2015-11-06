function Calculate(){var e=parseFloat(var1.value.replace(",",".")),t=parseFloat(var2.value.replace(",",".")),a=parseFloat(var3.value.replace(",",".")),i=parseFloat(var4.value.replace(",",".")),r=parseFloat(var5.value.replace(",",".")),o=parseFloat(var6.value.replace(",",".")),n=Math.pow(e,2),l=(Math.pow(e,2)-Math.pow(t,2))*o/r,d=i/(31536e3*a)*(r-o)*o,u=Math.sqrt(n-l+d),c=Math.round(100*u)/100;resultLbl.text=isNaN(c)?"Result is null, check input fields!":"The waterhead h at x is (m): "+c}Titanium.UI.setBackgroundColor("#000");var win=Titanium.UI.currentWindow;win.backgroundImage="images/bgGradient.png";var textColor="#FFF",rowHeight=45,rows=[],descRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),descLabel=Titanium.UI.createLabel({text:"This application calculates the water head between two parallel waterfilled trenches.",font:{fontSize:14,fontFamily:"Helvetica Neue"},color:textColor,left:5});descRow.add(descLabel),win.add(descRow);var waterHeadUpstreamRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl1=Titanium.UI.createLabel({text:"Water head in trench\nupstream at x=0 (m):",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});waterHeadUpstreamRow.add(lbl1);var var1=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130,softKeyboardOnFocus:Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS});waterHeadUpstreamRow.add(var1),win.add(waterHeadUpstreamRow);var waterHeadDownstreamRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl2=Titanium.UI.createLabel({text:"Water head in trench\ndownstream at x=L (m):",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});waterHeadDownstreamRow.add(lbl2);var var2=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});waterHeadDownstreamRow.add(var2),win.add(waterHeadDownstreamRow);var HydraukicConductivityRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl3=Titanium.UI.createLabel({text:"Hydraulic conductivity\nbetween trenches (m/s):",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});HydraukicConductivityRow.add(lbl3);var var3=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});HydraukicConductivityRow.add(var3),win.add(HydraukicConductivityRow);var GroundwaterRechargeRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl4=Titanium.UI.createLabel({text:"Groundwater recharge rate\nW (or W=0) (m/yr):",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});GroundwaterRechargeRow.add(lbl4);var var4=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});GroundwaterRechargeRow.add(var4),win.add(GroundwaterRechargeRow);var DistanceBetweenTrenchesRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl5=Titanium.UI.createLabel({text:"Distance L between\ntrenches (m):",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});DistanceBetweenTrenchesRow.add(lbl5);var var5=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});DistanceBetweenTrenchesRow.add(var5),win.add(DistanceBetweenTrenchesRow);var distanceToDemandedWaterRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl6=Titanium.UI.createLabel({text:"Distance 0<x<L to\ndemanded water head (m):",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});distanceToDemandedWaterRow.add(lbl6);var var6=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});distanceToDemandedWaterRow.add(var6),win.add(distanceToDemandedWaterRow);var calcRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),calculateBtn=Titanium.UI.createButton({title:"Calculate",width:200,backgroundColor:"transparent",color:"#B5CCEF"});calcRow.add(calculateBtn),win.add(calcRow),calculateBtn.addEventListener("click",function(){Calculate()});var resultHeaderRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE});resultHeaderRow.backgroundColor="#909FB9";var resultHeaderLbl=Titanium.UI.createLabel({text:"Result:",font:{fontSize:18,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:"black",left:5});resultHeaderRow.add(resultHeaderLbl),win.add(resultHeaderRow);var resultRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),resultLbl=Titanium.UI.createLabel({text:"The waterhead h at x is (m):",font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor,width:300,left:5});resultRow.add(resultLbl),win.add(resultRow),win.activity.onCreateOptionsMenu=function(e){var t=e.menu,a=t.add({title:"About",showAsAction:Ti.Android.SHOW_AS_ACTION_IF_ROOM});a.addEventListener("click",function(){var e=Titanium.UI.createWindow({title:"Water head between trenches",url:"DetailDescription.js",lblText:"This application calculates the water head between two parallel waterfilled trenches.\nThe area beween the trenches may be subject to recharge. The water head h(x) is calcultated anywhere between the upstream (x=0) and downstream trench. The maximum water head and corresponding x-location between the trenches can also be found. The water mound at x in between the trenches, due to recharge, be calculated as the difference between waterhead at x, with and without recharge, that is to perform two calculations with W=w´ and W=0:\nΔh(x)W = h(x)W - h(x)0\n\nThe distance to water divide x(wd) can also be found by increase of x until maximum h is reached.\n\nSee, for instance:\nC.W. Fetter, Applied Hydrogeology, Prentice Hall\n1994, p.167- ."});e.open()})};