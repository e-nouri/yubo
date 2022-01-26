import { Table, Column, Model, DataType, PrimaryKey } from 'sequelize-typescript'

@Table({tableName: 'media', modelName: 'Media', timestamps: false})
export class Media extends Model {

    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number;
    
    @Column(DataType.INTEGER)
    userId?: number;
    
    @Column(DataType.INTEGER)
    order?: number;
    
    @Column(DataType.TEXT)
    url?:string;


    // @HasMany(() => Hobby)
    // hobbies: Hobby[]
}