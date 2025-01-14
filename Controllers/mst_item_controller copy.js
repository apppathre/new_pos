const Item = require("./models/jobModel");

exports.getAllItems = (req, res) => {
    res.send("Hello");
    // Job.getAll((err, results) => {
    //     if (err) return res.status(500).json({ message: "Failed to fetch jobs.", error: err.message });
    //     res.json(results);
    // });
};

exports.addItems = (req, res) => {
    const { title, description, skill, salary, location, experience } = req.body;

    // Validate request body
    if (!title || !description || !skill || !salary || !location || !experience) {
        return res
            .status(400)
            .json({ message: "All fields are required: title, description, skill, salary, location, and experience." });
    }
    // item_id	item_name	item_category	item_hsn_code	item_gst	item_buying_price	item_discount	item_description	item_status	created_at	updated_at
    Item.create(
        { item_name, item_category, item_hsn_code, item_gst, item_buying_price, item_discount, item_description },
        (err, result) => {
            if (err) return res.status(500).json({ message: "Failed to add job.", error: err.message });
            res.status(201).json({ message: "Job added successfully.", jobId: result.insertId });
        }
    );
};

exports.updateItem = (req, res) => {
    const { id } = req.params;
    const { item_name, item_category, item_hsn_code, item_gst, item_buying_price, item_discount, item_description } = req.body;

    if (!id) return res.status(400).json({ message: "Job ID is required." });

    Item.update(
        id,
        { item_name, item_category, item_hsn_code, item_gst, item_buying_price, item_discount, item_description },
        (err, result) => {
            if (err) return res.status(500).json({ message: "Failed to update job.", error: err.message });
            if (result.affectedRows === 0) return res.status(404).json({ message: "Job not found." });
            res.json({ message: "Job updated successfully." });
        }
    );
};

exports.deleteItem = (req, res) => {
    const { item_id } = req.params;

    if (!item_id) return res.status(400).json({ message: "Job ID is required." });

    Item.delete(item_id, (err, result) => {
        if (err) return res.status(500).json({ message: "Failed to delete job.", error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: "Job not found." });
        res.json({ message: "Job deleted successfully." });
    });
};