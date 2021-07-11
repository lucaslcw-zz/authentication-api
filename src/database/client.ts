import { connect } from 'mongoose';

import { MONGO_URL } from '../config';

export class MongoClient {
  constructor() {
    this.connect();
  }

  async connect() {
    await connect(MONGO_URL as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  }
}
