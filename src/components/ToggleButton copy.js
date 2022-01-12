import React, {useState} from "react";
import { Table, Col, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function ToggleButtonExample() {

  const [radioValue, setRadioValue] = useState('0');
  const [radioValue2, setRadioValue2] = useState('1');


  const radios = [
    { name: 'Activate', value: 'Yes' },
    { name: 'Disabled', value: 'No' },

  ];

  const radios2 = [
    { name: 'cake', value: 'no' },
    { name: 'cookie', value: '4' },
  ];


  return(


    <React.Fragment>

<Table>
        <Container>
            <p>Helloaa</p>
          
        </Container>
</Table>

  <Container>
        
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Yes?</th>
            <th>No?</th>
            <th className='text-center'>Remove</th>
          </tr>
        </thead>
        <tbody>
          {radios && (radios.map((radio, idx) => {
            // setDefaultMetricButtonActive(metric);
            return (
      <tr key={idx}>
        <td>{radios.name}</td>
      <td>
      <>
      <ToggleButtonGroup
          //type="radio"
          name="radio"
      >
      {radios.map((radios, idx) => (
        <ToggleButton
          //key={idx}
          id={`radio-${idx}`}
          //type="radio"
          variant={'outline-dark'}
          //name="radio"
          value={radios.value}
          checked={radioValue === radios.value}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
          onClick={() => {console.log('suppp');}}
        >
          {radios.value}
        </ToggleButton>

      )
      
      )}
      </ToggleButtonGroup>





      </>
      </td>
      </tr>
      );
      }))}
          </tbody>
          </Table>

  </Container>



  <Container>

        
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Yes?</th>
            <th>No?</th>
            <th className='text-center'>Remove</th>
          </tr>
        </thead>
        <tbody>
          {radios2 && (radios2.map((radio, idx) => {
            // setDefaultMetricButtonActive(metric);
            return (
      <tr key={idx+'1'}>
        <td>{radios.eatery}</td>
      <td>
      <>

      
      <ToggleButtonGroup
          //type="radio"
          name="radio2"
      >
      {radios2.map((radios, idx) => (
        <ToggleButton
          //key={idx+'1'}
          id={`radio-${idx+'1'}`}
          //type="radio"
          variant={'outline-dark'}
          //name="radio2"
          value={radios.value}
          //checked={radioValue === radios.value}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
          onClick={() => {console.log('suppp');}}
        >
          {radios.name}
        </ToggleButton>

      )
      
      )}
      </ToggleButtonGroup>





      </>
      </td>
      </tr>
      );
      }))}
          </tbody>
          </Table>

  </Container>




  </React.Fragment>
 




 


  );








}



export default ToggleButtonExample;
