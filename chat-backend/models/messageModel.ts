import { Schema, Document, model } from 'mongoose';

interface IMessageModel extends Document {
    nickName: string,
    message: string,
    time: Date
}

let schema: Schema = new Schema({
    nickName: String,
    message: String,
    dateTime: Date
});

export = model<IMessageModel>("message", schema);