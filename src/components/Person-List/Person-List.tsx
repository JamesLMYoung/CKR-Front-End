import { useEffect, useState } from 'react';
import { Person } from "../../utils/Person";
import PersonDisplay from './Person-Display/Person-Display';

const PersonList = () => {
    const [people, setPeople] = useState<Array<Person>>([]);
    
    const loadPeople = () => {
        fetch('http://127.0.0.1:5001/people',{method: 'GET',headers: {'Content-Type': 'application/json'}})
        .then(response => response.json())
        .then(result => setPeople(result))
        .then(result => console.log(result))
    }

    useEffect(() => {
        loadPeople();
    }, []);

    return(
        <div>
        <div>
            <h3>People</h3>
            <h5>Name</h5>
        </div>
        {people.map((person) => (
            <PersonDisplay key={person.id} person={person}/>
        ))}
        </div>
    )
}

export default PersonList;