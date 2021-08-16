export const postSend = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      const error = new Error("Name is Required.");
      error.statusCode = 422;
      throw error;
    }
    res.statusCode(200).json({
      success: true,
      name,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
