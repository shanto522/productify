export default function authMiddleware(req, res, next) {
  const isAuth = req.headers.authorization === "true";

  if (!isAuth) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
}
