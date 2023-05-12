import React, {useState, useEffect} from "react";
import './styles.css';
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import {MoonLoader} from "react-spinners";

const Characters = () => {
    const [characters, setCharacters] = useState({results:[]})
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("");

    const fetchCharacters = (url) => {
        setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setCharacters(res)
                setLoading(false)
            })
    }

    const fetchPrev = () => {
        fetchCharacters(characters.info.prev)
    }

    const fetchNext = () => {
        fetchCharacters(characters.info.next)
    }

    useEffect(() => {
        fetchCharacters(`https://rickandmortyapi.com/api/character?name=${search}`)
    }, [search])

    return <div className='page'>
        <input className="main-search"
               type="text"
               placeholder="Введите имя пресонажа"
               value={search}
               onChange={(event) => {
                   setSearch(event.target.value)
               }}
        />
        <div className='character-wrapper'>
            <div className='character-container'>
            {characters.results
                // .filter(i => search === '' ? true : i.name.toLowerCase().includes(search.toLowerCase()))
                .map(i => <CharacterCard
                        key={i.id}
                        id={i.id}
                        image={i.image}
                        name={i.name}
                        status={i.status}
                        species={i.species}
                        gender={i.gender}
                    />
                )
            }
        </div>
        </div>
        <div>
            <button
                disabled={!characters?.info?.prev}
                onClick={fetchPrev}
            >
                Prev
            </button>
            <button
                disabled={!characters?.info?.next}
                onClick={fetchNext}
            >
                Next
            </button>
        </div>


        {loading &&
            <div>
                <MoonLoader/>
            </div>
        }
    </div>


}


export default Characters