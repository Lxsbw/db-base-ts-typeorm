module.exports = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 6608,
  username: 'root',
  password: 'Admin@123',
  database: 'typeorm_init',
  migrationsTableName: 'Migrations_History',
  // namingStrategy: new SnakeNamingStrategy(),
  // entities: ['src/models/*.entity{.ts,.js}'],
  migrations: ['database/migrations/*{.ts,.js}']
};
