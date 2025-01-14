import itemModal from "../Models/mst_item_model.js";

export const getAllItems = (res) => {
    return "hello";

    // itemModal.getAllItems({}, (err, items) => {
    //     if (err) {
    //         res.status(500).send(err);
    //     } else {
    //         res.json(items);
    //     }
    // });
};

export const addItem = (req, res) => {
    res.send("Hello");
};