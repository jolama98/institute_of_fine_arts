import { useEffect } from "react"
import { artGalleryService } from "../services/ArtGalleryService"
import { logger } from "../utils/Logger"
import { observer } from 'mobx-react';
import Pop from "../utils/Pop"
import ArtList from "../components/ArtList"
import { AppState } from "../AppState"
import Modal from "../components/Modal"
import AtrDetails from "../components/ArtDetails"

function HomePage() {

  async function getAllArt() {
    try {
      await artGalleryService.getAllArt()
    } catch (e) {
      logger.error(e)
      Pop.error(e as Error)
    }
  }

  useEffect(() => {
    getAllArt()
  }, [])

  const ArtModalContent = () => {
    AppState.activeArt ?
      <AtrDetails art={AppState.activeArt} />
      :
      <></>
  }

  return (
    <div className="home-page">
      <div className="d-flex justify-content-center">
        <h1>Institute Of Atr</h1>
      </div>
      <div className="container">
        <div className="row">
          <ArtList art={AppState.art} />
        </div>
      </div>

      <Modal id="atrModal" slug={AppState.activeArt?.slug || ''} >
        <ArtModalContent />
      </Modal>
    </div >
  )
}

export default observer(HomePage)
