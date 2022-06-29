import {NewJoke} from "../NewJoke/NewJoke";
import {FavoriteJoke} from "../FavoritJoke/FavoriteJoke";
import './Root.css';
import {useState} from "react";

export const Root = () => {
    const [jokes, setJokes] = useState<string[]>([]);

    const addJokeToFavorite = (joke: any) => {
        setJokes([...jokes, joke])
    }

    return (
        <div className="root">
            <NewJoke  addJoke={addJokeToFavorite}/>
            <FavoriteJoke jokeList={jokes}/>
        </div>
    )
}