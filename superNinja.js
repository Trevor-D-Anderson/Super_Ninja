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

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.showName();
ninja1.showStats();
ninja1.drinkSake();
