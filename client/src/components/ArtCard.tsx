import { AppState } from "../AppState"
import { Art } from "../models/Art"


type ArtCardProps = {
  art: Art
}


export default function ArtCard({ art }: ArtCardProps) {

  function setActive() {
    AppState.activeArt = art
  }


  return (

    <div className="ArdCard card">
      <div className="card-img-top" data-bs-toggle="modal" data-bs-target="#atrModal" onClick={setActive}>
        <img className="img-fluid " src={art.smallImg} alt={art.slug} />
      </div>
    </div>
  )
}


