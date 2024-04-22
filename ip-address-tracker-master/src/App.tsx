import { IpAddressTracker } from "./components/IpAddressTracker/IpAddressTracker";
import "./App.css";
import { ApiProvider } from "../context/ApiContext";
import { Map } from "./components/Map/Map";


function App() {


  return (
    <>
      <ApiProvider>
        <IpAddressTracker />
        <Map />
        </ApiProvider>
    </>
  );
}

export default App;
