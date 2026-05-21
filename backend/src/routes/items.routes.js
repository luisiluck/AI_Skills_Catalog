import { Router } from 'express';
import {
  createItem,
  deleteItem,
  getItemById,
  getItems,
  updateItem,
} from '../controllers/items.controller.js';

export const itemsRouter = Router();

itemsRouter.get('/', getItems);
itemsRouter.get('/:id', getItemById);
itemsRouter.post('/', createItem);
itemsRouter.put('/:id', updateItem);
itemsRouter.delete('/:id', deleteItem);
