export async function load({params}){

    const article = await import(`../${params.slug}.md`)

    const articleInfo = article.metadata
    const articleContent = article.default

    return {
        articleInfo,
        articleContent
    }
}