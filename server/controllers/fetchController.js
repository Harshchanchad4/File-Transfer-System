import User from "../model/User.js"


export const fetchFile = async (req , res) => {
    const {code} = req.body;

    const data = await User.findOne({ uniqueCode: code });

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "No file found with the provided code."
      });
    }

    
    return res.status(200).json({
        success : true,
        data : data,
    })

}