import { Role } from '@roles/entities/Role'
import { RefreshToken } from '@users/entities/RefreshToken'
import { User } from '@users/entities/User'
import { DataSource } from 'typeorm'
import { CreateRolesTable1675890785680 } from './migrations/1675890785680-CreateRolesTable'
import { CreateUsersTable1676413226278 } from './migrations/1676413226278-CreateUsersTable'
import { AddRoleIdToUsersTable1676413740431 } from './migrations/1676413740431-AddRoleIdToUsersTable'
import { CreateRefreshTokensTable1678316359589 } from './migrations/1678316359589-CreateRefreshTokensTable'
import { CreateBusinessPartner1679349114631 } from './migrations/1679349114631-CreateBusinessPartner'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role, User, RefreshToken],
  migrations: [
    CreateRolesTable1675890785680,
    CreateUsersTable1676413226278,
    AddRoleIdToUsersTable1676413740431,
    CreateRefreshTokensTable1678316359589,
    CreateBusinessPartner1679349114631,
  ],
})
