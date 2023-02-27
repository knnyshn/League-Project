import { Router } from 'express'
import * as controller from '../controllers/champController.js'

const champRouter = Router()

champRouter.get('/', controller.getChampions)
champRouter.get('/:id', controller.getChampion)
champRouter.post('/create', controller.createChampion)
champRouter.put('/:id/update', controller.updateChampion)
champRouter.delete('/:id/delete', controller.deleteChampion)

export default champRouter