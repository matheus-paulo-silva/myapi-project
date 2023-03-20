import { instanceToInstance } from 'class-transformer'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateBusinessPartnerUseCase } from './CreateBusinessPartnerUseCase'

export class CreateBusinessPartnerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createBusinessPartnerUseCase = container.resolve(
      CreateBusinessPartnerUseCase,
    )
    const { name, email, isClient, isVendor } = request.body
    const businessPartner = await createBusinessPartnerUseCase.execute({
      name,
      email,
      isClient,
      isVendor,
    })
    return response.status(201).json(instanceToInstance(businessPartner))
  }
}
