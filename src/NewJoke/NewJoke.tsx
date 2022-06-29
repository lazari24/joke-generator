import {useEffect, useState} from "react";
import './NewJoke.css'

export interface NewJokeProps {
    addJoke: Function
}

export const NewJoke = ({addJoke}: NewJokeProps) => {
    const [joke, setJoke] = useState('')
    const generate = () => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then((res) => {
                return res.json()
            })
            .then(({value}) => {
                setJoke(value)
            })
    }

    useEffect(() => {
        generate();
    }, [])

    return (
        <div className='root-new-joke'>
            <div className="joke-text">{joke}</div>
            <div className="generate-joke-btn">
                <button onClick={generate}>Generate Joke</button>
                <button onClick={() => {
                    addJoke(joke)
                    generate()
                }

                }>Add to favorite
                </button>
            </div>
        </div>
    )
}