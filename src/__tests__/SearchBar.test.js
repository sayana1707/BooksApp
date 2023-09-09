import React from 'react';
import { render } from '@testing-library/react';
import { SearchBar } from '../components';

describe('Тестирование компонента SearchBar', () => {
    test('Компонент SearchBar рендерится', () => {
        const { getByTestId } = render(<SearchBar />);
        const searchInput = getByTestId('search-bar');
        expect(searchInput).toBeInTheDocument();
    })
})