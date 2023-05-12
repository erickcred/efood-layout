class Produto {
  id: number
  image: string
  title: string
  classification: string
  description: string
  tags: string[]
  to: string

  constructor(
    id: number,
    image: string,
    title: string,
    classification: string,
    description: string,
    tags: string[],
    to: string
  ) {
    this.id = id
    this.image = image
    this.title = title
    this.classification = classification
    this.description = description
    this.tags = tags
    this.to = to
  }
}

export default Produto
