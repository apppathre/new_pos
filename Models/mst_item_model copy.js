import { query } from './db';

const mst_item_model = {
    getAll: (callback) => {
        query('SELECT * FROM mst_item', (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },
    create: (mst_item, callback) => {
        query('INSERT INTO mst_item SET ?', mst_item, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },
    update: (id, mst_item, callback) => {
        query('UPDATE mst_item SET ? WHERE id = ?', [mst_item, id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },
    delete: (id, callback) => {
        query('DELETE FROM mst_item WHERE id = ?', [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },
};

export default mst_item_model;