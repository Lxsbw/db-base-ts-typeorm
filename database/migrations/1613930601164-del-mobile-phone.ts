import { MigrationInterface, QueryRunner } from 'typeorm';

export class delMobilePhone1613930601164 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('mobile_phone', 'color');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
