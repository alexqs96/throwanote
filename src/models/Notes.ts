import mongoose from "mongoose"

mongoose.connect(process.env.DB_URI as string);
mongoose.Promise = global.Promise;

const noteSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
      required: true,
    },
    secret: {
      type: String,
      default: null
    },
    edit: {
      type: String,
      required: true,
      default: null
    },
  },
  {
    timestamps: true,
  },
);

const Note = mongoose.models.Notes || mongoose.model("Notes", noteSchema)

export default Note
