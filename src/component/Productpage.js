import ProductItem  from "./ProductItem";
import "./product.css";

const products = [
    {
        imageUrl : "https://rukminim1.flixcart.com/image/452/542/kpft18w0/night-suit/i/m/y/m-green-m-shree-hariom-collection-original-imag3z9h5zbfufbj.jpeg",
        amount : 350
    },
    {
        imageUrl : "https://mydukaan.s3.amazonaws.com/2660803/96f2e8d8-9717-4ae5-8a50-12cd08569aaa/1609603208965.jpeg",
        amount : 350
    },
    {
        imageUrl : "https://rukminim1.flixcart.com/image/452/542/kpft18w0/night-suit/i/m/y/m-green-m-shree-hariom-collection-original-imag3z9h5zbfufbj.jpeg",
        amount : 350
    },
    {
        imageUrl : "https://rukminim1.flixcart.com/image/452/542/kpft18w0/night-suit/i/m/y/m-green-m-shree-hariom-collection-original-imag3z9h5zbfufbj.jpeg",
        amount : 350
    },
    {
        imageUrl : "https://mydukaan.s3.amazonaws.com/2660803/96f2e8d8-9717-4ae5-8a50-12cd08569aaa/1609603208965.jpeg",
        amount : 350
    },
    {
        imageUrl : "https://rukminim1.flixcart.com/image/452/542/kpft18w0/night-suit/i/m/y/m-green-m-shree-hariom-collection-original-imag3z9h5zbfufbj.jpeg",
        amount : 350
    },
    {
        imageUrl : "https://rukminim1.flixcart.com/image/452/542/kpft18w0/night-suit/i/m/y/m-green-m-shree-hariom-collection-original-imag3z9h5zbfufbj.jpeg",
        amount : 350
    },
    {
        imageUrl : "https://mydukaan.s3.amazonaws.com/2660803/96f2e8d8-9717-4ae5-8a50-12cd08569aaa/1609603208965.jpeg",
        amount : 350
    },
    {
        imageUrl : "https://rukminim1.flixcart.com/image/452/542/kpft18w0/night-suit/i/m/y/m-green-m-shree-hariom-collection-original-imag3z9h5zbfufbj.jpeg",
        amount : 350
    },
    {
        imageUrl : "https://rukminim1.flixcart.com/image/452/542/kpft18w0/night-suit/i/m/y/m-green-m-shree-hariom-collection-original-imag3z9h5zbfufbj.jpeg",
        amount : 350
    },
    {
        imageUrl : "https://mydukaan.s3.amazonaws.com/2660803/96f2e8d8-9717-4ae5-8a50-12cd08569aaa/1609603208965.jpeg",
        amount : 350
    },
    {
        imageUrl : "https://rukminim1.flixcart.com/image/452/542/kpft18w0/night-suit/i/m/y/m-green-m-shree-hariom-collection-original-imag3z9h5zbfufbj.jpeg",
        amount : 350
    },
]

function Productpage(){
    return(
        <div className="productlist">
            {products.map((product) => {
                return (
                    <ProductItem imageUrl={product.imageUrl} amount={product.amount} />
                )
            })
            }
        </div>
    )
}
export default Productpage ;