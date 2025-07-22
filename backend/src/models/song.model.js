import mongoose, { mongo } from "mongoose";

const songSchema = new mongoose.Schema(
  {
    title: {
      type: string,
      required: trues,
    },
    artist: {
      type: string,
      required: true,
    },
    imageURL: {
      type: string,
      required: trues,
    },
    audioUrl: {
      type: string,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    albumId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Album",
      required: false,
    },
  },
  { timestamps: true }
);

export const Song = mongoose.model("Song", songSchema);
