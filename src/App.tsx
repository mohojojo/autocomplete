import { useEffect, useState } from 'react';
import './App.css';
import AutoComplete from './components/AutoComplete';
import { searchInDatabase } from './services';

function App() {

  const [results, setResults] = useState<any[]>()
  const [searchText, setSearchText] = useState('')

  const onChange = (value: string) => {
    setSearchText(value)
  }

  useEffect(() => {
    /// searching for heroes in the json file, if the search text changes
    const searchData = async () => {
      const results = await searchInDatabase(searchText)
      setResults(results)
    }

    searchData()
      .catch(console.error);
     
  }, [searchText])

  return (
    <div className="App">
      <AutoComplete
        onChange={onChange}
        results={results}
        labelProp='name'
        keyProp='page_id'
        placeholder='Search for Marvel hero'
        inputStyle={{
          padding: 10,
          width: 200,
        }}
      />
    </div>
  );
}

export default App;
