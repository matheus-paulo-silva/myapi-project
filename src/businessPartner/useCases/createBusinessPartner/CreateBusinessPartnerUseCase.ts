import { inject, injectable } from 'tsyringe'
import { AppError } from '@shared/errors/AppError'
import { IBusinessPartnerRepository } from '@businessPartner/repositories/IBusinessPartnerRepository'
import { BusinessPartner } from '@businessPartner/entities/BusinessPartner'

export type CreateBusinessPartnerDTO = {
  name: string
  email: string
  isClient: boolean
  isVendor: boolean
}

@injectable()
export class CreateBusinessPartnerUseCase {
  constructor(
    @inject('BusinessPartnerRepository')
    private businessPartnerRepository: IBusinessPartnerRepository,
  ) {}

  async execute({
    name,
    email,
    isClient,
    isVendor,
  }: CreateBusinessPartnerDTO): Promise<BusinessPartner> {
    const emailExists = await this.businessPartnerRepository.findByEmail(email)
    if (emailExists) {
      throw new AppError('Email address already in use')
    }
    const businessPartner = await this.businessPartnerRepository.create({
      name,
      email,
      isClient,
      isVendor,
    })
    return businessPartner
  }
}
