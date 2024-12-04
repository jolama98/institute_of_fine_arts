import { AppState } from "../AppState.js";
import { Art } from "../models/Art.ts";
import { api } from "./AxiosService.js";

type ArtResponse = {
  page: number
  results: Art[]
  total_pages: number
  total_results: number
}


class ArtGalleryService {

  async getArtById(artId: string) {
    const response = await api.get(`api/artworks/${artId}`)
    console.log(response.data, '⏰');
    this.handleResponseData(response.data)
  }

  async getAllArt() {
    const response = await api.get('api/artworks')
    console.log("👻", response.data);
    this.handleResponseData(response.data)
  }
  async changeDiscoverPage(pageNumber: number) {
    const response = await api.get(`api/artworks?page=${pageNumber}`)
    console.log('CHANGED DISCOVER PAGE', response.data)
    this.handleResponseData(response.data)
  }

  handleResponseData(responseData: ArtResponse) {
    const arts = responseData.results.map((infoOfArt: Art) => new Art(infoOfArt))
    console.log(arts)
    AppState.art = arts
    AppState.currentPage = responseData.page
    AppState.totalPages = responseData.total_pages
  }
}

export const artGalleryService = new ArtGalleryService();
