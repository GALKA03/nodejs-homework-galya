const express = require("express");
const router = express.Router();
const {allContacts,getById,serchInContacts,addContact,removeContact,updateContact,chengOfPart} = require('../../controller/contactsController/index')
const auth= require('../../middlewares/auth')
const authenticate =require('../../middlewares/authenticate')
// router.use(auth)

//router.use(authenticate)
 router.use(authenticate)
router.get("/", allContacts);

router.get("/:contactId", getById);

router.get("/search",serchInContacts);

router.post("/",addContact);

router.delete("/:contactId", removeContact);

router.put("/:contactId",updateContact);

router.patch("/:contactId",chengOfPart);
// router.patch(
//     "/:id/favorite",
//     authenticate,
//     isValidId,
//     validateBody(schemas.updateFavoriteSchems),
//     updateFavorite
//   );
module.exports = router;
