import { productService } from '../../../../_services/product.service'
import { ProductTemplate } from '../../../../_templates/ProductTemplate'


export default function Product(props) {
    return <ProductTemplate item={props} />
}

export async function getServerSideProps(context) {
    const item = await productService.getBySlugAndBrand(context.params)
    return {
        props: item
    } 
}


// export async function getStaticPaths() {
//     const items = await productService.buildAll()
    
//     const paths = items.map(item =>{ 
//         return({
//         params: { 
//             brand: item.brand.slug,
//             product: item.slug,
//         },
//     })})
//     return {
//         paths,
//         fallback: false
//     }
// }

// export async function getStaticProps({ params }) {
//     const item = await productService.getById(params.product)
//     return { props: { item } }
// }