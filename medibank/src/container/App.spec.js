import { getPets } from '../api/apiCall';
import { femSortedList } from '../utility/petListsSorting';
import { maleSortedList } from '../utility/petListsSorting';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { App } from './App';

jest.mock('axios')

jest.mock('../api/apiCall.js', () => {
    return {
        getPets: jest.fn(),
    }
}
)
describe(('App Component'), () => {
    const users = [
        {
            "name": "Bob",
            "gender": "Male",
            "age": 23,
            "pets": [{ "name": "Garfield", "type": "Cat" }, { "name": "Fido", "type": "Dog" }]
        },
        { "name": "Jennifer", "gender": "Female", "age": 18, "pets": [{ "name": "Garfield", "type": "Cat" }] },
        { "name": "Steve", "gender": "Male", "age": 45, "pets": null },
        {
            "name": "Fred",
            "gender": "Male",
            "age": 40,
            "pets": [
                { "name": "Tom", "type": "Cat" },
                { "name": "Max", "type": "Cat" },
                { "name": "Sam", "type": "Dog" },
                { "name": "Jim", "type": "Cat" }
            ]
        },
        { "name": "Samantha", "gender": "Female", "age": 40, "pets": [{ "name": "Tabby", "type": "Cat" }] },
        {
            "name": "Alice",
            "gender": "Female",
            "age": 64,
            "pets": [{ "name": "Simba", "type": "Cat" }, { "name": "Nemo", "type": "Fish" }]
        }
    ];
    test('should fetch users', async () => {

        getPets.mockImplementation(() => users)
        const actualresp = await getPets()
        expect(actualresp).toEqual(users);
        expect(actualresp.length).toEqual(6);
    })

    test('female list is sorted', () => {
        const femaleSortedList = femSortedList(users)
        expect(femaleSortedList[0]).toEqual('Garfield');
    })
    test('female sorted count type of Cat is 3', () => {
        const femaleSortedList = femSortedList(users)
        expect(femaleSortedList.length).toEqual(3);
    })
    test('male list is sorted', async () => {
        const malSortedList = maleSortedList(users)
        expect(malSortedList[0]).toEqual('Garfield');
    })
    test('male sorted count of type Cat is 4', async () => {
        const malSortedList = maleSortedList(users)
        expect(malSortedList.length).toEqual(4);
    })
})

test('on page load Loading... text available in the document', () => {
    render(<App />)
    const headingH1 = screen.getByRole('heading', { level: 1 })
    expect(headingH1).toHaveTextContent('Loading...')
})

test('Should not show Loading... when page is loaded', () => {
    render(<App />)
    const headingH2 = screen.queryByRole('heading', { level: 2 })
    expect(headingH2).not.toBeInTheDocument()
})