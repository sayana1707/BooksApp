import { useState } from 'react';
import { Paper, IconButton, Select, FormControl, InputLabel, MenuItem, Stack } from '@mui/material';
import { Search } from '@mui/icons-material';
import { Typography } from '@mui/material';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedSorting, setSelectedSorting] = useState('relevance');

    function handleSearch(event) {
        event.preventDefault();
        props.onSearch(searchTerm, selectedCategory, selectedSorting);
      }
    
      function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
      }
    
      function handleSortingChange(event) {
        setSelectedSorting(event.target.value);
      }

    return (
        <Stack
            direction="column" 
            alignItems="center" 
            p={2} 
            sx={{ background: '#fff', top: 0, justifyContent: 'space-between', maxHeight: 180}}
        >
            <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'black' }}>Search for books</Typography>
            <Stack sx={{ textAlign: 'center', maxWidth: 540 }}>
            <Paper 
            component="form"
            onSubmit={handleSearch}
            sx={{ borderRadius: 20, border: '1px solid #e3e3e3', pl: 2, boxShadow: 'none', mr: { sm: 5 }}}
            >
            <input 
                className="search-bar"
                placeholder="Enter your search..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            <IconButton type='submit' sx={{ p: '10px', color: 'darkorange'}}>
                <Search />
            </IconButton>
            </Paper>
            <Stack direction="row" sx={ {justifyContent: 'space-between', maxWidth: 420  }}>
                <FormControl variant="standard" sx={{ m: 2, minWidth: 120 }}>
                    <InputLabel>Category</InputLabel>
                    <Select labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Category"
                    value={selectedCategory} onChange={handleCategoryChange} >
                    <MenuItem value={"all"}>All</MenuItem>
                    <MenuItem value={"art"}>Art</MenuItem>
                    <MenuItem value={"biography"}>Biography</MenuItem>
                    <MenuItem value={"computers"}>Computers</MenuItem>
                    <MenuItem value={"history"}>History</MenuItem>
                    <MenuItem value={"medical"}>Medical</MenuItem>
                    <MenuItem value={"poetry"}>Poetry</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 2, maxWidth: 120 }}>
                    <InputLabel>Sorting</InputLabel>
                    <Select labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Sorting"
                    value={selectedSorting} onChange={handleSortingChange}>
                    <MenuItem value={"relevance"}>Relevance</MenuItem>
                    <MenuItem value={"newest"}>Newest</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
        </Stack>
        </Stack>
        
    )
}

export default SearchBar;