import AddUserForm from "../components/AddUserForm";
import Heading from "../components/Heading";
import Row from "../components/Row";

function Settings() {
  return (
    <>
      <Row>
        <Heading as="h3" className="text-2xl font-bold text-white">
          Register New Employee Admin
        </Heading>
      </Row>
      <AddUserForm />
    </>
  );
}

export default Settings;
