const mongoose = require("mongoose");

const SignSchema = mongoose.Schema(
  {
    boxArt: {
      type: String,
    },
    name: {
      type: String,
    },
    traits: {
      type: String,
    },
    dates: {
      type: String,
    },
    articleName: {
      type: String,
      required: [true, "The article name is required!"],
    },
    sign: {
      type: String,
      enum: [
        "Aries",
        "Taurus",
        "Gemini",
        "Cancer",
        "Leo",
        "Virgo",
        "Libra",
        "Scorpio",
        "Sagittarius",
        "Capricorn",
        "Aquarius",
        "Pisces",
      ],
      required: [true, "The sign is required!"],
    },
    articleContent: {
      type: String,
      required: [true, "The article content is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Sign = mongoose.model("sign", SignSchema);
module.exports = Sign;
