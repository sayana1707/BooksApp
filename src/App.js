import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Books from './components/Books';
import BookDetails from './components/BookDetails';
import { Loader } from './components/';
import { Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setLoading } from './actions';

function App() {
  const { REACT_APP_API_KEY } = process.env;
  const dispatch = useDispatch();
  // const loading = useSelector((state) => state.loading);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSorting, setSelectedSorting] = useState('relevance');
  const [bookCount, setBookCount] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    if (searchTerm === '') {
      // dispatch(setLoading(false));
      setLoading(false);
      setBooks([]);
      setBookCount(0);
      return;
    }
    // dispatch(setLoading(true));
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&categories=${selectedCategory}&orderBy=${selectedSorting}&startIndex=${startIndex}&maxResults=30&key=${REACT_APP_API_KEY}`
      )
      .then((response) => {
        setBookCount(response.data.totalItems);
        setBooks((prevBooks) => [...prevBooks, ...response.data.items]);
        // dispatch(setLoading(false));
        setLoading(false);
        console.log(response.data.items)
      })
      .catch((error) => {
        console.error(error);
        setError("It's an error!!");
        // dispatch(setLoading(false));
        setLoading(false);
      });
  }, [searchTerm, selectedCategory, selectedSorting, startIndex]);

  function searchBooks(searchTerm, selectedCategory, selectedSorting) {
    if (searchTerm === '') {
      // dispatch(setLoading(false));
      setLoading(false);
      setBooks([]);
      setBookCount(0);
      return;
    }
    setBooks([]);
    setBookCount(0);
    setStartIndex(0);
    setSearchTerm(searchTerm);
  }
  
  function handleLoadMore(event) {
    event.preventDefault();
    setStartIndex((prevStartIndex) => prevStartIndex + 30);
  }

  return (
    <Router>
      <Stack direction="column" textAlign="center" alignItems="center">
        <SearchBar onSearch={searchBooks} />
        <Typography sx={{m: 1}}>{bookCount > 0 && `Found ${bookCount} results`}</Typography>
        <Routes>
          <Route path="/" element={<>{loading ? <Loader /> : <Books books={books} />}</>} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
        {books.length > 0 && (
          <Button type="button" sx={{ color: 'darkorange', mb: 4}} startIcon={<PendingOutlinedIcon />} onClick={handleLoadMore}>Load more</Button>
        )}
      </Stack>
    </Router>
  );
}

export default App;