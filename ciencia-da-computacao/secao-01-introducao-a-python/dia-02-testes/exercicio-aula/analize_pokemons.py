import json


with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

grass_type_pokemons = []
for pokemon in pokemons:
    if "Grass" in pokemon["type"]:
        grass_type_pokemons.append(pokemon)

with open("grass_type_pokemons.json", "w") as file:
    json_to_write = json.dumps(grass_type_pokemons)
    file.write(json_to_write)

print(pokemons[0])
