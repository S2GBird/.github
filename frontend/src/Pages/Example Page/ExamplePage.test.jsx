import React from 'react';
import ExamplePage from './ExamplePage'
import {render, screen} from '@testing-library/react';



describe('Showing an example of basic positive and negative testing', () => {

    test('A default hello world message appears on my example page.', () => {
        //Render my component onto the testing screen
        render(<ExamplePage />);
        //Test if the header from my example page is present
        expect(screen.getByTestId("example-header")).toEqual(true);
    });
});