import { DataSource } from 'typeorm'
import { CreateRolesTable1675890785680 } from './migrations/1675890785680-CreateRolesTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [],
  migrations: [CreateRolesTable1675890785680],
})
