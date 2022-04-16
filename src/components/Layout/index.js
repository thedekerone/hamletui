import React, { Fragment } from "react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { MainContainer, Container } from "./styles";

export const Layout = ({ children }) => {
  const [inputDevices, setInputDevices] = useState([]);

  const { play, changeMic, stop, audio } = useContext(AudioManagerContext);
  const handleMicChange = (event) => {
    changeMic(event.target.value);
  };

  useEffect(() => {
    getDevices()
      .then((res) => {
        setInputDevices(res.inputDevices);
        changeMic(res.inputDevices[0].deviceId);
        return null;
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
      {/* <Sidebar></Sidebar> */}
      <select onChange={handleMicChange} name='output' id='output'>
        {inputDevices.map((el) => (
          <option key={el.deviceId} value={el.deviceId}>
            {el.label}
          </option>
        ))}
      </select>
      <MainContainer>
        <Header></Header>
        <Container>{children}</Container>
      </MainContainer>
    </Fragment>
  );
};
