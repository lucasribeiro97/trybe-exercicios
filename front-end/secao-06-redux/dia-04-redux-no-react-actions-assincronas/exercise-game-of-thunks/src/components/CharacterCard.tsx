import { useSelector } from 'react-redux';
import { CharacterState } from '../types';

function CharacterCard() {
  const rootState = useSelector((state: CharacterState) => state);
  const isLoading = rootState.isLoading;
  const character = rootState.character;
  const error = rootState.error;

  if (!isLoading && character) {
    return (
      <ul>
        <li>Name: {character.name}</li>
        <li>Born: {character.born}</li>
        <li>
          Titles:
          <ol>
            {character.titles.map((title, index) => (
              <li key={`${title}-${index}`}>{title}</li>
            ))}
          </ol>
        </li>
        <li>
          Aliases:
          <ol>
            {character.aliases.map((alias, index) => (
              <li key={`${alias}-${index}`}>{alias}</li>
            ))}
          </ol>
        </li>
      </ul>
    );
  }
  if (error) { return <div>{error}</div>; }
  if (isLoading) { return <h3>Loading...</h3>; }
  return <div>Type a character name and click to search!</div>;
}

export default CharacterCard;