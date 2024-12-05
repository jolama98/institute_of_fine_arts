import { Art } from "../models/Art"
import ArtCard from "./ArtCard"
import "../assets/scss/pages/HomePage.scss"

type ArtListProps = {
  art: Art[]
}


function ArtList({ art }: ArtListProps) {


  return (

    <div className="masonry-layout">
      {art.map(art =>
        <div className="masonry-item" key={art.id}>
          <ArtCard art={art} />
        </div>
      )}
    </div>
  )

}

export default ArtList
