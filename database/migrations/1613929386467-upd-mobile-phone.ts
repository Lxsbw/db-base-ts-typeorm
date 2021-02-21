import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class updMobilePhone1613929386467 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'mobile_phone',
      new TableColumn({
        name: 'color',
        type: 'varchar',
        length: '50',
        comment: '外观主体颜色',
        isNullable: true
      })
    );
    await queryRunner.changeColumns('mobile_phone', [
      {
        oldColumn: new TableColumn({
          name: 'seria_number',
          type: 'varchar',
          length: '50',
          comment: '序列号',
          isNullable: true
        }),
        newColumn: new TableColumn({
          name: 'seria_number',
          type: 'varchar',
          length: '200',
          comment: '序列号（加长）',
          isNullable: true
        })
      }
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('mobile_phone');

    await queryRunner.dropColumn('mobile_phone', 'color');
    await queryRunner.dropTable('mobile_phone');
  }
}
