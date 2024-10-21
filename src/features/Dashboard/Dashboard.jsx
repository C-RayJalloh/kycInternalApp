import Spinner from "../../components/Spinner";
import { useCustomer } from "../../Queries/useCustomers";

function Dashboard() {
  const { customers = [], isPending } = useCustomer(); // Initialize customers with an empty array

  if (isPending) return <Spinner />;

  const pendingVerifications = customers.filter(
    (customer) => customer.status === "Pending"
  ).length;

  const completedToday = customers.filter(
    (customer) => customer.status === "Approved"
  ).length;

  const flaggedForReview = customers.filter(
    (customer) => customer.status === "Rejected"
  ).length;

  return (
    <>
      <h1 className="text-2xl font-bold text-white mb-6">
        KYC Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Pending Verifications */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Pending Verifications
          </h2>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            {pendingVerifications}
          </p>
        </div>

        {/* Completed Today */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Completed Today
          </h2>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">
            {completedToday}
          </p>
        </div>

        {/* Flagged for Review */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Flagged for Review
          </h2>
          <p className="text-3xl font-bold text-red-600 dark:text-red-400">
            {flaggedForReview}
          </p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
