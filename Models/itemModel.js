// models/itemModel.js
import db from "../Config/dbConfig.js";

const getAllItems = (callback) => {
  const query = "SELECT * FROM mst_units";
  db.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

export { getAllItems };
