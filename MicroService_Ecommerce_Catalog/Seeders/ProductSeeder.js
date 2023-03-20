const mongoose = require('mongoose');

const ProductsSeederData = [
    {
        productName: 'American Tourister Bag',
        productCategory: new mongoose.Types.ObjectId(),
        productPrice: 123123,
        productDescription: 'Hello Description',
        productImages: ['image1', 'image2', 'image3'],
        productReviews: new mongoose.Types.ObjectId(),
        productSku: '123123123',
        productQuantity: 1,
        productAttrs: {
            productSize: ['Small', 'Medium', 'Large'],
            productColor: ['Red', 'Green'],
            productMaterial: ['Teflon', 'Plastic']
        },
        productIsCutomisable: false,
        productMadeFor: ['Child', 'Adult'],
        productLabourCharges: 0,
        productPriceVariations: {
            size: { Small: 200, Medium: 400, Large: 800 },
            color: { Red: 200, Green: 400 },
            material: { Teflon: 1400, Plastic: 200 }
        },
        productImagesVariantions: {
            Red: ['image1', 'image2'],
            Green: ['image1', 'image2']
        }
    }
];

module.exports = ProductsSeederData;
