=begin
#==============================================================================
 ** Feature: Hue Change
 Author: Hime
 Date: Oct 27,  2012
------------------------------------------------------------------------------
 ** Change log
 Oct 27, 2012
   - fixed issue where collapse effect wasn't played
 Oct 26, 2012
   - initial release
------------------------------------------------------------------------------   
 ** Terms of Use
 * Free to use in non-commercial projects
 * Contact me for commercial use
 * No real support. The script is provided as-is
 * Will do bug fixes, but no compatibility patches
 * Features may be requested but no guarantees, especially if it is non-trivial
 * Preserve this header
------------------------------------------------------------------------------
 ** Required
 -Feature Manager
  (http://himeworks.com/2012/10/13/feature-manager)

------------------------------------------------------------------------------
 Set a formula for changing battler hue.
 The formula has one variable: n, the hue
 
 For example, you can have constant colors
   200

 Or you can have hues that increase by 1 per frame
   n + 1
   
 The hue is updated each frame mod 255.

#==============================================================================
=end
$imported = {} if $imported.nil?
$imported["Feature_HueChange"] = true
#==============================================================================
# ** Rest of the script
#==============================================================================
module Features
  module Hue_Change
    FeatureManager.register(:hue_change, 1.0)
  end
end

module RPG
  class BaseItem
    def add_feature_hue_change(code, data_id, args)
      data_id = 0
      value = args[0]
      add_feature(code, data_id, value)
    end
  end
end

class Game_Battler < Game_BattlerBase
  
  alias :ft_hue_change_init :initialize
  def initialize
    ft_hue_change_init
    @battler_hue_dir = 1
  end
  
  # new
  def update_hue
    formula = features_value_set(:hue_change)[0]
    return unless formula
    # to avoid sudden jumps in color we simply go up to 255 then go back down
    # to 0 in a cycle
    @battler_hue_dir *= -1 if @battler_hue > 255 || @battler_hue <= 0
    hue = @battler_hue_dir * @battler_hue
    @battler_hue = ft_hue_change_eval(formula, hue).abs
  end
  
  # new
  def ft_hue_change_eval(formula, n)
    eval(formula)
  end
end

class Game_Troop < Game_Unit
  
  alias :ft_hue_change_update :update
  def update
    ft_hue_change_update
    members.each {|member| member.update_hue if member.alive?}
  end
end