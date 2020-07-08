import { strainService } from '../../_services/strain.service'
import fetch from 'node-fetch'

export default function Strain({ strain }) {
    return (
        <>
            <h1>{strain.name}</h1>
            <h1>{strain._id}</h1>
        </>
    )
}

export async function getServerSideProps(context) {
    const item = await strainService.getById(params.slug)
    return {
        props: item
    } 
}

// export async function getStaticPaths() {
//     const strains = await strainService.buildAll()
//     const paths = strains.map(strain => ({
//         params: { slug: strain.slug },
//     }))
//     return {
//         paths,
//         fallback: false
//     }
// }

// export async function getStaticProps({ params }) {
//     const strain = await strainService.getById(params.slug)
//     return { props: { strain } }
// }