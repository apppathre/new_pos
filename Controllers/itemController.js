// controllers/itemController.js
import { getAllItems } from "../Models/itemModel.js";

const fetchAllItems = (req, res) => {
  getAllItems((err, data) => {
    if (err) {
      res.status(500).json({ error: "Failed to retrieve items" });
    } else {
      res.status(200).json(data);
    }
  });
};

export { fetchAllItems };
