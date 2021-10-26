import {useState} from "react";
import './NewJoke.css'

export const NewJoke = () => {
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

    return (
        <div className='root-new-joke'>
            <div className="joke-text">{joke}</div>
            <div className="generate-joke-btn">
                <button onClick={generate}>Generate Joke</button>
                <button>Add to favorite</button>
            </div>
        </div>
    )
}