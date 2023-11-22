import { useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

const focusedStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

export const useTxtUpload = () => {
  const { acceptedFiles, getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: {
      'text/*': ['.txt'],
    },
    maxFiles: 1,
  });
  const [fileContent, setFileContent] = useState('');

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject],
  );

  useEffect(() => {
    let file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const text = event.target.result;
        setFileContent(text);
      };

      reader.readAsText(file);
    }
  }, [acceptedFiles[0]]);

  return {
    acceptedFiles,
    fileContent,
    getRootProps: (data) => getRootProps({ ...data, style }),
    getInputProps,
    setFileContent,
  };
};
