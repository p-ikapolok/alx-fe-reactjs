import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-700">
        User Registration
      </h1>
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;
