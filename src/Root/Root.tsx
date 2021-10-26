import {NewJoke} from "../NewJoke/NewJoke";
import {FavoriteJoke} from "../FavoritJoke/FavoriteJoke";
import './Root.css';

export const generate = () => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
        })
}

export const Root = () => {
    return (
        <div className="root">
            <NewJoke />
            <FavoriteJoke jokeList={['Joke 1', 'Joke 2']}/>
        </div>
    )
}