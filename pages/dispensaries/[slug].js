import { dispensaryService } from '../../_services/dispensary.service'

export default function Dispensary({ dispensary }) {
    return (
        <>
            <h1>{dispensary.name}</h1>
            <h1>{dispensary._id}</h1>
            <h1>{dispensary.address}</h1>
        </>
    )
}

export async function getStaticPaths() {
    const dispensaries = await dispensaryService.getAll()
    const paths = dispensaries.map(dispensary => ({
        params: { slug: dispensary.slug },
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const dispensary = await dispensaryService.getById(params.slug)
    return { props: { dispensary } }
}