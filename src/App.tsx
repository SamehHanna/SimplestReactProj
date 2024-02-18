import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = [
    "Cairo",
    "Alexandria",
    "Marsa Matroh",
    "Sharm el Sheikh",
    "Aswan",
  ];
  const [alertVisible, setAlertVisible] = useState(false);
  const handleSelectedItem = (item: string) => console.log(item);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Some <b>Alert</b> here
        </Alert>
      )}
      <Button onClick={() => setAlertVisible(true)} color="warning">
        My Button
      </Button>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      />
      <ListGroup
        items={[]}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
