import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const checkIfExist = (arr, name, number) => {
    return arr.some((person) => person.name === name || person.number === number);
  };

  const handleOnChangeName = (e) => setNewName(e.target.value);
  const handleOnChangeNumber = (e) => setNewNumber(e.target.value);
  const handleOnChangeFilter = (e) => setNewFilter(e.target.value);

  const handleAdd = (event) => {
    event.preventDefault();
    const isExist = checkIfExist(persons, newName, newNumber);
    if (isExist) {
      alert(`Name ${newName} or Phone ${newNumber} is already added to phonebook.`);
    } else {
      const newPerson = {
        id: persons.length ? Math.max(persons.map(p => p.id)) + 1 : 1,
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewNumber('');
    }
  };

  const filterByName = (array, name) =>
    array.filter(person => person.name.toLowerCase().includes(name.toLowerCase()));

  const personsToShow = filterByName(persons, newFilter);

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={newFilter} onChange={handleOnChangeFilter} />

      <h3>Add a new</h3>

      <PersonForm
        onSubmit={handleAdd}
        name={newName}
        onNameChange={handleOnChangeName}
        number={newNumber}
        onNumberChange={handleOnChangeNumber}
      />

      <h3>Numbers</h3>

      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;
