import { useEffect, useState } from 'react';
import { useHttps } from './hooks/useHttps';

import './App.css';

function App() {
  const [data, setData] = useState([]);
  const {request} = useHttps();

  const onLoad = (d) => {
    setData(d)
  }

  const onRequest = () => {
    request().then(onLoad)
  }

  useEffect(()=>{
    onRequest()
  }, [])

  return (
    <div className="App">
        {data.map((item, i)=>{
          return (
            <div key={i}>

            {item.name}
            </div>
          )
        })}
    </div>
  );
}

export default App;
