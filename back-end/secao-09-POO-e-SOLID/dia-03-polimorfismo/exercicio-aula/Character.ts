abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;

	static characterPresentation(character: Character): void {
		character.talk();
		character.specialMove();
	}
}

class MelleCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
		super();
  }

	talk(): void {
		console.log(`I'm ${this._name} and I'm a melle character.`);
	}

	specialMove(): void {
		console.log(`${this._name} used special move: ${this._specialMoveName}!`);
	}
}

class LongRangeCharacter extends Character {
	constructor(private _name: string, private _specialMoveName: string) {
		super();
	}

	talk(): void {
		console.log(`I'm ${this._name} and I'm a long range character.`);
	}

	specialMove(): void {
		console.log(`${this._name} used special move: ${this._specialMoveName}!`);
	}
}

const yoshi = new MelleCharacter('Yoshi', 'Egg Throw');
const samus = new LongRangeCharacter('Samus', 'Charge Shot');

// yoshi.talk();
// yoshi.specialMove();
// samus.talk();
// samus.specialMove();
Character.characterPresentation(yoshi);
Character.characterPresentation(samus);