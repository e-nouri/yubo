import { Sequelize } from 'sequelize-typescript'
import { User, Media, Message } from "../models";

export const sequelize = new Sequelize({
    database: 'db.sqlite',
    dialect: 'sqlite',
    storage:':memory:',
    models: [User, Media, Message] // or [Player, Team],
})
