import { getGifs } from '../../helpers/getGifs'; 

describe('Pruebas en getGifs Fetch', () => {
    test('Debe traer diez elementos', async() => {
        const gifs = await getGifs('Dua Lipa');
        expect(gifs.length).toBe(10);
    })
    test('Debe', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0); 

    })
    
})
