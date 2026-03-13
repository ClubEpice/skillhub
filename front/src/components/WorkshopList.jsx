import { useEffect } from 'react'
import axios from 'axios'

const BACK_URL = import.meta.env.VITE_BACK_URL

function WorkshopList() {
    useEffect(() => {
        axios.get(`${BACK_URL}/api/workshops`)
        .then(response => {
            console.log('Ateliers reçus :', response.data)
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des ateliers :', error.message)
        })
    }, [])
    return (
        <div>
            <h2>Liste des ateliers</h2>
            <p>Consultez la console du navigateur pour voir les données reçues.</p>
        </div>
    )
}

export default WorkshopList