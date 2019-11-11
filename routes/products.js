const express = require("express");
const router = express.Router();
const Products = require("../store/Products");
const Comment = require("../store/Comment");

/* GET home page. */
router.get("/:id", function(req, res) {
  const id = req.params.id;

  Products.getById(id).then(response => {
    Comment.find({ product: id }).then(comments => {
      res.render("product", {
        product: response[0],
        comments: comments
      });
    });
  });
});

router.post("/:id", function(req, res) {
  const productId = req.params.id;
  const data = {
    author: req.body.author,
    comment: req.body.comment,
    product: productId
  };

  Comment.create(data).then(response => {
    res.render("commentSuccess", { comment: response });
  });
});

module.exports = router;
