//=========================================================
// CaeX_YEPDeadOrAlive.js
//=========================================================

/*:
 * @plugindesc v1.1 - Compatibility patch for Yanfly's Battle Engine Core and Kadokawa's DeadOrAliveItem.
 * @author Caethyril
 *
 * @help Plugin Commands:
 *   None.
 *
 * Compatibility:
 *   Load this plugin and DeadOrAliveItem after Yanfly's Battle Engine Core.
 *   If using Yanfly's Selection Control, load this plugin after Yanfly's.
 *   Aliases:
 *     Window_BattleActor:
 *       isOkEnabled, autoSelect
 *     Window_BattleEnemy: (only if using Yanfly's Selection Control)
 *       isOkEnabled, autoSelect
 *
 * Terms of use:
 *   Free to use and modify.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Update log:
 *   1.1: Should now work alongside Yanfly's Selection Control plugin.
 *   1.0: Initial release.
 */

var Imported = Imported || {};				// Import namespace, var can redefine
Imported.CaeX_YEPDeadOrAlive = 1.1;			// Import declaration

var CAE = CAE || {};					// Author namespace, var can redefine
CAE.X_YEPDeadOrAlive = CAE.X_YEPDeadOrAlive || {};	// Plugin namespace

(function(_) {

'use strict';

	// Check requisites
	if (!Imported.YEP_BattleEngineCore) throw new Error('plugin CaeX_YEPDeadOrAlive.js could not find required plugin YEP_BattleEngineCore.js.\nPlease ensure that this plugin loads after Yanfly\'s Battle Engine Core.');
	if (!Game_Action.prototype.isDeadOrAlive) console.warn('plugin CaeX_YEPDeadOrAlive.js could not find required function isDeadOrAlive on Game_Action.\nPlease check you have added Kadokawa\'s DeadOrAliveItem plugin to your project.');

	// Bypass Yanfly's death check for dead-or-alive scopes.
	_.Window_BattleActor_isOkEnabled = Window_BattleActor.prototype.isOkEnabled;
	Window_BattleActor.prototype.isOkEnabled = function() {
		if (BattleManager.inputtingAction().isDeadOrAlive()) {
			return Window_Selectable.prototype.isOkEnabled.call(this);
		} else {
			return _.Window_BattleActor_isOkEnabled.call(this);
		}
	};

	// Avoid auto-selecting the first dead actor when living targets are just as valid.
	_.Window_BattleActor_autoSelect = Window_BattleActor.prototype.autoSelect;
	Window_BattleActor.prototype.autoSelect = function() {
		_.Window_BattleActor_autoSelect.call(this);
		if (BattleManager.inputtingAction().isDeadOrAlive()) {
			this.select(0);
			this.updateCursor();
		}
	};

	// YEP_X_SelectionControl compatibility: allows multi-unit selection so puts all selection on Window_BattleEnemy
	(function(hasPlugin) {

		if (!hasPlugin) return;

		_.Window_BattleEnemy_isOkEnabled = Window_BattleEnemy.prototype.isOkEnabled;
		Window_BattleEnemy.prototype.isOkEnabled = function() {
			if (this.action().isDeadOrAlive()) {
				return Window_Selectable.prototype.isOkEnabled.call(this);
			} else {
				return _.Window_BattleEnemy_isOkEnabled.call(this);
			}
		};

		_.Window_BattleEnemy_autoSelect = Window_BattleEnemy.prototype.autoSelect;
		Window_BattleEnemy.prototype.autoSelect = function() {
			_.Window_BattleEnemy_autoSelect.call(this);
			if (this.action().isDeadOrAlive()) {
				let xSel = this.action().isSpanBothParties();
				let iSel = xSel ? $gameTroop.aliveMembers().length : 0;
				this.select(iSel);
				this.updateCursor();
			}
		};

	})(Imported.YEP_X_SelectionControl);

})(CAE.X_YEPDeadOrAlive);