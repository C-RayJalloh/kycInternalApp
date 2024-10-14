import DataTable from "../components/DataTable";
import Heading from "../components/Heading";
import Row from "../components/Row";

function Customers() {
  return (
    <>
      <Row>
        <Heading as="h1">All customers </Heading>
      </Row>
      <DataTable />
    </>
  );
}

export default Customers;
