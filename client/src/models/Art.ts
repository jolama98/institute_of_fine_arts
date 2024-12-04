export type ArtData = {
  id: string
  imgUrls: {small: string}
  attribution: string
  description: string
}
export class Art {
  id: string
  imgUrls: string
  attribution: string
  description: string
  constructor(data: Art) {
    this.id = data.id
    this.imgUrls = data.imgUrls
    this.attribution = data.attribution
    this.description = data.description
  }
}

