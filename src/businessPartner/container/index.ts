import { BusinessPartnerRepository } from '@businessPartner/repositories/BusinessPartnerRepository'
import { IBusinessPartnerRepository } from '@businessPartner/repositories/IBusinessPartnerRepository'
import { CreateBusinessPartnerController } from '@businessPartner/useCases/createBusinessPartner/CreateBusinessPartnerController'
import { container } from 'tsyringe'

container.registerSingleton<IBusinessPartnerRepository>(
  'BusinessPartnerRepository',
  BusinessPartnerRepository,
)

container.registerSingleton(
  'CreateBusinessPartnerController',
  CreateBusinessPartnerController,
)
