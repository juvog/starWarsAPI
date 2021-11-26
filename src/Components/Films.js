import React, { useEffect, useState } from 'react';
import Recherche from './Recherche';
import { Card, CardGroup, Image } from 'semantic-ui-react';
import imgStarWarsLogo from '../images/star_wars1600-2.png';
import imgFilms from '../images/films.jpg'


function Films() {
    const [les_films, setLes_films] = useState([]);

    const afficherFilms = () => {
        console.log(les_films);
        return les_films.map((le_truc) => {
            return (
                <Card style={{color: "yellow", opacity: "0.7", backgroundColor: "", border: "2px solid rgba(209, 168, 11, 0.8)", textAlign: "left"}}>
                    <Image src={imgFilms} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{le_truc.title}</Card.Header>
                        <Card.Meta>Épisode : {le_truc.episode_id}</Card.Meta>
                        <Card.Meta>Réalisateur : {le_truc.director}</Card.Meta>
                        <Card.Meta>Producteur : {le_truc.producer}</Card.Meta>
                        <Card.Meta>Date de sortie : {le_truc.release_date}</Card.Meta>
                    </Card.Content>
                </Card>)
        }
        )
    }

    useEffect(() => {
        fetch(`https://swapi.dev/api/films/?format=json`)
            .then((response) => response.json())
            .then((data) => setLes_films(data.results))
            .catch((erreur) => console.log(erreur));
            return()=>document.title="Star Wars";
    }, []);


    return (
        // className="body"
        <div >
        <img src={imgStarWarsLogo} width={"300px;"} />

            {les_films ? <CardGroup centered itemsPerRow='3'> {afficherFilms()}</CardGroup> : undefined}
        </div>

    );
}

export default Films;