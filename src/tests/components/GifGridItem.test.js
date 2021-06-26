import React from 'react'; 
import { shallow } from 'enzyme'; 
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en GifGridItem', () => {

    const titulo = 'Un título';
    const url = 'https://localhost/algo.png'; 
    const wrapper = shallow(<GifGridItem title={titulo} url={url}/>)

    test('Debe mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot(); 
    })

    test('Debe tener un párrafo con el título', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(titulo); 
    })
    
    test('Debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(titulo); 

    })
    
    test('Debe tener animate__rubberBand', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('animate__rubberBand')).toBe(true);  
    })
    
    
})
