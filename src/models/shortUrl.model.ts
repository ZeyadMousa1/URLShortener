import mongoose, {Document} from "mongoose";
import {customAlphabet} from 'nanoid'

const nanoId = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 6)

export interface ShortURL extends Document {
    shortId: string;
    destination: string;
}

const schema = new mongoose.Schema({
    shortId: {
        type: String,
        unique: true,
        required: true,
        default: () => nanoId()
    },
    destiantion: {
        type: String,
        required: true
    }
})

const shortUrl = mongoose.model<ShortURL>('shortUrl', schema)

export default shortUrl;