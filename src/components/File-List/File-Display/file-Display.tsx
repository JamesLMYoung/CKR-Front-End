import { File } from "../../../utils/File";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

interface FileDisplayProps {
    file: File
}

const FileDisplay = (props: FileDisplayProps) => {
    const { name } = props.file;
    const { modified } = props.file;
    const { link } = props.file;
    const { distribution } = props.file;
    const navigate = useNavigate();

    return (
        <Card style={{ width: '80%' }}>
            <Card.Body>
                <Card.Title>{ name }</Card.Title>
                <Card.Text>
                    Last modified: { modified }
                </Card.Text>
                <Card.Text>
                    Distribution: {distribution}
                </Card.Text>
                <Card.Text>
                    <Button variant="primary" onClick={() => navigate("google.com")}>Open</Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default FileDisplay;