import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    uniqueCode: {
        type: Number,
        required: true
    },
    fileUrl : {
        type: String,
        required: true

    }
});

// Create and export the model
const User = mongoose.model("User", userSchema);
export default User;


// 2nd method 
// import mongoose from "mongoose";

// export default mongoose.model("User", new mongoose.Schema({
//     uniqueCode: {
//         type: Number,
//         required: true
//     }
// }));

