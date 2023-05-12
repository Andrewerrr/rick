import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './styles.css';
import CharacterCard from "../../components/CharacterCard/CharacterCard";


const Details = () => {
    const [character, setCharacter] = useState(null)
    const [loading, setLoading] = useState(true)
    const urlParams = useParams()
    const fetchCharacter = () => {
        setLoading(true)
        fetch("https://rickandmortyapi.com/api/character/" + urlParams.id)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setCharacter(res)
                setLoading(false)
            })
    }
    useEffect(() => {
        fetchCharacter()
    }, [])

    if (loading) return <div>
        loading...</div>

    return <div className='character-details'>
        <img src={character.image} alt="character"/>
        {urlParams.id}
        <p>Name: {character.name}</p>
        <p>Status: {character.status}</p>
        <p>Gender: {character.gender}</p>
        <p>Species: {character.species}</p>
        <p>Type: {character.type}</p>
        <p>Origin: {character.origin.name} - <a href={character.origin.url}>show</a></p>
        <p>Location: {character.location.name} - <a href={character.location.url}>show</a></p>
        <p>Url: <a href={character.url}>link</a></p>
        <p>Created: {character.created}</p>
        {character.episode.map(url => <div>
            Episode: <a href={url}>Number {url.split("/").slice(-1)}</a>
        </div>)
        }
    </div>
}


export default Details;