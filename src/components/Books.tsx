import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Box } from '@mui/material';
import BookCard from './BookCard';

interface Book {
  id: string;
  volumeInfo: {
    imageLinks  : {
        thumbnail? : string;
    };
    title       : string;
    categories  : string[];
    authors     : string[];
}
}

interface BookProps {
  books: Book[];
}

const Books: React.FC<BookProps> = ({ books }) => {
    return (
        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
          {books.map((item, idx) => (
            <Box key={idx}>
            {item.id && (
              <Link to={`/book/${item.id}`}>
                <BookCard book={item} />
              </Link>
            )}
          </Box>
          ))}
        </Stack>
    )
}

export default Books