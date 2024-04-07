import { useEffect, useState } from 'react';
import { File } from "../../utils/File";
import FileDisplay from './File-Display/file-Display';
import { useFilterStore } from '../../store';

const FileList = () => {
    const [file, setFile] = useState<Array<File>>([]);
    const filter = useFilterStore((state) => state.fileFilter);

    const loadFile = () => {
        console.log(filter);
        fetch('http://127.0.0.1:5001/files', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ filter })
        })
        .then(response => response.json())
        .then(result => setFile(result))
        .then(result => console.log(result));
    }

    useEffect(() => {
        loadFile();
    }, [filter]); // Load files whenever the filter changes

    return (
        <div>
            <div>
                <h3>Files</h3>
                <h5>Name</h5>
            </div>
            {file.map((file) => (
                <FileDisplay key={file.id} file={file}/>
            ))}
        </div>
    );
}

export default FileList;