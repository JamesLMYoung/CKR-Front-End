import { File } from "../../../utils/File";

interface FileDisplayProps {
    file: File
}

const FileDisplay = (props: FileDisplayProps) => {
    const { name } = props.file;

    return (
        <div>
            <h5>{ name }</h5>
        </div>
    );
};

export default FileDisplay;