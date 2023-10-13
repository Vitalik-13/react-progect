type Product = {
    id: number
    productTitle: string
    productsDscription: string
    productType: string
    productsFeatures: string
    price: number
    img: string
}
const ProductsArray: Product[] = [
    {
        id: 1,
        productTitle: 'Iphone 8 ',
        productsDscription: '8',
        productType: 'Phone',
        productsFeatures: '64',
        price: 300,
        img: '/images/iphone-black.webp',
    },
    {
        id: 2,
        productTitle: 'Iphone 14 Pro',
        productsDscription: 'Iphone 14 pro',
        productType: 'Phone',
        productsFeatures: '128',
        price: 1200,
        img: '/images/iphone-blue.webp',
    },
    {
        id: 3,
        productTitle: 'Iphone 15 Pro ',
        productsDscription: 'Iphone 15 pro',
        productType: 'Phone',
        productsFeatures: '215',
        price: 1500,
        img: '/images/iphone-gray.webp',
    },
    {
        id: 4,
        productTitle: 'Iphone 13 Pro Max',
        productsDscription: 'Iphone 13 pro Max',
        productType: 'Phone',
        productsFeatures: '215',
        price: 1000,
        img: '/images/iphone-green.webp',
    },
    {
        id: 5,
        productTitle: 'Iphone 11 pro',
        productsDscription: 'Iphone 11 pro',
        productType: 'Phone',
        productsFeatures: '32',
        price: 500,
        img: '/images/iphone-purple.webp',
    },
    {
        id: 6,
        productTitle: 'Iphone X ',
        productsDscription: 'Iphone X',
        productType: 'Phone',
        productsFeatures: '64',
        price: 400,
        img: '/images/iphone-red.webp',
    },
]
export default ProductsArray
