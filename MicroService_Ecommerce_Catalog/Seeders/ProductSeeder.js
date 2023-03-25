const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const ProductsSeederData = [
    {
        productName: 'American Tourister Bag',
        productCategory: { _id: new ObjectId() },
        productPrice: 123123,
        productDescription: 'Hello Description',
        productImages: [
            {
                path: '/hello',
                imageName: 'hello.jpg'
            },
            {
                path: '/hello',
                imageName: 'hello.jpg'
            }
        ],
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
