import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateBusinessPartner1679349114631 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'businessPartner',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'string',
          },
          {
            name: 'email',
            type: 'string',
            isUnique: true,
          },
          {
            name: 'isClient',
            type: 'boolean',
            default: false,
          },
          {
            name: 'isVendor',
            type: 'boolean',
            default: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('businessPartner')
  }
}
