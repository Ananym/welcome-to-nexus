# Polearm Cheat Sheet

Polearms are a class of weapons that hit targets up to two tiles away. A polearm swung without any other effects will hit the tile two steps ahead of you, and additionally one of the two tiles either side of the tile in front of you, at a 50/50 chance. This only holds while the tile in front of you is empty.

When combined with flank/backstab effects allowing you to attack in multiple directions, this allows you to hit a great number of enemies around you. Rogues also benefit specifically because their invisibility effect is not removed if the polearm only hits targets at range.

## Range Bonus

Flamespears and featherlights do not have 'range bonuses'. Among the regular polearms, only the Military (Sam) Polearm has a range bonus. The MPA deals 2x damage to only the four orthogonal foes at range - not the diagonals. This sounds good, but the MPA's damage is so low that doubling it is not very impressive.

## Hit Chance

The orthogonal targets - not diagonals - are subject to the normal hit chances of flank and backstab: the rear enemy is always targeted, and one of the two enemies on the extreme left/right side is targeted at random.

Prior to casting flank/backstab, the diagonal targets of the forward attack work the same as flank: 50/50 chance to hit either side.

The hit chance for the diagonal targets is the inclusive probability that they would be hit by the appropriate forward/flank/backstab attack.

For instance:
Chance of forward-diagonal hit: 50%
Chance of side-diagonal hit: 50% (right side) \* 50% (forward-backward)
We can sum these, but we need to deduct the chance that both events occur to avoid double-counting.
Chance of diagonal enemy targeted by both front and flank attacks:
50%\*50%\*50%
By summing the first two and subtracting the overlap chance, we get
0.5 + 0.5^2 - 0.5^3 = 0.625, or 62.5% overall chance to hit each front-diagonal. Testing verifies this is correct.

However, an additional penalty is applied for rear targets, uniquely for polearms. Testing reveals this to be 10% for the direct rear target and 5% for the rear diagonals. This penalty is not related to the conventional hit chance calculation and cannot be overcome with stats. As a result, the chance to hit the direct rear target is 90%, and the chance to hit the rear diagonals is about 60.6%.

If we sum the independent hit chances of all targets, we determine that the full number of targets hit per swing in a full polearm set is 5.3, as opposed to a standard weapon's 3 targets per swing.

## Backstab

For the orthogonal targets, backstab damage works intuitively: the targets take double damage only if they are facing directly away from you.

For the diagonal targets, backstab damage is applied when the target is facing either of the directions that point 'out' of the set, rather than toward the centre.
