/**
 * Created by Gilles on 01.11.2015.
 * @email: gill.es86@gmail.com
 */

/*:
 * @plugindesc Allows Auto Attack in Battle. The players will always choose the enemy with the lowest hp
 * @author Gilles Meyer
 *
 * @param Auto Attack Text Party
 * @desc The text which will appear in the Party command Menu
 * @default Auto Attack
 *
 * @param Auto Attack Text Actor
 * @desc The text which will appear in the Actor command Menu
 * @default Auto Attack
 *
 * @param Auto Battle until keypress
 * @desc Should the battle go on until a key is presses
 * @default 1
 *
 * @param Has every Actor Auto Attack
 * @desc Has every Actor Automatically Auto Attack on?
 * @default 1
 *
 * @param Has Party Auto Attack
 * @desc Is there a party Auto Attack?
 * @default 1
 *
 */

if(typeof ENC == "undefined") ENC = {};
if(typeof ENC.core == "undefined") ENC.core = {};
if(typeof ENC.params == "undefined") ENC.params = {};

ENC.autobattle = {};
ENC.autobattle.version = "1.1";

ENC.params.autobattle = {};
ENC.params.autobattle.cancel = false;
ENC.params.autobattle.activeAutoBattle = false;


ENC.core.parseNote = function(note, tag, parseElement) {
  var searchString = "<ENC:"+tag+":";
  var start = note.indexOf(searchString);
  if(start < 0) return false; // Nothing found
  var subString = note.substr(start+searchString.length);
  end = subString.indexOf(">");
  if(end < 0) {
    console.error("Config for following object was not correct", parseElement, note, tag);
    return false;
  }

  return subString.substr(0,end).trim();
};


(function() {

  var parameters = PluginManager.parameters('AutoBattlePlugin');
  var autoAttackPartyText = String(parameters['Auto Attack Text Party'] || "Auto Attack");
  var autoAttackActorText = String(parameters['Auto Attack Text Actor'] || "Auto Attack");
  var hasStandardAutoAttack = Number(parameters['Has every Actor Auto Attack'] || 1);
  var hasPartyAutoAttack = Number(parameters['Has Party Auto Attack'] || 1);
  var totalAutobattle = Number(parameters['Auto Battle until keypress'] || 1);

  var getEnemyWithLowestHP = function(enemies) {
    var enemyIndex = 0;
    for(var i=1; i < enemies.length; i++) {
      if(enemies[i].hp < enemies[enemyIndex].hp || enemies[enemyIndex].hp == 0) {
        enemyIndex = i;
      }
    }
    return enemyIndex;
  };

   // Does not work really :(
  Scene_Battle.prototype.commandAutoFight = function() {
    this.selectNextCommand();
    do {
      this.commandAutoAttack.apply(this, arguments);
    } while(BattleManager.isInputting());
    this._actorCommandWindow.deactivate();
  };

  Scene_Battle.prototype.commandAutoAttack = function() {
    BattleManager.inputtingAction().setAttack();
    var enemyIndex = getEnemyWithLowestHP(this._enemyWindow._enemies);
    var action = BattleManager.inputtingAction();
    action.setTarget(enemyIndex);
    this.selectNextCommand();
  };


  // ## Autofight for Party (does not work)
  Window_PartyCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.fight,  'fight');
    // Needs rework
    if(hasPartyAutoAttack) {
      this.addCommand(autoAttackPartyText,  'autofight');
    }

    this.addCommand(TextManager.escape, 'escape', BattleManager.canEscape());
  };

  var _Scene_Battle_createPartyCommandWindow = Scene_Battle.prototype.createPartyCommandWindow;
  Scene_Battle.prototype.createPartyCommandWindow = function() {
    _Scene_Battle_createPartyCommandWindow.apply(this, arguments);
    this._partyCommandWindow.setHandler('autofight',  this.commandAutoFight.bind(this));
  };


  // ## Autofight for each Actor
  var Scene_Battle_createActorCommandWindow = Scene_Battle.prototype.createActorCommandWindow;
  Scene_Battle.prototype.createActorCommandWindow = function() {
    Scene_Battle_createActorCommandWindow.call(this,arguments);
    this._actorCommandWindow.setHandler('autoattack', this.commandAutoAttack.bind(this));
  };

  var _Window_ActorCommand_makeCommandList = Window_ActorCommand.prototype.makeCommandList;
  Window_ActorCommand.prototype.makeCommandList = function() {
    if(this._actor) {
      var actor = $dataActors[this._actor._actorId];
      var enableAutoAttack = ENC.core.parseNote(actor.note, "enableAutoAttack",actor);
      if(ENC.params.autobattle.allowsAutoBattle(enableAutoAttack)) {
        this.addCommand(autoAttackActorText, 'autoattack', this._actor.canAttack());
      }
    }
    _Window_ActorCommand_makeCommandList.call(this, arguments);
  };

  /*var _Scene_Battle_update = Scene_Battle.prototype.update;
  Scene_Battle.prototype.update = function() {
    var active = this.isActive();
    $gameTimer.update(active);
    $gameScreen.update();
    this.updateStatusWindow();
    this.updateWindowPositions();
    if (active && !this.isBusy()) {
      this.updateBattleProcess();
    }
    Scene_Base.prototype.update.call(this);
  };*/

  Scene_Battle.prototype.updateBattleProcess = function() {
    if (!this.isAnyInputWindowActive() || BattleManager.isAborting() ||
      BattleManager.isBattleEnd()) {
      if(ENC.params.autobattle.activeAutoBattle) {
        if(Input.isTriggered("ok") || Input.isTriggered("cancel")) {
          ENC.params.autobattle.activeAutoBattle = false;
        }
      }
      BattleManager.update();
      this.changeInputWindow();
    }
  };

  ENC.params.autobattle.allowsAutoBattle = function(actorAutoBattle) {
    var allows = true;
    if(actorAutoBattle === "0") allows = false;
    if(!hasStandardAutoAttack && actorAutoBattle === false) allows = false;
    return allows;
  };


})();