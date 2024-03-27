import { Person } from "../../../utils/Person";

interface PersonDisplayProps {
    person: Person
}

const PersonDisplay = (props: PersonDisplayProps) => {
    const { name } = props.person;

    return (
        <div>
            <h5>{ name }</h5>
        </div>
    );
};

export default PersonDisplay;