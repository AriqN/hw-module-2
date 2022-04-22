import {render, screen } from '@testing-library/react';
import data from "../data"
import Song from '../components/song';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../service/redux/store';

test('Search song tester', () => {
    render(<Song data={data[0]} selectedTracks={data[0].uri} />);
    const album = screen.getByText('A Night At The Opera (2011 Remaster)');
    const image = screen.getByAltText('Bohemian Rhapsody - Remastered 2011');
    const name = screen.getByText("Queen");
    const button1 = screen.getByRole('button', {name:"Deselect"});
    
    
    expect(album).toBeTruthy();
    expect(name).toBeTruthy();
    expect(button1).toBeTruthy();
    expect(image).toBeTruthy();
    
  });
test('Test Login', ()=>{
    render(<Provider store={store}>
        <App />
        </Provider>);
    const button2 = screen.getByRole('button', {name:"Login"});
    userEvent.click(button2);
})