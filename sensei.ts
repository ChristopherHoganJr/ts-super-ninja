"use strict";

import { Ninja } from "./ninja";

class Sensei extends Ninja {
  wisdom: number;

  constructor(
    name: string,
    health = 10,
    speed = 10,
    strength = 10,
    wisdom = 10
  ) {
    super(name, health, speed, strength);
    this.wisdom = wisdom;
  }

  showStats(): void {
    super.showStats();
    console.log(`Wisdom: ${this.wisdom}`);
  }

  speakWisdom() {
    console.log(
      "You have power over your mind – not outside events. Realize this, and you will find strength."
    );
  }
}

const superSensei = new Sensei("Marcus Aurelius");
superSensei.speakWisdom();
superSensei.showStats();
