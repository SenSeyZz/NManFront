import React, { useState, useEffect } from 'react';
import NavigationBar from '../NavBar';
import Table from '../table';
import axios from 'axios';
require('dotenv').config();

const Trivia = () => {
  
  const api_uri = "https://nymphoman-8404b9daaff5.herokuapp.com"
  const initialData = [
    // Your initial data here
  ];

  const [data, setData] = useState(initialData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api_uri + '/api/paulData');
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error, e.g., show error message
        
      }
    };

    fetchData();
  }, []);

  const handleAddRow = () => {
    const newRow = {
      first_name: '',
      birth_year: 0,
      nationality: '',
      boobs: 0,
      ass: 0,
      bj_quality: 0,
      intelligence: 0,
      where_you_met: '',
      quality_of_the_sex: 0,
      complicity: 0,
      special_physical_trait: '',
      global_grade: 0,
      Creator: "Paul",
      isNew: true,
    };
    setData([...data, newRow]);
    console.log(data);
  };
    

  const handleInputChange = (index, name, value) => {
    const newData = [...data];
    // Parse certain values as integers
    if (name === 'birth_year' || name === 'boobs' || name === 'ass' || name === 'bj_quality' || name === 'intelligence' || name === 'quality_of_the_sex' || name === 'complicity' || name === 'global_grade') {
      newData[index][name] = parseInt(value, 10); // Parse as integer
    } else {
      newData[index][name] = value;
    }
    setData(newData);
  };

  const handleSave = async () => {
    try {
      // Filter out the fetched rows and send only the newly added rows
      const newDataToSave = data.filter(row => row.isNew);

      await axios.post(api_uri+'/api/addRow', newDataToSave);
      alert('Data saved successfully');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error saving data. Please try again.');
    }
  };

  return (
    <div>
      <NavigationBar />
      <h1>Welcome to Paul's page</h1>
      <Table data={data} onInputChange={handleInputChange} />
      <button onClick={handleAddRow}>Add Row</button>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Trivia;