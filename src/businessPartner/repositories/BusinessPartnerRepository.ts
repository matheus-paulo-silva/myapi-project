import { dataSource } from '@shared/typeorm'
import { Repository } from 'typeorm'
import { BusinessPartner } from '../entities/BusinessPartner'
import {
  BusinessPartnerPaginateProperties,
  CreateBusinessPartnerDTO,
  IBusinessPartnerRepository,
  PaginateParams,
} from './IBusinessPartnerRepository'

export class BusinessPartnerRepository implements IBusinessPartnerRepository {
  private repository: Repository<BusinessPartner>

  constructor() {
    this.repository = dataSource.getRepository(BusinessPartner)
  }
  async create({
    name,
    email,
    isClient,
    isVendor,
  }: CreateBusinessPartnerDTO): Promise<BusinessPartner> {
    const businessPartner = this.repository.create({
      name,
      email,
      isClient,
      isVendor,
    })
    return this.repository.save(businessPartner)
  }

  async save(businessPartner: BusinessPartner): Promise<BusinessPartner> {
    return this.repository.save(businessPartner)
  }

  async findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<BusinessPartnerPaginateProperties> {
    const [businessPartners, count] = await this.repository
      .createQueryBuilder('bp')
      .leftJoinAndSelect('bp.businessPartner', 'businessPartners')
      .skip(skip)
      .take(take)
      .getManyAndCount()
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: businessPartners,
    }
    return result
  }

  async findById(id: string): Promise<BusinessPartner | null> {
    return this.repository.findOneBy({ id })
  }

  async findByName(name: string): Promise<BusinessPartner | null> {
    return this.repository.findOneBy({ name })
  }

  async findByEmail(email: string): Promise<BusinessPartner | null> {
    return this.repository.findOneBy({ email })
  }

  async delete(businessPartner: BusinessPartner): Promise<void> {
    await this.repository.remove(businessPartner)
  }
}
