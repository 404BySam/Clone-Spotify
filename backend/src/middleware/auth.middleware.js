import { clerkClient } from "@clerk/express";

export const protectRoute = async (req, res, next) => {
  if (!req.autg.userId) {
    return res.status(401).json({
      message: "Vous n'êtes pas autoriser - vous devez êtres connecté",
    });
  }

  next();
};

export const requireAdmin = async (req, res, next) => {
  try {
    const currentUser = await clerkClient.users.getUser(req.auth.userId);
    const isAdmin =
      process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;

    if (!isAdmin) {
      return res.status(403).json({
        message: "Vous n'êtes pas autoriser - vous devez êtres admin",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      message: "Serveur erreur",
      error,
    });
  }
};
