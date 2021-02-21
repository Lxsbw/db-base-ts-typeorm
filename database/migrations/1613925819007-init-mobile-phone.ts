import { MigrationInterface, QueryRunner, Table } from 'typeorm';
// import { MigrationInterface, QueryRunner, Table, TableIndex, TableColumn, TableForeignKey } from "typeorm";
import { baseModel } from '../utils/base-model';

export class initMobilePhone1613925819007 implements MigrationInterface {
  name = 'initMobilePhone1613925819007';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'mobile_phone',
        columns: [
          ...baseModel,
          {
            name: 'model_name',
            type: 'varchar',
            length: '50',
            comment: '型号'
          },
          {
            name: 'size',
            type: 'varchar',
            length: '50',
            comment: '尺寸'
          },
          {
            name: 'spec',
            type: 'varchar',
            length: '50',
            comment: '规格'
          },
          {
            name: 'ram',
            type: 'int',
            comment: '内存',
            isNullable: true
          },
          {
            name: 'rom',
            type: 'int',
            comment: '空间',
            isNullable: true
          },
          {
            name: 'seria_number',
            type: 'varchar',
            length: '50',
            comment: '序列号',
            isNullable: true
          }
        ]
      }),
      true
    );

    // await queryRunner.query(
    //   "CREATE TABLE `mobile_phone` (`id` varchar(50) NOT NULL COMMENT 'id', `created_at` datetime(6) NOT NULL COMMENT '创建时间' DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL COMMENT '更新时间' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `deleted_at` datetime(6) NULL COMMENT '删除时间', `model_name` varchar(50) NOT NULL COMMENT '型号', `size` varchar(50) NOT NULL COMMENT '尺寸', `spec` varchar(50) NOT NULL COMMENT '规格', `ram` int NOT NULL COMMENT '内存', `rom` int NOT NULL COMMENT '空间', `seria_number` varchar(50) NOT NULL COMMENT '序列号', PRIMARY KEY (`id`)) ENGINE=InnoDB"
    // );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query('DROP TABLE `mobile_phone`');
    await queryRunner.dropTable('mobile_phone');
  }
}
