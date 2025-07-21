# Stats and Spells Cheat Sheet

## Core Stats

**Might**: affects your chance to hit, miniscule flat damage bonus

**Grace**: affects your chance to dodge incoming swings

**Will**: affects caster zap damage by a miniscule amount. Affects success rate of paralyse and confuse. Seemingly does nothing else.

For dam/hit, see the weapon damage sheet.

## Protection

Gives offensive spells a chance to fail against you. 10% chance to fail per point. Protection is hard-capped at 7: further protection beyond 7 does nothing, spells will continue to fail with 70% chance.

Protection affects curses and zaps - it does not affect sleep or dispel. Spells failed by deflection will result in "the magic has been deflected" status messages.

There is no stat that 'counters' protection - the target's protection is the only stat that determines whether a spell will deflect.

## Healing

Player characters naturally regenerate at 2% of their mana and vitality every 25 seconds.
The "Healing" stat increases your vitality regeneration rate directly by a percentage, i.e. 20 healing will cause you to regenerate 2.4% every 25 seconds.
Purple potions only increase your healing stat by 15.

## Armor Class

AC directly multiplies incoming damage by a percentage. Negative AC will therefore reduce incoming damage. For players, negative AC is hard-capped at -80, and more AC only serves to reduce the effect of AC-increasing curses. For creatures, AC is soft-capped at -95, with some involved additional effect past this point (e.g. Malgalod warlords).

Each point of negative AC becomes more valuable the lower down you go:

Going from -50 AC to -55 AC: reduces incoming damage by a relative 10%

Going from -75 AC to -80 AC: reduces incoming damage by a relative 20%

Similarly, curses have the most relative effect against targets with the lowest AC.

## Dispel

Dispel is not affected by protection. It has a flat 20% chance against all targets, regardless of any target or caster stats.

## Harden Body

Harden body is not affected by anything. It has a flat 50% chance in all cases, regardless of caster stats.

## Paralyse

Does seem to have a fail rate dependent on the caster's Will. Seems to reach 100% success shortly before the 130 will mark.

## Invoke

Both poet and mage invoke aethers are meaningfully reduced by choosing any alignment, as opposed to remaining unaligned.

## Sanctuary

Reduces all incoming damage by 50%, independent of the AC calculation.
Baekho's cunning (specifically) offers a reduced effect, scaling with cunning stage. This does not stack with actual sanctuary, but cannot be dispelled.
The warrior spell Hoche and Scrolls of protection additionally grant a very minor non-stacking sanctuary effect at 10% reduction.

## Rage and Durability

Chung Ryong's Rage (and counterparts) cause increased weapon durability loss. Your weapon will lose durability equal to Rage's current multiplier times the number of targets hit. This makes more fragile wepaons like skullies hard to use once you can cast higher tier rages.

## Warrior Overflow

Berserk, whirlwind, and siege (and slash, and throwing axe) all cause overflow. Excess damage dealt beyond the primary target's effective hitpoints is increased 20% and distributed evenly among surrounding targets.

Testing using target creatures with very small numbers of hitpoints shows an improvement closer to 18% due to rounding.

An older post on this board suggests the multiplier is 10%. It does appear to be 20% at the moment - perhaps it was adjusted at some point.

## Berserk / Feral Berserk

Vanilla berserk does 0.75*current vitality in damage with 12s aethers,

Feral berserk does 0.85*current vitality in damage with 16s aethers.

Vanilla berserk does more damage over time at the cost of being slightly less healing-efficient. I personally prefer vanilla berserk.