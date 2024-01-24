class CharacterService {
  constructor(readonly model: IModel) {}

  async create(character: Character) {
    const newCharacter = await this.model.create(character);
    return ({ status: 201, data: newCharacter });
  }

  async getAll() {
    const characters = await this.model.getAll();
    return ({ status: 200, data: characters });
  }

  async getById(id: number) {
    const character = await this.model.getById(id);
    return ({ status: 200, data: character });
  }

  async update(id: number, character: Character) {
    const updatedCharacter = await this.model.update(id, character);
    return ({ status: 200, data: updatedCharacter });
  }

  async delete(id: number) {
    const deleted = await this.model.delete(id);
    if (deleted) return ({ status: 204 });
    return ({ status: 404 });
  }

}