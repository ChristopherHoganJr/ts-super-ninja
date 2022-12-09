"use strict";

export class Ninja {
  name: string;
  health: number;
  speed: number;
  strength: number;

  constructor(name: string, health = 100, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }

  sayName(): void {
    console.log(this.name);
  }

  showStats(): void {
    console.log("\n------------------");
    console.log("------Stats-------");
    console.log("------------------");
    console.log(`Ninja: ${this.name}`);
    console.log(`Strength: ${this.strength}`);
    console.log(`Speed: ${this.speed}`);
    console.log(`Health: ${this.health}`);
  }

  drinkSake(): void {
    this.health += 10;
  }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
