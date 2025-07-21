import { User } from "../models/user.model.js";

export const authCallback = async (req, res) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;

    // on regarde si le user existe
    const user = await User.findOne({ clerkId: id });

    if (!user) {
      // inscription
      await User.create({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Erreur d'authentification", error);
    res.status(500).json({ message: "Serveur Erreur", error });
  }
};
