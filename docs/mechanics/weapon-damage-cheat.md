# Weapon Damage/Hit Chance Cheat Sheet

## Weapon Damage

Only 'S' value is used - 'L' value has no known purpose.

1. Roll weapon damage, halve it, multiply by ingress value

2. Add might/8 and dam*2.5 and your path's base damage (9 for warriors, 7.5 for rogues)

3. Multiply this sum by the fury multiplier and rogue invisible multipliers as appropriate.

You can only ever have one fury multiplier and one ingress multiplier active at a time.

Because Dam's flat bonus is not multiplied by ingress, its effect quickly becomes insignificant as weapon damage and ingress values increase throughout progression. Rogues have lower ingress values and higher multipliers, so they get slightly more mileage out of Dam.

This table shows the damage boost from equipping a Skull of the Beast on various characters in standard gear:

| Mark | FS CR | Etched CR | FL Rogue | Etched Rogue |
|------|-------|-----------|----------|--------------|
| 99   | 9.3%  | 7.1%*     | 28.6%    | 14.1%        |
| Il   | 4.4%  | 4.7%      | 15.5%    | 8.9%         |
| Ee   | 2.3%  | 2.5%      | 5.3%     | 4.9%         |
| Sam  | 1.4%  | 1.5%      | 3.1%     | 3.1%         |
| Sa   | 1.0%  | 1.1%      | 2.3%     | 2.0%         |

*99 warrior TP damage is very poor, so this value assumes the 85 cutlass skully instead.

99 warriors use Ambrosia, marked warriors use Claws.
Rogues shown using Luck amulets,
Both paths shown using bones/diamonds.

The warrior Potence spell adds +2 dam. This is nice while levelling, and not nothing at 99, but is only adding half a percent by il-san.

## Critical Hit Chance

Seems to be 4%, with no influencing factors.
Multiplier seems to be 3x, with again no influencing factors.

## Backstabs

2x multiplier on rear hit only.
When using a polearm, diagonal targets facing either 'outward' direction take backstab damage.

## Side & Rear Swings

That is, the "flank" and "backstab" spells:

Creatures behind you are always targets and are subject to the normal hit chance calculation.

Flank either targets the creature to your left or your right with each swing, 50/50 chance. Hit chance for each target is calculated normally.

Polearms are subject to an additional backstab penalty - see polearm cheat sheet.

## Hit Chance

Attacker Might and Hit, Defender AC and Grace all affect hit chance.

The exact equation is unknown, and is hard to evaluate with much accuracy due to the difficulty of testing significant differences in might and grace. However, my own regression testing provides:

Warrior Hit Chance % = 67.7781 + 0.4448 * def AC + -0.2260 * def grace + 0.3499 * atk might + 0.8858 * atk hit

Rogue Hit Chance % = 84.8479 + 0.4448 * def AC + -0.2260 * def grace + 0.3499 * atk might + 0.8858 * atk hit

These are of course not the correct numbers, but they very closely match the results for all scenarios I was personally able to test.

Common monsters, e.g. ATG6+ creatures, have an AC of -76. By the above regression, a warrior with zero hit and 130 might will still always hit a scourged creature (101%). As such, more hit will not increase your damage in this standard case, and in my experience this holds true.

Against mobs with abnormal AC values, such as mythic bosses or sentries, hit may be more of a factor. Similarly, if you're solo'ing without scourge, even against ATG5 and below, hit may be useful if you notice yourself missing.

Additionally, while levelling, before might has been maxed, additional sources of might and hit make significant differences to hit chance. The warrior bless (and greater blessing) spells grant a small boost to hit chance.

Hit chance does not affect polearm hit patterns - see the polearm sheet.

(Incidentally, if we make some assumptions about what those numbers are 'likely' to be, we might end up with...

Hit chance = 65 + 0.5 ac -0.2 grc + 0.33mgt + hit + 20 if rogue

This is a little too eager, as it would surprise me if grace and might weren't 1:1, but this still has an R^2 of 0.96 with my data)