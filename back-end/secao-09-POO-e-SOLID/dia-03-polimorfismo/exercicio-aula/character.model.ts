interface Character {
  name: string;
  specialMoveName: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

interface IModel {
  create(character: Character): Promise<DbCharacter>;
  update(id: number, character: Character): Promise<DbCharacter>;
  delete(id: number): Promise<boolean>;
  getAll(): Promise<DbCharacter[]>;
  getById(id: number): Promise<DbCharacter>;
}

class LocalDbModel implements IModel {
  async create(character: Character) {
    const lastId = db.length ? db[db.length - 1].id : 0;
    const newCharacter = { id: lastId + 1, ...character };
    db.push(newCharacter);
    return newCharacter;
  };

  async findIndexById(id: number) {
    const index = db.findIndex((character) => character.id === id);
    if (index === -1) {
      throw new Error('Character not found');
    }
    return index;
  };

  async update(id: number, character: Character) {
    const index = await this.findIndexById(id);
    db[index] = { id, ...character };
    return db[index];
  };

  async async delete(id: number): Promise<boolean> {
    const indexToDelete = await this.findIndexById(id);
    const deletedItem = db.splice(indexToDelete, 1);
    if (deletedItem.length > 0) return true;
    return false;
  };

  async getAll() { return db }

  async getById(id: number) {
    const index = await this.findIndexById(id);
    return db[index];
  };
}