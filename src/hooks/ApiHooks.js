import {useState, useEffect} from 'react';

const url = 'https://media.mw.metropolia.fi/wbma/media/';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const getMedia = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      const allFiles = await Promise.all(
        json.map(async (item) => {
          const fileResponse = await fetch(url + item.file_id);
          return await fileResponse.json();
        })
      );
      setMediaArray(allFiles);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  return {mediaArray};
};

export {useMedia};
