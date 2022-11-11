import React, {Component} from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import Loader from '../components/Loader/Loader';

export default class Characters extends Component {
  
  constructor(props) {
    super(props);
    this.state = { usersCollection: [] };
}

componentDidMount() {
        const options = {
            method: 'GET',
            url: 'https://game-of-thrones1.p.rapidapi.com/Characters',
            params: {limit: '10', page: '1'},
            headers: {
                'X-RapidAPI-Key': 'fa0828195cmsh9f824b0cab82622p1c348ajsnc8b29806bee2',
                'X-RapidAPI-Host': 'game-of-thrones1.p.rapidapi.com'
              }
          };
          
          axios.request(options)
          .then((response) => {             
              this.setState({usersCollection : response.data})
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
}

  
dataTable() {
  return this.state.usersCollection.map((data, i) => {
      return <CharacterCard obj={data} key={i} />;
  });
}



render() {
  return (
    <Box sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Stack
        direction="row"
        sx={{ gap: { lg: '107px', xs: '50px' } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {this.dataTable()}
      </Stack>
      {/* <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {Characters.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(Characters.length / CharacterPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack> */}
    </Box>
        )
      }
  
  }
