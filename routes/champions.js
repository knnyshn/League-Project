import { Router } from 'express'
import * as controller from '../controllers/champController.js'

const champRouter = Router()

champRouter.get('/', controller.getChampions)
champRouter.get('/:id', controller.getChampion)
champRouter.post('/', controller.createChampion)
champRouter.put('/:id', controller.updateChampion)
champRouter.delete('/:id', controller.deleteChampion)

export default champRouter