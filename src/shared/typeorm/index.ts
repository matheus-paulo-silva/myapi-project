import { Role } from '@roles/entities/Role'
import { DataSource } from 'typeorm'
import { CreateRolesTable1675890785680 } from './migrations/1675890785680-CreateRolesTable'
import { CreateUsersTable1676413226278 } from './migrations/1676413226278-CreateUsersTable'
import { AddRoleIdToUsersTable1676413740431 } from './migrations/1676413740431-AddRoleIdToUsersTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [
    CreateRolesTable1675890785680,
    CreateUsersTable1676413226278,
    AddRoleIdToUsersTable1676413740431,
  ],
})
