import React, { useState, Text, Component, select } from 'react';
import { Dropdown, Select, Container, Input, Label, Button, Card, Image, CardContent } from 'semantic-ui-react';



const Recherche = (props) => {

  const [nom, setNom] = useState("");

  const les_choix = [

    { key: '1', value: 'species', text: 'species' },
    { key: '3', value: 'people', text: 'Personnages' },
    { key: '4', value: 'planets', text: 'Planètes' },
    { key: '5', value: 'starships', text: 'Vaisseaux spatiaux' },
    { key: '6', value: 'vehicles', text: 'Véhicules' }
  ]



  return (

    <div className="body">

      {/* Les deux solutions ci-desssous avec Smenatic UI ne fonctionnent pas...
      <Dropdown value={nom} type="text" placeholder='Fais ton choix petit Padawan !' options={les_choix} onChange={handleChange}  /> */}
      {/* <Select value={nom} type="text" placeholder='Fais ton choix petit Padawan !' options={les_choix} onChange={(event)=>setNom(event.target.value)}  /> */}


      <form>
        <select value={nom} type="text" placeholder='Fais ton choix petit Padawan !' options={les_choix} onChange={(event) => setNom(event.target.value)} >
          <option value="people">Personnages</option>
          <option value="starships">Vaisseaux</option>
          <option value="planets">Planètes</option>
          <option value="vehicles">Véhicules</option>
          <option value="species">Espèces</option>

          {/* <option value="tomatoes">Technically a Fruit Tomatoes</option>
        <option value="bananas">Bodacious Bananas</option> */}

        </select>
      </form>


      <p></p>
    
      <Button onClick={() => props.recupererDonnees(nom)}> Lancer la recherche</Button>
      

    </div>


  )

}







export default Recherche;