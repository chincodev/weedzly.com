import { brandService } from '../../../../_services/brand.service'
import { BrandTemplate } from '../../../../_templates'

export default function Brand(props) {
    return (
        <BrandTemplate item={props} />
    )
}

export async function getServerSideProps(context) {
    const item = await brandService.getById(context.params.brand)
    return {
        props: item
    } 
}


// export async function getStaticPaths() {
//     const items = await brandService.buildAll()
//     const paths = items.map(item => ({
//         params: { brand: item.slug },
//     }))
//     return {
//         paths,
//         fallback: false
//     }
// }

// export async function getStaticProps({ params }) {
//     const item = await brandService.getById(params.brand)
//     return { props: { item } }
// }