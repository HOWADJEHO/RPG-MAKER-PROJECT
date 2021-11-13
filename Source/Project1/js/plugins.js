// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"TitleCommandPosition","status":true,"description":"Changes the position of the title command window.","parameters":{"Offset X":"200","Offset Y":"40","Width":"240","Background":"0"}},
{"name":"TerraxLightingQuasiABS","status":true,"description":"v1.2 Support for linking QuasiABS with TerraxLightingSystem","parameters":{}},
{"name":"TerraxLighting","status":true,"description":"v1.5.1 Creates an extra layer that darkens a map and adds lightsources!","parameters":{"Player radius":"200","Add to options":"Yes","Option menu entry":"Lighting effects","Reset Lights":"No","Save DaynightHours":"0","Save DaynightMinutes":"0","Save DaynightSeconds":"0","Flashlight offset":"0","Screensize X":"866","Screensize Y":"630","Kill Switch":"No"}},
{"name":"--------------------","status":true,"description":"------------------------------------------------------------","parameters":{}},
{"name":"YEP_KeyboardConfig","status":true,"description":"v1.04 Allows players to adjust their button configuration\nfor keyboards.","parameters":{"---General---":"","Command Name":"Keyboard Config","Button Events":"1 2 3","Button Events List":"[]","---Help Text---":"","Key Help":"Change the configuration of this key?","Default Layout":"Default Keyboard Layout","Default Help":"Reverts your keyboard setting to the default setup.","WASD Layout":"ZQSD Movement Layout","WASD Help":"Changes your keyboard to ZQSD movement.","Finish Config":"Finish Configuration","Finish Help":"Are you done configuring your keyboard?","Assigned Color":"21","Action Color":"4","Clear Text":"Clear","---Key Names---":"","OK Key":"OK","OK Text":"OK / Talk","Escape Key":"X","Escape Text":"Cancel / Menu","Cancel Key":"Cancel","Cancel Text":"Cancel","Menu Key":"Menu","Menu Text":"Menu","Shift Key":"Dash","Shift Text":"Dash","PageUp Key":"PgUp","PageUp Text":"Page Up","PageDown Key":"PgDn","PageDown Text":"Page Down","Left Key":"◄","Left Text":"Move ◄ Left","Up Key":"▲","Up Text":"Move ▲ Up","Right Key":"►","Right Text":"Move ► Right","Down Key":"▼","Down Text":"Move ▼ Down"}},
{"name":"AutoBattlePlugin","status":true,"description":"Allows Auto Attack in Battle. The players will always choose the enemy with the lowest hp","parameters":{"Auto Attack Text Party":"Auto Attack","Auto Attack Text Actor":"Auto Attack","Auto Battle until keypress":"1","Has every Actor Auto Attack":"0","Has Party Auto Attack":"1"}},
{"name":"YEP_BattleAICore","status":true,"description":"v1.15 This plugin allows you to structure battle A.I.\npatterns with more control.","parameters":{"Dynamic Actions":"true","Dynamic Turn Count":"false","Element Testing":"true","Default AI Level":"80"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.51 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.10","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.50","Default Y Anchor":"1.00","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"true","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"true","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"true","Show Buff Text":"true","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"true","Show Critical Text":"true","Show Miss Text":"true","Show Evasion Text":"false","Show HP Text":"true","Show MP Text":"true","Show TP Text":"true"}},
{"name":"VeryFastBattle","status":true,"description":"battle exceeds very fast when specified keys down","parameters":{}},
{"name":"SRD_NameInputUpgrade","status":true,"description":"Improves upon the \"Name Input\" screen for your RPG Maker MV game.","parameters":{"Keyboard Mode?":"true","Display Message":"Input a name.","Display Message 2":"Press ENTER when ready.","Help Window Width":"400","Help Window Height":"this.fittingHeight(2)","== Display Options ==":"","Show Face":"true","Background Image":"","Scale Background?":"true","Name Opacity":"255","Keyboard Opacity":"255","Help Opacity":"255","Underline Color":"0","Text Color":"0","Name Display X":"0","Name Display Y":"100","Help Window X":"0","Help Window Y":"40","= Custom Characters =":"","LATIN 1 Row 1":"A,B,C,D,E,a,b,c,d,e","LATIN 1 Row 2":"F,G,H,I,J,f,g,h,i,j","LATIN 1 Row 3":"K,L,M,N,O,k,l,m,n,o","LATIN 1 Row 4":"P,Q,R,S,T,p,q,r,s,t","LATIN 1 Row 5":"U,V,W,X,Y,u,v,w,x,y","LATIN 1 Row 6":"Z,[,],^,_,z,{,},|,~","LATIN 1 Row 7":"0,1,2,3,4,!,#,$,%,&","LATIN 1 Row 8":"5,6,7,8,9,(,),*,+,-","LATIN 1 Row 9":"/,=,?,<,>,:,;, ,Page,OK","LATIN 2 Row 1":"Á,É,Í,Ó,Ú,á,é,í,ó,ú","LATIN 2 Row 2":"À,È,Ì,Ò,Ù,à,è,ì,ò,ù","LATIN 2 Row 3":"Â,Ê,Î,Ô,Û,â,ê,î,ô,û","LATIN 2 Row 4":"Ä,Ë,Ï,Ö,Ü,ä,ë,ï,ö,ü","LATIN 2 Row 5":"Ā,Ē,Ī,Ō,Ū,ā,ē,ī,ō,ū","LATIN 2 Row 6":"Ã,Å,Æ,Ç,Ð,ã,å,æ,ç,ð","LATIN 2 Row 7":"Ñ,Õ,Ø,Š,Ŵ,ñ,õ,ø,š,ŵ","LATIN 2 Row 8":"Ý,Ŷ,Ÿ,Ž,Þ,ý,ÿ,ŷ,ž,þ","LATIN 2 Row 9":"Ĳ,Œ,ĳ,œ,ß,«,»,,Page,OK"}},
{"name":"YEP_VictoryAftermath","status":true,"description":"v1.07 Display an informative window after a battle is over\ninstead of message box text stating what the party earned.","parameters":{"---General---":"","Victory Order":"exp custom drops","---BGM---":"","Victory BGM":"Ship3","BGM Volume":"90","BGM Pitch":"100","BGM Pan":"0","---Battle Results---":"","Cheer Wait":"90","Battle Results Text":"Battle Results","Battle Drops Text":"Battle Spoils","---EXP Window---":"","Font Size":"28","Level Up Text":"LEVEL UP!","Max Level Text":"MAX LEVEL","Show Skills Learned":"true","Gained EXP Text":"Gained EXP","Gained EXP Format":"+%1","EXP Gauge Color 1":"30","EXP Gauge Color 2":"31","Level Gauge Color 1":"14","Level Gauge Color 2":"6","Gauge Ticks":"15","Tick SE":"Absorb2","Tick Volume":"90","Tick Pitch":"150","Tick Pan":"0"}},
{"name":"YEP_X_AnimatedSVEnemies","status":true,"description":"v1.20 (Requires YEP_BattleEngineCore.js) This plugin lets\nyou use Animated Sideview Actors for enemies!","parameters":{"---General---":"","Anchor X":"0.5","Anchor Y":"1.0","Sprite Smoothing":"true","Sprite Width":"auto","Sprite Height":"auto","Collapse":"false","Frame Speed":"12","Show State Overlay":"true","---Shadows---":"","Show Shadow":"true","Shadow Scale X":"auto","Shadow Scale Y":"auto","---Breathing---":"","Enable Breathing":"1","Breathing Speed":"20","Breathing X Rate":"0.001","Breathing Y Rate":"0.020","HP Link Breathing":"false","---Floating---":"","Floating Speed":"20","Floating Rate":"0.3","Floating Height":"50","Floating Death":"true","---Motions---":"","Attack Motion":"thrust","Idle Motion":"walk","Damage Motion":"damage","Evade Motion":"evade","Escape Motion":"escape","Guard Motion":"guard","Abnormal Motion":"abnormal","Sleep Motion":"sleep","Dying Motion":"dying","Dead Motion":"dead","---Weapons---":"","Weapon Image Index":"0","Weapon 1 Motion":"swing","Weapon 1 Animation":"6","Weapon 2 Motion":"swing","Weapon 2 Animation":"6","Weapon 3 Motion":"swing","Weapon 3 Animation":"1","Weapon 4 Motion":"swing","Weapon 4 Animation":"6","Weapon 5 Motion":"swing","Weapon 5 Animation":"6","Weapon 6 Motion":"swing","Weapon 6 Animation":"1","Weapon 7 Motion":"missile","Weapon 7 Animation":"11","Weapon 8 Motion":"missile","Weapon 8 Animation":"11","Weapon 9 Motion":"missile","Weapon 9 Animation":"111","Weapon 10 Motion":"thrust","Weapon 10 Animation":"16","Weapon 11 Motion":"thrust","Weapon 11 Animation":"1","Weapon 12 Motion":"thrust","Weapon 12 Animation":"11","Weapon 13 Motion":"swing","Weapon 13 Animation":"1","Weapon 14 Motion":"swing","Weapon 14 Animation":"1","Weapon 15 Motion":"swing","Weapon 15 Animation":"1","Weapon 16 Motion":"swing","Weapon 16 Animation":"6","Weapon 17 Motion":"swing","Weapon 17 Animation":"7","Weapon 18 Motion":"swing","Weapon 18 Animation":"1","Weapon 19 Motion":"missile","Weapon 19 Animation":"11","Weapon 20 Motion":"missile","Weapon 20 Animation":"111","Weapon 21 Motion":"missile","Weapon 21 Animation":"111","Weapon 22 Motion":"thrust","Weapon 22 Animation":"7","Weapon 23 Motion":"missile","Weapon 23 Animation":"15","Weapon 24 Motion":"thrust","Weapon 24 Animation":"15","Weapon 25 Motion":"swing","Weapon 25 Animation":"1","Weapon 26 Motion":"thrust","Weapon 26 Animation":"1","Weapon 27 Motion":"thrust","Weapon 27 Animation":"1","Weapon 28 Motion":"thrust","Weapon 28 Animation":"1","Weapon 29 Motion":"thrust","Weapon 29 Animation":"1","Weapon 30 Motion":"thrust","Weapon 30 Animation":"1"}}
];
