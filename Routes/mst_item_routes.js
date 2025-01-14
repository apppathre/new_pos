
import { Router } from 'express';
import { getAllItems, addItem } from "../Controllers/mst_item_controller.js"
const router = Router();


// router.get('/getAllItems', (req, res) => {
//     res.send('Hello');
// });  // Get all items
router.get('/getAllItems', getAllItems);           // Get all items
// router.get('getItemById/:id', getItemById);        // Get item by ID
// router.post('createItem/', createItem);           // Create new item
// router.put('updateItem/:id', updateItem);         // Update item by ID
// router.delete('deleteItem/:id', deleteItem);      // Delete item by ID

export default router;
