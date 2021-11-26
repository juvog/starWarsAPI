 import './Accueil.css'
import React, { useState } from 'react';
import Recherche from './Recherche';
import { Card, CardGroup, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import imgStarWarsFaces from '../images/star-wars_1024.jpg';
import imgStarShip from '../images/ships.jpg'
import imgStarPlanete from '../images/planete.jpg'
import imgStarWarsLogo from '../images/star_wars1600-2.png'



function Accueil() {


  const [les_donnees, setLes_donnees] = useState([]);

  // TYPE D'APPEL API POSSIBLE 

  //  const recupererDonnees = (nom) => {
  //   console.log(nom);
  //   fetch(`https://swapi.dev/api/${nom}/?format=json`)
  //     .then((response) => response.json())
  //     .then((data) => setLes_donnees(data.results))
  //     .catch((erreur) => console.log(erreur));

  //   console.log(les_donnees);
  // }

  // AUTRE TYPE D'APPEL API POSSIBLE. 

  const recupererDonnees = async (nom) => {
    console.log(nom);
    try {
      let response = await fetch(`https://swapi.dev/api/${nom}/?format=json`);
      let data = await response.json();
      setLes_donnees(data.results);
      console.log(les_donnees);
    } catch (erreur) {
      console.log(erreur)
    }
  }





  const afficherDonnees = () => {
    console.log(les_donnees);
    return les_donnees.map((le_truc) => {

      //Planètes
      if (le_truc.rotation_period != null) {
        return (
          <Card style={{ color: "yellow", opacity: "0.7", backgroundColor: "", border: "2px solid rgba(209, 168, 11, 0.8)", textAlign: "left" }}>
            <Image src={imgStarPlanete} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{le_truc.name}</Card.Header>
              <Card.Meta> Période de rotation : {le_truc.rotation_period}</Card.Meta>
              <Card.Meta>Gravité : {le_truc.gravity}</Card.Meta>
              <Card.Meta>Climat : {le_truc.climate}</Card.Meta>
              <Card.Meta>Population : {le_truc.population}</Card.Meta>
            </Card.Content>
          </Card>)
      }

      //Personnages
      else if (le_truc.hair_color != null) {
        return (
          <Card style={{ color: "yellow", opacity: "0.7", backgroundColor: "", border: "2px solid rgba(209, 168, 11, 0.8)", textAlign: "left" }}>
            <Image src={imgStarWarsFaces} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Nom : {le_truc.name}</Card.Header>
              <Card.Meta>Taille : {le_truc.height}</Card.Meta>
              <Card.Meta>Couleur de peau : {le_truc.skin_color}</Card.Meta>
              <Card.Meta>Couleur des yeux : {le_truc.eye_color}</Card.Meta>
              <Card.Meta>Sexe : {le_truc.gender}</Card.Meta>
            </Card.Content>
          </Card>)
      }

      //Véhicules
      else if (le_truc.manufacturer != null) {
        return (
          <Card style={{ color: "yellow", opacity: "0.7", backgroundColor: "", border: "2px solid rgba(209, 168, 11, 0.8)", textAlign: "left" }}>
            <Image src={imgStarShip} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{le_truc.name}</Card.Header>
              <Card.Meta>Modèle : {le_truc.model}</Card.Meta>
              <Card.Meta>Constructeur : {le_truc.manufacturer}</Card.Meta>
              <Card.Meta>Coût : {le_truc.cost_in_credits}</Card.Meta>
              <Card.Meta>Longueur : {le_truc.length}</Card.Meta>
            </Card.Content>
          </Card>)
      }

      // Vaisseaux spatiaux
      else if (le_truc.manufacturer != null) {
        return (
          <Card style={{ color: "yellow", opacity: "0.7", backgroundColor: "", border: "2px solid rgba(209, 168, 11, 0.8)", textAlign: "left" }}>
            <Image src={imgStarShip} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{le_truc.name}</Card.Header>
              <Card.Meta>Modèle : {le_truc.model}</Card.Meta>
              <Card.Meta>Constructeur : {le_truc.manufacturer}</Card.Meta>
              <Card.Meta>Coût : {le_truc.cost_in_credits}</Card.Meta>
              <Card.Meta>Longueur : {le_truc.length}</Card.Meta>
            </Card.Content>
          </Card>)
      }

      // Films 
      else if (le_truc.opening_crawl != null) {
        return (
          <Card>
            <Card.Content style={{ color: "yellow", opacity: "0.7", backgroundColor: "", border: "2px solid rgba(209, 168, 11, 0.8)", textAlign: "left" }}>
              <Card.Header>{le_truc.title}</Card.Header>
              <Card.Meta>Épisode : {le_truc.episode_id}</Card.Meta>
              <Card.Meta>Réalisateur : {le_truc.director}</Card.Meta>
              <Card.Meta>Producteur : {le_truc.producer}</Card.Meta>
              <Card.Meta>Date de sortie : {le_truc.release_date}</Card.Meta>
            </Card.Content>
          </Card>)
      }

      // Espèces
      else if (le_truc.average_lifespan != null) {
        return (
          <Card style={{ color: "yellow", opacity: "0.7", backgroundColor: "", border: "2px solid rgba(209, 168, 11, 0.8)", textAlign: "left" }}>
            <Image src={imgStarWarsFaces} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{le_truc.name}</Card.Header>
              <Card.Meta>Classification :  {le_truc.classification}</Card.Meta>
              <Card.Meta>Désignation : {le_truc.designation}</Card.Meta>
              <Card.Meta>Hauteur moyenne : {le_truc.average_height}</Card.Meta>
              <Card.Meta>Couleur de peau : {le_truc.skin_colors}</Card.Meta>
              <Card.Meta>Couleur des yeux : {le_truc.eye_colors}</Card.Meta>
              <Card.Meta>Durée de vie moyenne : {le_truc.average_lifespan}</Card.Meta>
              <Card.Meta>Langue : {le_truc.language}</Card.Meta>
            </Card.Content>
          </Card>)
      }
    }
    )
  }

  return (

    
    <div className="body">
      <img src={imgStarWarsLogo} width={"300px;"} />

      <h2> Pour tout savoir sur les personnages, planètes , véhicules et vaisseaux, faites votre choix ! <br />  </h2>



      <Recherche recupererDonnees={recupererDonnees} />

      <p></p>

      {les_donnees ? <CardGroup centered itemsPerRow='5' Margin='5'> {afficherDonnees()}</CardGroup> : undefined}

    </div>



  );
}

export default Accueil;
