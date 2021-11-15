/*:
 * @plugindesc This plugin changes your menu screen to be different!
 * @author SumRndmDde
 *
 * @param Number of Commands
 * @desc Input the maximum amount of commands to be seen on the menu's command window.
 * @default 8
 *
 * @help
 *
 * Different Menu
 * Version 1.00
 * by SumRndmDde
 *
 *
 * This plugin changes the game's menu to something different.
 *
 * Simply install the plugin, and it will be ready to go.
 *
 *
 * ==============================================================================
 *  Plugin Command
 * ==============================================================================
 *
 * Use the following Plugin Command to disable the menu:
 *
 *   SetDifferentMenu OFF
 *
 *
 * Use this Plugin Command to enable it again:
 *
 *   SetDifferentMenu ON
 *
 *
 * ==============================================================================
 *  Terms of Use
 * ==============================================================================
 *
 * - This Plugin is free to use for both non-commercial and commercial games.
 *
 * - Developers are allowed to edit the code.
 *
 * - This Plugin may not be redistributed, even with edits.
 *
 * - The filename and header must not be changed.
 *
 * To view the full terms of use, visit http://sumrndm.site/terms-of-use
 *
 *
 * ==============================================================================
 *  End of HELP Section
 * ==============================================================================
 *
 */

var SRD = SRD || {};
SRD.DifferentMenu = SRD.DifferentMenu || {};

var Imported = Imported || {};
Imported["SumRndmDde Different Menu"] = 1.00;

(function(_) {

"use strict";

const params = PluginManager.parameters('SRD_DifferentMenu');

_.useMenu = true;
_.commandRows = parseInt(params['Number of Commands']);

const _Scene_Menu_create = Scene_Menu.prototype.create;
Scene_Menu.prototype.create = function() {
	_Scene_Menu_create.apply(this, arguments);
	if(_.useMenu) {
		this._statusWindow.x = (Graphics.boxWidth - (this._statusWindow.width + this._commandWindow.width)) / 2;
		this._statusWindow.y = (Graphics.boxHeight - this._statusWindow.height) / 2;
		this._commandWindow.x = this._statusWindow.x + this._statusWindow.width;
		this._commandWindow.y = this._statusWindow.y;
		this._goldWindow.x = this._commandWindow.x;
		this._goldWindow.y = this._commandWindow.y + this._commandWindow.height;
	}
};

const _Window_MenuCommand_numVisibleRows = Window_MenuCommand.prototype.numVisibleRows;
Window_MenuCommand.prototype.numVisibleRows = function() {
	return (_.useMenu) ? Math.min(_.commandRows, _Window_MenuCommand_numVisibleRows.apply(this, arguments)) : _Window_MenuCommand_numVisibleRows.apply(this, arguments);
};

const _Window_MenuStatus_numVisibleRows = Window_MenuStatus.prototype.numVisibleRows;
Window_MenuStatus.prototype.numVisibleRows = function() {
	return (_.useMenu) ? 1 : _Window_MenuStatus_numVisibleRows.apply(this, arguments);
};

const _Window_MenuStatus_windowHeight = Window_MenuStatus.prototype.windowHeight;
Window_MenuStatus.prototype.windowHeight = function() {
	return (_.useMenu) ? this.fittingHeight(11) : _Window_MenuStatus_windowHeight.apply(this, arguments);
};

const _Window_MenuStatus_windowWidth = Window_MenuStatus.prototype.windowWidth;
Window_MenuStatus.prototype.windowWidth = function() {
	return (_.useMenu) ? Graphics.boxWidth - 240 : _Window_MenuStatus_windowWidth.apply(this, arguments);
};

const _Window_MenuStatus_maxCols = Window_MenuStatus.prototype.maxCols;
Window_MenuStatus.prototype.maxCols = function() {
	return (_.useMenu) ? 3 : _Window_MenuStatus_maxCols.apply(this, arguments);
};

const _Window_MenuStatus_drawItemImage = Window_MenuStatus.prototype.drawItemImage;
Window_MenuStatus.prototype.drawItemImage = function(index) {
	if(_.useMenu) {
	    var actor = $gameParty.members()[index];
	    var rect = this.itemRect(index);
	    this.changePaintOpacity(actor.isBattleMember());
	    this.drawActorFace(actor, ((rect.width - Window_Base._faceWidth) / 2) + rect.x, rect.y + 1, Window_Base._faceWidth, Window_Base._faceHeight);
	    this.changePaintOpacity(true);
	} else {
		_Window_MenuStatus_drawItemImage.apply(this, arguments);
	}
};

const _Window_MenuStatus_drawActorSimpleStatus = Window_MenuStatus.prototype.drawActorSimpleStatus;
Window_MenuStatus.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
	if(_.useMenu) {
		var lineHeight = this.lineHeight();
		var myX = x - 162 + 5;
		//var width = this.width - (this.standardPadding() * 2) - 10;
		width = this.itemRect(0).width - 10;
		this.drawActorName(actor, myX, y);
		this.drawActorLevel(actor, myX, y + lineHeight * 1);
		this.drawActorIcons(actor, myX, y + lineHeight * 2);
		this.drawActorClass(actor, myX, y + lineHeight * 3);
		this.drawActorHp(actor, myX, y + lineHeight * 4, width);
		this.drawActorMp(actor, myX, y + lineHeight * 5, width);
	} else {
		_Window_MenuStatus_drawActorSimpleStatus.apply(this, arguments);
	}
};

})(SRD.DifferentMenu);