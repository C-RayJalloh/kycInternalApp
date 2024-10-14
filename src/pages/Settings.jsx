import AddUserForm from "../components/AddUserForm";
import Heading from "../components/Heading";
import Row from "../components/Row";

function Settings() {
  return (
    <>
      <Row>
        <Heading as="h1">App settings </Heading>
      </Row>
      <AddUserForm />
    </>
  );
}

export default Settings;
