const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  console.log("Auth is ", authorization);

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  // check for token
  next();
};

module.exports = { requireAuth };
