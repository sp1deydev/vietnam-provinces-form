import './App.css';
import ProvincesForm from './pages/ProvincesForm/ProvincesForm';

function App() {
  return (
    <>
      {/* <div>
        <Space>
          <Button type='primary'>API 1</Button>
          <Button type='primary'>API 2</Button>
        </Space>
      </div> */}
      <div className='home-container'>
        <ProvincesForm/>
      </div>
    </>
  )
}

export default App
