
const getAllContactsServices =require("../../services/contactServices/getAllContactsServices")
const allContacts = async (req, res, next) => {

  try {
    console.log('req.params',req.params)
    console.log('req.user',req.user)
      const{_id: owner}=req.params;
  const {skip=0, 
    limit=5}=req.query
  // limit=parseInt(limit) > 10 ? 10 : parseInt(limit);
  //  skip=parseInt(skip)
      const result= await getAllContactsServices(owner,{skip,limit})
      console.log(result)
     
      res.json({user:req.user,
        status: "success",
        code: 200,
        data: {
          contact: result,skip,limit
        },
      });
    } catch (e) {
      console.error(e);
      next(e); 
  
    }
  };
  module.exports=allContacts