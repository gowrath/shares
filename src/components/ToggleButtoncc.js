import React, {useState} from "react";
import { Table, Col, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function ToggleButtonExample() {

  const [radioValue, setRadioValue] = useState('1');
  const [radioValue2, setRadioValue3] = useState('0');


  const radios = [
    { name: 'Activate', value: '1' },
    { name: 'Disabled', value: '2' },

  ];

  const radios2 = [
    { name: 'Yea', value: '3' },
    { name: 'Nay', value: '4' },
    { eatery: 'macaron', value: '5' },

  ];

  const radios3 = [
    { eatery: 'waste', value: '6' },
    { eatery: 'cake', value: '7' },
  ];


  return(


    <React.Fragment>
      <Container>
    <Table striped bordered hover>
    <thead>
      
    </thead>
    <tbody>
      {radios && (radios.map((radio, idx) => {
        // setDefaultMetricButtonActive(metric);
        return (
          <tr key={idx}>
            <td>{radios.name}</td>
            <td>
  
  <ToggleButtonGroup
      type="radio"
      name="radio"
  >
  {radios.map((radio, idx) => (
    <ToggleButton
      key={idx}
      id={`radio-${idx}`}
      //type="radio"
      variant={'outline-dark'}
      //name="radio"
      value={radio.value}
      checked={radioValue === radio.value}
      onChange={(e) => setRadioValue(e.currentTarget.value)}
      onClick={() => {console.log('sup');}}
    >
      {radio.name}
    </ToggleButton>
  )
  
  )}
  </ToggleButtonGroup>



<>
  <ToggleButtonGroup
      type="radio"
      name="radio"
  >
  {radios2.map((radio, idx) => (
    <ToggleButton
      key={idx}
      id={`radio-${idx}`}
      //type="radio"
      variant={'outline-dark'}
      //name="radio"
      //value={radio.value}
      //checked={radioValue === radio.value}
      //onChange={(e) => setRadioValue(e.currentTarget.value)}
      onClick={() => {console.log('sup1');}}
    >
      {radio.name}
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
      <tr key={idx+'2'}>
        <td>{radios.name}</td>
      
      
      
      <td>
      <>
      <ToggleButtonGroup
          type="radio"
          name="radio2"
      >
      {radios3.map((radios, idx) => (
        <ToggleButton
          key={idx+'2'}
          //id={`radio2-${idx}`}
          //type="radio"
          //variant={'outline-dark'}
          //name="radio2"
          //value={radios2.value}
          //checked={radioValue2 === radios2.value}
          //onChange={(e) => setRadioValue3(e.currentTarget.value)}
          onClick={() => {console.log('nazzz');}}
        >
          {radios.eatery}
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
