// import { dispensaryService } from '../_services/dispensary.service'


// export default function Post({ postData }) {
//     return (
      
    
//         <>{postData.name}</>
      
//     )
//   }


// export const getAllPostIds = async () => {

//     const posts = await dispensaryService.getAll().then(result =>{
//         return result;
//     })

//     return posts.map(post => {
//       return {
//         params: {
//           id: post._id
//         }
//       }
//     })
// }

// export async function getStaticProps({ params }) {

//     const post = await dispensaryService.getById(params.id).then(result => {
//         return result;
//     })

//     return {
//       id,
//       ...post
//     }
// }
