import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Stack, Typography, Box, Divider } from '@mui/material';
import Loader from './Loader';

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
        setBook(response.data.volumeInfo);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!book) {
    return <Loader />;
  }

  const { imageLinks, title, categories, authors, description } = book;

  const cleanDescription = description?.replace(/(<([^>]+)>)/gi, "");

  return (
    <>
    <Stack sx={{ maxWidth: 700 }}>
      <Box display="flex" justifyContent="center" mt={4}>
        <img src={imageLinks?.thumbnail} alt={title} />
      </Box>
      <Box mt={4} textAlign="center">
        <Typography variant="h4">{title}</Typography>
        {categories && (
          <>
            <Typography variant="h6">Categories:</Typography>
            {categories.map((category) => (
              <Typography key={category}>{category}</Typography>
            ))}
          </>
        )}
        {authors && (
          <>
            <Typography variant="h6">Authors:</Typography>
            {authors.map((author) => (
              <Typography key={author}>{author}</Typography>
            ))}
          </>
        )}
        <Divider sx={{ my: 2 }} />
        {cleanDescription && (
          <>
            <Typography variant="h6">Description:</Typography>
            <Typography>{cleanDescription}</Typography>
          </>
        )}
      </Box>
    </Stack>
    </>
  );
};

export default BookDetails;
