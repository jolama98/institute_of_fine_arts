import { Art } from "../models/Art";


export default function AtrDetails({ art }: { art: Art }) {

  return (
    <div className="row">
      <div className="AtrDetails">
        <p>{Art.name}</p>
      </div>
    </div>
  )

}
