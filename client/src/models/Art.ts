export type ArtData = {
  id: string
  slug: string
  imgUrls: { small: string }
  attribution: string
  description: string
}
export class Art {
  id: string
  slug: string
  smallImg: string
  attribution: string
  description: string
  constructor(data: ArtData) {
    this.id = data.id
    this.slug = data.slug
    this.smallImg = data.imgUrls.small
    this.attribution = data.attribution
    this.description = data.description
  }

}

