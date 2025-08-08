import mongoose from "mongoose";

// 1- create a schema

const noteSchema = mongoose.Schema(
  {
    title:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
  },
   {timestamps: true}
); 


// 2- create a model base on the schema
const Note = mongoose.model("Note", noteSchema);
export default Note;
