import Heading from "../components/Heading";
import Row from "../components/Row";
import NewCustomerForm from "../components/NewCustomerForm";

function Customer() {
  return (
    <>
      <Row>
        <Heading as="h1">Register new customer </Heading>
      </Row>
      <NewCustomerForm />
    </>
  );
}

export default Customer;
