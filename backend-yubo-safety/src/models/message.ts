import { Table, Column, Model, DataType, PrimaryKey } from 'sequelize-typescript'

@Table({tableName: 'messages', modelName: 'Message', timestamps: false})
export class Message extends Model {

    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number

    @Column(DataType.INTEGER)
    receiverId?: number;

    @Column(DataType.INTEGER)
    senderId?: number
    
    @Column(DataType.TEXT)
    content?: string;

    // @HasMany(() => Hobby)
    // hobbies: Hobby[]
}