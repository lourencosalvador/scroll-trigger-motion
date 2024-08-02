interface Post {
    name: string,
    descripition: string
}

export async function getPost(){
await new Promise(res => setTimeout(res, 1000))
 const response = await datePost
 return response
}



const datePost: Post[] = [
    {
        name: 'Comer uma Laranaja em 1 minuto',
        descripition: 'Como sera o fim desse grande momento'
    },
    {
        name: 'Manjando no React',
        descripition: 'Como sera o fim desse grande momento'
    }
]