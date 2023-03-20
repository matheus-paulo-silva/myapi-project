import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import { container } from 'tsyringe'
import { isAuthenticated } from '@shared/http/middlewares/isAuthenticated'
import { CreateBusinessPartnerController } from '@businessPartner/useCases/createBusinessPartner/CreateBusinessPartnerController'

const businessPartnerRouter = Router()
const createBusinessPartnerController = container.resolve(
  CreateBusinessPartnerController,
)

businessPartnerRouter.use(isAuthenticated)

businessPartnerRouter.post(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      isClient: Joi.boolean().required(),
      isVendor: Joi.boolean().required(),
    },
  }),
  (request, response) => {
    return createBusinessPartnerController.handle(request, response)
  },
)

// usersRouter.get(
//   '/',
//   isAuthenticated,
//   celebrate({
//     [Segments.QUERY]: Joi.object().keys({
//       page: Joi.number(),
//       limit: Joi.number(),
//     }),
//   }),
//   (request, response) => {
//     return listUserController.handle(request, response)
//   },
// )

export { businessPartnerRouter }
