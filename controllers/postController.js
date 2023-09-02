const prisma = require("../prisma_client/index");

exports.getAllPost = (req, res) => {
  res.json({
    status: "success",
    data: "all post",
  });
};

exports.createPost = async (req, res) => {
  console.log("req.body ::", req.body);

  const { title, content } = req.body;

  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
      },
    });

    console.log("post :", post);

    res.json({
      status: "success",
      message: "post created successfully!",
      data: req.body,
      error: null,
    });
  } catch (err) {
    console.log("err :", err);

    res.json({
      status: "error",
      message: "post does not created!",
      data: req.body,
      error: err,
    });
  }
};
