/*
 * @Author: zhixiong.fu
 * @Date: 2021-02-22 02:19:39
 * @Last Modified by:   zhixiong.fu
 * @Last Modified time: 2021-02-22 02:19:39
 */

export const baseModel = [
  {
    name: 'id',
    type: 'varchar',
    length: '50',
    comment: 'key',
    isPrimary: true
  },
  {
    name: 'created_at',
    type: 'datetime',
    length: '6',
    comment: '创建时间',
    default: 'CURRENT_TIMESTAMP(6)'
  },
  {
    name: 'updated_at',
    type: 'datetime',
    length: '6',
    comment: '更新时间',
    default: 'CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)'
  },
  {
    name: 'deleted_at',
    type: 'datetime',
    length: '6',
    comment: '删除时间',
    isNullable: true
  }
];
