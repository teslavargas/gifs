export const getGifs = async(category) => {


    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=CWg1RPwRg2XFF9Ogl3q4H70lAR71sJs8`; 
    const resp = await fetch(url); 
    const {data} = await resp.json(); 

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs; 
}