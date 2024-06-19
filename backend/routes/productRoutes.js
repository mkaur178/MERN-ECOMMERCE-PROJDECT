const express = require("express")

const router = express.Router();

const productController = require("../controllers/productController")

router.post("/productsave" , productController.productsave)
router.get("/productdisplay" , productController.productDisplay)

router.get("/lovingproduct" , productController.lovingproductDisplay)
router.get("/mattress" , productController.mattressDisplay)
router.get("/pillows" , productController.PillowsDisplay)
router.get("/sheets" , productController.SheetsDisplay)



module.exports= router;