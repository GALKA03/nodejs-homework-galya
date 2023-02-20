// // const Joi = require('joi');

const express = require('express');
const router = express.Router();
const functContacts = require('../../models/contacts');
// const validator = require('../../validations/valid-contacts-router');

router.get('/', async (req, res, next) => {
  try {
    const contacts = await functContacts.listContacts();
    return res.json({
      status: 'success',
      code: 200,
      data: { contacts },
    });
  } catch (error) {
    next(error);
  }
});

router.get('/:contactId', async (req, res, next) => {
  try {
    const contact = await functContacts.getById(req.params.contactId);
    if (contact) {
      return res.status(200).json({
        status: 'success',
        code: 200,
        data: { contact },
        message: 'Contact loaded',
      });
    } else {
      return res.status(404).json({
        status: 'error',
        code: 404,
        data: 'Not found',
      });
    }
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const contact = await functContacts.addContact(req.body);
    if (contact) {
      return res.status(201).json({
        status: 'success',
        code: 201,
        message: 'contact add',
        data: { contact },
      });
    } else {
      return res.status(400).json({
        status: 'error',
        code: 400,
        data: 'Missing required name field',
      });
    }
  } catch (error) {
    next(error);
  }
});

router.delete('/:contactId', async (req, res, next) => {
  try {
    const contact = await functContacts.removeContact(req.params.contactId);
    if (contact) {
      return res.status(200).json({
        status: 'success',
        code: 200,
        data: { contact },
        message: 'contact removed',
      });
    } else {
      return res.status(404).json({
        status: 'error',
        code: 404,
        data: 'Not found',
      });
    }
  } catch (error) {
    next(error);
  }
});

router.put('/:contactId', async (req, res, next) => {
  try {
    const contact = await functContacts.updateContact(
      req.params.contactId,
      req.body,
    );
    if (contact) {
      return res.status(200).json({
        status: 'success',
        code: 200,
        message: 'contact update',
        data: { contact },
      });
    } else {
      return res.status(404).json({
        status: 'error',
        code: 404,
        data: 'Not found',
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;


// // const schema = Joi.object({
// //   email: Joi.string().email().required(),
// //   name:Joi.string().min(3).max(10).required(),
// //   phone:Joi.number().integer().min(3).max(12).required()
// // })

// const fs = require('fs/promises')
// const path = require("path");
// const contactsPath = path.resolve("/models/contacts.js");
 
// // const allContactsFunc = fs.readFile(path.resolve(__dirname, contactsPath), "utf8");
//  console.log(contactsPath)
// router.get('/', async (req, res, next) => {
//   const allContactsFunc = await fs.promises.readFile(path.resolve(__dirname, contactsPath), "utf8");
  
//   const contactsList =  allContactsFunc.listContacts();

//    res.json({
//     status: 'success',
//     code: 200,
//     data: {
//       contactsList,
//     },
//   });
  
  
// })

// router.get('/:contactId', async (req, res, next) => {
//   const allContactsFunc = fs.readFile(path.resolve(__dirname, contactsPath), "utf8");
// const { id } = req.params;
//   const contactById = await allContactsFunc.getContactById(id)
//   if (id) {
//     return res.json({
//     status: 'success',
//     code: 200,
//     data: { contactById },
//     })
//   }
//    else {
//      res.status(401).json({
//     status: "Not found",
//     code: 401,
//   }); 
//     }
// })

// router.post('/', async (req, res, next) => {
//   // const { error, value } = schema.validate(req.body)
//   // if (error) {
//   //   return res.send('invalid Reqest')
//   // }
//   const allContactsFunc = fs.readFile(path.resolve(__dirname, contactsPath), "utf8");
//   const { name, email, phone } = req.body;
//   const addContact = await allContactsFunc.addContact(name, email, phone )
//   if (!name || !email || !phone) {
//     return res.status(400).json({
//     status:  "missing required name field",
//     code: 400,
//   }); 
//   }
//   else {
//     return res.status(201).json({
//     status: 'success',
//       code: 201,
//     data: { addContact },
//   }); 
//   }
// })

// router.delete('/:contactId', async (req, res, next) => {
//   const allContactsFunc = fs.readFile(path.resolve(__dirname, contactsPath), "utf8");
//   const { contactId } = req.params;
//   const removeContact = await allContactsFunc.removeContactById(contactId);
  
//   if (contactId) {
//     return res.json({
//     status: 'success',
//     code: 200,
//     data: { removeContact },
//     })
//   }
//    else {
//      res.status(401).json({
//     status: "Not found",
//     code: 401,
//   }); 
//     }

// })

// router.put('/:contactId', async (req, res, next) => {
//   const allContactsFunc = fs.readFile(path.resolve(__dirname, contactsPath), "utf8");
//   const { contactId } = req.params;
//   const { name, email, phone } = req.body;
//   const update = await allContactsFunc.updateContact(contactId);
//   if (!update) {
//   return res.status(404).json({
//             status:"ERROR_MESSAGES.NOT_FOUND" ,
//         });
// }
// if (!name || !email || !phone) {
//     return res.status(400).json({
//       status: { "message": "Not found" },
//     code: 400,
//   }); 
//   }
//   else {
//     return res.status(201).json({
//     status: 'success',
//       code: 201,
//     data: { update },
//   }); 
//   }
   
// })

// module.exports = router
