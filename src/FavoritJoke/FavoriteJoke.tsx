export interface FavoriteJokeProps {
    jokeList: Array<string>
}

export const FavoriteJoke = ({jokeList}: FavoriteJokeProps) => {
    const list = jokeList.map((joke) => {
        return <li key={joke}>{joke}</li>
    })

    return (
        <div className="favorite-joke">
            <div>Favorite joke block</div>
            {list}
        </div>
    )
}