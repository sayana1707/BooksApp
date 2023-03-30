import { Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';

const BookCard = ({ book }) => {
  return (
    <Card sx={{ width: { xs: '140px', sm: '178px', md: '220px', height: {xs: '100px'}}, boxShadow: 'none', borderRadius: 0, m: 0.5 }}>
        <CardActionArea>
           <CardMedia 
            image={book.volumeInfo.imageLinks?.thumbnail}
            alt={book.volumeInfo.title}
            sx={{ width: { xs: '140px', sm: '178px', md: '220px'}, height: { xs: '210px', md: '300px'} }}
            />
            <CardContent sx={{ backgroundColor: '#fff', height: '106px', textAlign: 'left', paddingLeft: 0 }}>
                <Typography variant="body1" fontSize={{ xs: "10px", md: "14px"}} fontWeight="normal" color="gray">
                    {book.volumeInfo.categories?.join(', ')}
                </Typography>
                <Typography variant="body1" fontSize={{ xs: "10px", md: "14px"}} fontWeight="bold" color="#black">
                    {book.volumeInfo.title.slice(0, 100)}
                </Typography>
                <Typography variant="body2" fontSize={{ xs: "10px", md: "14px"}} fontWeight="bold" color="gray">
                    {book.volumeInfo.authors?.join(', ')}
                </Typography>
            </CardContent> 
        </CardActionArea>
    </Card>
   
  )
}

export default BookCard