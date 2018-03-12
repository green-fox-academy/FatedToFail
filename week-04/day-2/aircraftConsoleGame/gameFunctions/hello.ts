'use strict';

export function hello() {
  console.log(`
*************************************************************************************
*                                                                                   *
*                             Carrier Fighter Game                                  *
*                                                                                   *
*************************************************************************************

Welcome to my first console game! I hope you will enjoy it

It's a game about figthing against enemy Carriers through 10 levels
Use your resource wisely to beat each level
Watch out for your HP and dont spend all your money or you will be in trouble

You start the game with 10000$ and no Aircraft in you Hangar
Beating a level grats you extra money (starting from 6000$)

Before you first go fight, buy some Aircraft Fighter
Before the fight u have to load your unloaded Aircrafts (1 ammo = 5$ | it's automatic)
Aircraft can be preloaded if it's Ammo Clip got stucked in a fight

Repairing your Carrier is important to keep it in one piece (1 HP = 1$)
Also upgrading your stuffs as you go forward is not something to forget

There's two kind of Aircraft:
  F16 has 15 damage per bullet with a 10 size Clip and has shield-piercing
  F35 has 25 damage per bullet with a 14 size Clip

Start your first game by checkin status / upgrades out!

-status     Gives information about you and your enemy
-upgrades   Gives information about your upgrades and upgrades in general
-newGame    To start a new game use this command / reset every stat
-repair     Repair your Carrier to 5000 HP (be warned it is all in or nothing in repair)
-fight      To fight your enemy`);
}
