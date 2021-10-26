export interface FavoriteJokeProps {
    jokeList: Array<string>
}

export const FavoriteJoke = ({jokeList}: FavoriteJokeProps) => {
    const JokeList = jokeList.map((joke) => {
        return <li>{joke}</li>
    })
    
    return (
        <div>
            <div>Favorite joke block</div>
            {JokeList}
        </div>
    )
}