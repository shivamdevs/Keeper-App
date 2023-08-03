


export const connectionURL: string = `mongodb+srv://${encodeURI(process.env.MONGODB_USERNAME as string)}:${encodeURI(process.env.MONGODB_PASSWORD as string)}@keeper.jdykj1i.mongodb.net/?retryWrites=true&w=majority`;