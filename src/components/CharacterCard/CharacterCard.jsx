import React from "react";
import './styles.css';
import {Link} from "react-router-dom";

const CharacterCard = (props) =>
    (<Link
        to={"/details/" + props.id}
    >
        <div className="character-card">
            {/*{props.id}*/}
            <img src={props.image} alt="character"/>

            <div className='character-info'>
                <div className='section'><p>Name: {props.name}</p></div>
                <div className='section'><p>Status: {props.status}</p></div>
                <div className='section'><p>Gender: {props.gender}</p></div>
                <div className='section'><p>Species: {props.species}</p></div>
            </div>
        </div>
    </Link>);

export default CharacterCard;
