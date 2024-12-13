---
title: What is a "Roguelike"?
date: 2024-12-13 08:19
categories: [Roguelike]
tags: [roguelike] # TAG names should always be lowercase
description: An introduction to roguelike, an old but solid genre
# image:
# path: /assets/img/2024-12-11/preview_arrows.png
---

# History

Roguelike is a term coined in 1993, from a newsgroup. As the term suggests it's based on a old game Rogue(1980), an old game that runs on CLI(Command Line Interface) with ASCII arts to show various entities and map layouts.

(insert picture here)

After Rogue got popular many games that were "like rogue" were developed thus the term "Roguelike" was coined.

# Defining Roguelike - Berlin Interpretation

Discussion about what defines a roguelike is still a ongoing topic. Here I want to define roguelike using the [Berlin Interpretation](https://www.roguebasin.com/index.php?title=Berlin_Interpretation). It was created at the International Roguelike Development Conference 2008. This article will summarize and add my thoughts about the Berlin Interpretation.

## General Principles

> "Roguelike" refers to a genre, not merely "like-Rogue". The genre is represented by its canon. The canon for Roguelikes is ADOM, Angband, Crawl, Nethack, and Rogue.
>
> This list can be used to determine how roguelike a game is. Missing some points does not mean the game is not a roguelike. Likewise, possessing some points does not mean the game is a roguelike.
>
> The purpose of the definition is for the roguelike community to better understand what the community is studying. It is not to place constraints on developers or games.

As the original text says the **Berlin Interpretation does not strictly define rougelike** but to generalize and give guidance for gamers and developers. No definition can perfectly fit the genre and nobody should enforce to fit roguelike in a single definition.

There are 9 high value factors and 6 low value factors of roguelike. Let's look each factors in depth from a game developer's perspective.

## High value factors

### Random environment generation

> The game world is randomly generated in a way that increases replayability. Appearance and placement of items is random. Appearance of monsters is fixed, their placement is random. Fixed content (plots or puzzles or vaults) removes randomness.

Random environment generation would be the most important factor of roguelike. However one may not take this factor only from it's title.

> The game world is randomly generated **in a way that increases replayability**.

100% Randomness only gives inconvenience to the player. You would lose interest if monster's stat and attacks were randomized in a way that you couldn't predict. Here I would like to define "replayability" as "The player should be able to learn from deaths". This is the holy ground of roguelike that even randomness cannot disobey.

To maintain a good balance of randomness the article suggests a general approach; Randomize appearance and placement of items, and monster's placement. To clarify on how randomization of "appearance of an item" works, refer to chapter [Exploration and discovery](### Exploration and discovery)

### Permadeath

> You are not expected to win the game with your first character. You start over from the first level when you die. (It is possible to save games but the savefile is deleted upon loading.) The random environment makes this enjoyable rather than punishing.

Permadeath(short for permanent death) is the main reason why gamers love this genre, but also is the main reason why some gamers don't.

It's important to distinguish between "Permadeath" and "Ironman challenge" from non-permadeath games. Both erases progress upon death, but ironman challenge requires precision of controls and muscle memories. A good example of an ironman challenge would be doing a no-death run in Celeste.

The article argues that random environment makes permadeath enjoyable. I want to argue that learning from mistakes is the core reason that makes permadeath enjoyable. A player would enjoy the game if they win an impossible looking battle by using knowledge and item synergy learnt from previous runs.

Permadeath is one of the factors that people distinguish roguelike and roguelites. Roguelites gives permanent upgrades or unlocks new items each time you do a run. This directly conflicts with permadeath's definition. We will discuss about roguelites in future posts.

### Turn-based

> Each command corresponds to a single action/movement. The game is not sensitive to time, you can take your time to choose your action.

It is important to know that roguelikes are a game of "choice". Player should make series of choices to proceed. Each choice should be carefully calculated, as one small mistake can lead to inevitable death. For this reason, most roguelikes give infinite amount of time to think.

There are two types of roguelikes that do not follow this factor. One would be a game where it is a turn-based game but choices should be made in a limited timeframe. <<Crypt of The Necrodancer>>'s initial design was to make a roguelike with the restriction above. To make it interesting and less punishing to feel, the game introduces rhythm mechanics. The character Bard, a non-rhythm based character essentially follows the 'Turn-based' factor.

Second counterexample would be RTS(Real-Time Stratedgy) roguelikes like <<The Binding of Issac>>, <<Hades>>, <<Vampire Survivors>>. Actions are performed asynchronously from monsters and environments. Some people distinguish by calling these types as "action roguelike", and the classical roguelikes as "turn-based roguelike".

Fun mechanic that turn-based game can give is "Priority". The game should calculate player, environment, monster's action in one turn. This makes the order of these calculations important. <<Desktop Dungeons>> give a interesting implementation of this priority mechanic. Action orders are sorted by level, but there are skills and traits that can override this.

### Grid-Based

> The world is represented by a uniform grid of tiles. Monsters (and the player) take up one tile, regardless of size.

This factor's definition is self-explanatory. I would like to emphasize that entities like players or monsters should snap to grid.

Simillar with "Turn-based" factor, most action roguelikes does not follow this factor either. However turn-based roguelikes does not necessarilly follow grid-based factor, like <<Slay the Spire>>, a deck-building roguelike.

### Non-modal

> Movement, battle and other actions take place in the same mode. Every action should be available at any point of the game. Violations to this are ADOM's overworld or Angand's and Crawl's shops.

This factor exists to grant flexibility of choices in game. One general way to check this factor is to see whether you can attack the shopkeeper.

Because this factor can make game-balancing hard, most roguelikes do not, or weakly follow this factor.

### Complexity

> The game has enough complexity to allow several solutions to common goals. This is obtained by providing enough item/monster and item/item interactions and is strongly connected to having just one mode.

Self-explanatory. The article basically argues that items and monsters should have various synergies/anti-synergies. This factor directly connects to the learning aspect described in permadeath factor.

Synergies can be extended to environments, such as shrines and traps.

### Resource management

> You have to manage your limited resources (e.g. food, healing potions) and find uses for the resources you receive.

Self-explanatory.

Resource is not restricted to money or items. In a game designing perspective, resource itself can be an important factor that determines the theme of the game. <<Darkest Dungeon>>'s heroes are resources that can be discarded anytime. You should recruit, manage and train the best heroes to win.

### Hack'n'slash

> Even though there can be much more to the game, killing lots of monsters is a very important part of a roguelike. The game is player-vs-world: there are no monster/monster relations (like enmities, or diplomacy).

Hack and Slash itself is a term origined from TRPG, but now commonly used as a genre. Hack and Slash as a genre means killing a lot of monsters.

Nowdays, Hack and Slash is not a mandatory factor for roguelikes, but are commonly seen. A game that most follows this factor would definetly be <<Vampire Survivors>>.

### Exploration and discovery

> The game requires careful exploration of the dungeon levels and discovery of the usage of unidentified items. This has to be done anew every time the player starts a new game.

To clarify the term "Randomness of Appearance", I would like to give an example from the game <<Shattered Pixel Dungeon>>.

(Insert SPD here)

<<Shattered Pixel Dungeon>> has two major types of consumable items, Scorlls and Potions. However the appearance of those two items changes every run. For example, A _brown potion_ could be _Potion of Strength_ in one run, but could be _Potion of Liquid Flame_ in another. All potions(and scrolls) are unidentified at first but can be identified with various methods, like using them in action without knowing what it is.

The actual fun part of this is that you can predict the item. For example, there is always at least 1 _Potion of Liquid Flame_ on floors that has flammable walls. _Potion of Strength_ never spawns on shops, and will generate every 2 depths. Learning these generation algorithms boosts winning chance significantly. However, the game does not explicitly teach you this information.
