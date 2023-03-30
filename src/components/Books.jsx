import { Link } from 'react-router-dom';
import { Stack, Box } from '@mui/material';
import BookCard from './BookCard';

const Books = ({ books }) => {
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