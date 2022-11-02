const router = require("express").Router();
const { Category, Product } = require("../../models");

// Gets all Categories with asscoiated data via Product Model
router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Gets specific Category by ID
router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(400).json({ message: "No category found with this ID! 🚫" });
    }
    
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Creates new Category given the category_name in request body
router.post("/", async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);

    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Updates a Category based on ID request parameter
router.put("/:id", async (req, res) => {
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(updateCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Deletes a Category based on ID request parameter
router.delete("/:id", async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(400).json({ message: "No category found with this ID! 🚫" });
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
