exports.adminlogout = async (req, res) => {
    console.log("jjjjjjjjjjjjjjjjjj",res)
    try{
      res.clearCookie("accessToken",{domain: "localhost",path:"/"})
      console.log("akjdsjjjjjjj")
      res.json({status:true})
    }catch{
      res.json({status:false})
    }
  }