export interface S3Image {
  sno: number
  url: string
  source?: string
}

export interface Specification {
  _id?: any
  attribute: string
  value: string
  filter?: boolean
}

export interface Price {
  EndUser: number
  ToolSelect: number
  Maintive: number
  Amazon: null
  Noon: null
  OnlineReseller: null
}

export interface Dimension {
  length: number
  width: number
  height: number
  weight: number
  dimension_unit: string
  weight_unit: string
}

export interface Category {
  name: string
  breadCrumbs: string
}

export interface Stock {
  warehouseID: number
  warehouseName: string
  stock: number
}

export interface BaseProduct {
  itemId: number
  searchTitle: string
  model: string
  brand: string
}

interface Product {
  model: string
  brand: string
  searchTitle: string
  s3Images: S3Image[]
  features: string[]
  specification: Specification[]
  price: Price
  whats_included: string[]
  package_dimension: Dimension
  category: Category[]
  soloCategory: Category
  stocks: Stock[]
}

export default Product
