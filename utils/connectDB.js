import mongoose from 'mongoose';

const connect = (handler) => (req, res) => {
  // return new Promise((resolve, reject) => {
  if (mongoose.connection.readyState == 1) {
    // handler(req, res);
    res.json({ success: true, message: 'Connected to DB' });
  } else {
    mongoose
      .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true,
      })
      .then(() => {
        res.json({ success: true, message: 'Connected to DB' });
        //         return resolve(handler(req, res));
      })
      .catch((err) => {
        res.json({
          success: false,
          message: 'Not Connected to DB',
          error: err,
        });
        //         return reject(res.send('An error occured'));
      });
  }
  // });
};

export default connect;
