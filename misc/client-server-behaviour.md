# Client & Server Behaviour

This page covers some quirks and details about the server and client behaviour that may help inform how you play.

## Server

### Movement batching

You will have noticed other players do not move around quite as smoothly as you do. The NTK server has a fairly low rate for sending player movement updates. This makes movement prediction key to pk and some community events. Players typically move three spaces per second, with the movement batched update rate at something like once per second.

One consequence of this is that correctly predicting and blocking another player's movement by walking into their path can disorientate them for a moment, as their client will not be aware their movement was invalid until they receive your batch of movement actions. Take advantage of this to trap players or land attacks.

### Cast limit

The NTK server will not let you cast more than three spells in any given second. However, the spells themselves have no cast time. If you, for instance, use sticky-targeting and hold down a heal spell, you will see batches of three roughly simultaneous heals at the start of every 1 second threshhold. While scourging, avoid casting more than three curses per second, as excess spells simply won't cast. While trying to healout an ally with targeted heals, make sure to space your three heals out over the span of each second so they land on different server ticks.

Spells cast from orbs have their own three/s limit separate from normal spells. This means you can cast three normal spells AND three orb spells within a second. This is most applicable to oh-san-stat poets who can access the oh-san heal orb, who can use both their orb heal and regular heal to achieve six heals per second - although it takes some practice to pull this off consistently.

### Healouts

You do not necessarily die the instant you hit zero vitality. My understanding is that the server runs checks at regular intervals to 'kill' players with zero vitality. If you hit zero vitality but are then healed before this death check (seems to include even in the same server tick as the death check) then you will avoid death. This is known as healing out of death.

The death check is more often than three times a second, so a single player using heal spells will never achieve perfect reliability with healouts - it's simply down to chance. However, additional players using their heals on the same target will improve those odds.

Usable items are not subject to the spell rate limit. There are really two ways to use items rapidly enough for healout purposes:

- Have a food item on 'e' or 'u' and hold 'e' or 'u' to eat at a moderate pace.

  This has decent odds of saving you but may not be perfectly reliable.

- Use ctrl+letter to eat at a ridiculous pace.

  This is all but guaranteed to save you but will also obliterate your stacks of food items in seconds.

One caveat here is how this applies to Sleep. If you are slept, you cannot use items. However, taking damage will wake you, at which point you can use items. As such, holding ctrl+letter while slept is sensible as you benefit from high healout reliability without actually using your stacks of healing items.

## Client

### Turn Delay

NTK's movement responds to keypress events, not key states like most games. This has a specific implication for turning. Start walking in a direction you're not currently facing, and you will notice a brief delay between turning and moving. This delay is actually the Windows delay between the initial keypress event and the 'repeat-while-held' events - you can see this same behaviour by holding a letter into notepad.

This delay is controlled by the KeyboardDelay Windows setting, but at the minimum setting (0 in the registry value), this still involves a minimum delay. The NTK client will actually change your Windows settings to ensure you are running at this minimum delay, so there shouldn't be anything for you to improve in this regard.

Certain software, including things like gaming keyboard drivers and the rather notorious Keyboard King, is able to bypass this limit by creating synthetic keypress events. This can also be done at the hardware level in certain keyboards by customising them to produce real keypress events at a controllable rate. By and large this is considered an unfair advantage and use of third party software, with all methods being effectively equal in what they do. However, it is also effectively impossible to police. For the moment, this is a tense grey area.

It's important to bear in mind that NTK's mouse-based movement does not use this behaviour - you can move by holding rightclick and skip this delay entirely. This is useful in some cases (some players deliberately use mouse movement in fox hunts for this reason) but it can make precise movement more difficult.

### Orb targeting

Spells cast from orbs have a different target selection history from normal spells. Oh-san stat poets can make use of this effect to have two people simultaneously within easy reach of healing.

### Ctrl-R

Ctrl-R allows you to refresh your client's awareness of your surroundings, fixing issues involving yourself or others being out of place. However, this does also 'refresh your position' on the server in some sense. This will e.g. reactivate effects on ground tiles like traps or reactors, and will also break the sticky selection of anyone who had sticky selection set to you. Sticky selection is sometimes used to keep track of invisible players, so that trick can be worth knowing.
