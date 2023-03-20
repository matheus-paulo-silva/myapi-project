import { BusinessPartner } from '@businessPartner/entities/BusinessPartner'

export type CreateBusinessPartnerDTO = {
  name: string
  email: string
  isClient: boolean
  isVendor: boolean
}

export type PaginateParams = {
  page: number
  skip: number
  take: number
}

export type BusinessPartnerPaginateProperties = {
  per_page: number
  total: number
  current_page: number
  data: BusinessPartner[]
}

export interface IBusinessPartnerRepository {
  create({
    name,
    email,
    isClient,
    isVendor,
  }: CreateBusinessPartnerDTO): Promise<BusinessPartner>
  save(businessPartner: BusinessPartner): Promise<BusinessPartner>
  findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<BusinessPartnerPaginateProperties>
  findById(id: string): Promise<BusinessPartner | null>
  findByName(name: string): Promise<BusinessPartner | null>
  findByEmail(email: string): Promise<BusinessPartner | null>
  delete(businessPartner: BusinessPartner): Promise<void>
}
