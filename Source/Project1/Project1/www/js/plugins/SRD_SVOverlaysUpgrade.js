//SV Overlays Upgrade!
//by SumRndmDde

/*:
 * @plugindesc Allows you to add more SV Overlays to your game along
 * with other options including position and speed.
 * @author SumRndmDde
 *
 * @param Default Frame Wait
 * @desc This is the default amount of frames that between each
 * animation frame. Lower means faster. Default is 8.
 * @default 8
 *
 * @param Default X Anchor
 * @desc This is the default X anchor (position on the sprite) 
 * used for the Overlays. The default is 0.5.
 * @default 0.5
 *
 * @param Default Y Anchor
 * @desc This is the default Y anchor (position on the sprite) 
 * used for the Overlays. The default is 1.
 * @default 1
 *
 * @help This Plugin allows you to manipulate the SV Overlays
 * (the Side View animations played when a certain Battler
 * is affected with a certain state).
 *
 * Features:
 * - Use more Overlays than the default 10 you're allowed
 * - Manipulate the speed of each animation depending the State
 * - Manipulate the poistion of the Overlay on the Battler depending on the 
 * State
 *
 *
 * Let's start with the Notebox commands you can input in your
 * Status's Notebox.
 *
 * Notebox Commands:
 *
 * <animationRow: #>
 * Changes the State's Overlay animation to the animation in the # row in your
 * States.png file (found in img/system).
 * By default, the rows are:
 * 1) Poison
 * 2) Blind
 * 3) Silence
 * 4) Rage
 * 5) Confusion
 * 6) Fascination
 * 7) Sleep
 * 8) Paralyze
 * 9) Curse
 * 10) Fear
 * 11+) Any Overlay Animations you add to the file
 *
 * <animationFrameWait: #>
 * Changes the amount of frames that are waited in between each
 * of the State's Overlay's animation frame.
 * The default is 8.
 * If you lower the number, then the animation will play faster.
 * If you raise the number, then the animation will play slower.
 *
 * <xAnchor: #>
 * Changes the X Anchor of the State's Overlay.
 * Anchors are relative to the Battler's sprite.
 * By default, the X Anchor is 0.5, meaning it is placed
 * in the half-way point of the Battler.
 * If the X Anchor is 0, the Overlay will be on the Battler's left side.
 * If the X Anchor is 1.0, the Overlay will be on the Battler's right side.
 *
 * <yAnchor: #>
 * Changes the Y Anchor of the State's Overlay.
 * Anchors are relative to the Battler's sprite.
 * By default, the Y Anchor is 1, meaning the Overlay's sprite's bottom
 * is placed on the bottom of the Battler's sprite.
 * If the Y Anchor is 0, the Overlay will move down the length of the 
 * Battler's sprite's height.
 * If the Y Anchor is 0.5, the Overlay will move down half the length of the 
 * Battler's sprite's height.
 * If the Y Anchor is 1.5, the Overlay will move up half the length of the 
 * Battler's sprite's height.
 *
 *
 *
 * The Parameters do the same things as their Notebox command counterparts;
 * however, they affect all of the States' Overlays and will be the 
 * default values for when your State does not have a certain 
 * Notebox command in it.
 *
 * Parameters:
 *
 * Default Frame Wait
 * Sets the default Frame Wait for your State's Overlay's animation.
 *
 * Default X Anchor
 * Sets the default X Anchor for your State's Overlay's animation.
 *
 * Default Y Anchor
 * Sets the default Y Anchor for your State's Overlay's animation.
 *
 *
 * Thanks for reading!
 *  - SumRndmDde
 */

var parameters = PluginManager.parameters('SRD_SVOverlaysUpgrade');

var frameWait = parameters['Default Frame Wait'];
var xAnchor = parameters['Default X Anchor'];
var yAnchor = parameters['Default Y Anchor'];

Sprite_StateOverlay.prototype.initMembers = function() {
    this._battler = null;
    this._overlayIndex = 0;
    this._animationCount = 0;
    this._pattern = 0;
    this.anchor.x = xAnchor; //0.5;
    this.anchor.y = yAnchor; //1;
};

Sprite_StateOverlay.prototype.animationWait = function() {
    if(this._battler)
    {
        if(this._battler.states().length > 0)
        {
            if(this._battler.states()[0].meta.animationFrameWait)
            {
                return this._battler.states()[0].meta.animationFrameWait;
            }
        } 
    }
    return frameWait;
};

Sprite_StateOverlay.prototype.updatePattern = function() {
    this._pattern++;
    this._pattern %= 8;
    if (this._battler) {
        if(this._battler.states().length > 0) {
            if(this._battler.states()[0].meta.animationRow)
            {
                this._overlayIndex = this._battler.states()[0].meta.animationRow;
            }
            else
            {
                this._overlayIndex = this._battler.stateOverlayIndex();  
            }

            if(this._battler.states()[0].meta.xAnchor) {
                this.anchor.x = this._battler.states()[0].meta.xAnchor;
            }
            else {
                this.anchor.x = xAnchor;
            }

            if(this._battler.states()[0].meta.yAnchor) {
                this.anchor.y = this._battler.states()[0].meta.yAnchor;
            }
            else {
                this.anchor.y = yAnchor;
            }
        }
        else
        {
            this._overlayIndex = 0;
        }
    }
};