import { Table, Column, Model, DataType, PrimaryKey } from 'sequelize-typescript'

@Table({tableName: 'users', modelName: 'User', timestamps: false})
class User extends Model {

    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number

    @Column(DataType.BOOLEAN)
    isDeleted?: boolean

    @Column(DataType.STRING)
    username?: string

    @Column(DataType.STRING)
    country?:string;

    @Column(DataType.STRING)
    name?:string
    
    @Column(DataType.STRING)
    city?:string


    // @HasMany(() => Hobby)
    // hobbies: Hobby[]

    
}

  
export { User } ;