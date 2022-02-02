class Ninja {
  constructor(name, health) {
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }
  showName() {
    console.log(this.name);
  }
  showStats() {
    console.log(
      `${this.name} has ${this.health} health. With ${this.speed} speed and ${this.strength} strength.`
    );
  }
  drinkSake() {
    this.health += 10;
  }
}

class Sensei extends Ninja {
  constructor(name, health) {
    super(name, health);
    this.wisdom = 10;
  }
  showMyStats() {
    super.showStats();
    console.log(this.wisdom);
  }
  speakWisdom() {
    super.drinkSake();
    console.log("It takes what it takes, nothing more or less.");
  }
}
const ninja1 = new Sensei("Hyabusa", 100);
ninja1.speakWisdom();
ninja1.showMyStats();
