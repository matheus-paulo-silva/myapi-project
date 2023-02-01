import { Role } from '@roles/entities/Role'

type CreateRoleDTO = {
  name: string
}

export class RolesRepository {
  private roles: Role[]

  constructor() {
    this.roles = []
  }

  create({ name }: CreateRoleDTO) {
    const role = new Role()

    Object.assign(role, {
      name,
      createdAt: new Date(),
    })

    this.roles.push(role)
    return role
  }
}
