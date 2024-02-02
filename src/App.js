import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
function App() {
  let [data, setdata] = useState('');
  let [info, setinfo] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        // handle success
        console.log(response.data.results);
        setinfo(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [])

  return (
    <div className="App">
      <Container fluid>
        <Row>
            <Col ><h1 style={{ fontSize: "100px" }}>The Rick and Morty API </h1></Col>
        </Row>
        <Row className='api-color'>
          {
            info.length === 0 ? <div className='lo'><span class="loader"></span></div> :
              info.map((ele, ind) => {  
                return (
                  <Col lg={6} >

                    <div className='d-flex text-start box  '>

                      <div><img src={ele.image} alt="" /></div>

                      <div className='item'>
                        <h2 >{ele.name}</h2>
                        <span className='status' style={{ backgroundColor: ele.status === "Alive" ? 'green' : ele.status === "Dead" ? 'red' : 'gray' }}></span>
                        <t>{ele.status} - {ele.species}</t>
                        <div className='mt-4'>
                          <p>Last known locations:</p>
                          <h4>{ele.origin.name}</h4>  </div>
                        <div className='mt-4'>
                          <p>First seen in:</p>
                          <h4>{ele.location.name}</h4>
                        </div>
                      </div>

                    </div>
                  </Col>
                );
              })
          }
        </Row>
      </Container>
    </div>
  );
}

export default App;
