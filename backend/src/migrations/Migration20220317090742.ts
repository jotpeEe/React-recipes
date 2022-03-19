import { Migration } from '@mikro-orm/migrations';

export class Migration20220317090742 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "ingredient" ("_id" serial primary key, "name" text not null, "quantity" text not null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "ingredient" cascade;');
  }

}
