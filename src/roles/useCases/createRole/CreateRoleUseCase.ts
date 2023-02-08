import { Role } from '@roles/entities/Role'
import { RolesRepository } from '@roles/repositories/RolesRepository'
import { AppError } from '@shared/errors/AppError'

type CreateRoleDTO = {
  name: string
}

export class CreateRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  async execute({ name }: CreateRoleDTO): Promise<Role> {
    const roleAlreadyExist = await this.rolesRepository.findByName(name)
    if (roleAlreadyExist) {
      throw new AppError('Role already exists')
    }
    return this.rolesRepository.create({ name })
  }
}
