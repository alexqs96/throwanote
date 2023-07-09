import mongoose from "mongoose"

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
    private: {
      type: Boolean,
      required: true,
    },
    secret: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Note = mongoose.models.Notes || mongoose.model("Notes", noteSchema)

export default Note
