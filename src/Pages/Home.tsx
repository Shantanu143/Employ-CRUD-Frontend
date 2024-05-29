import { useEffect, useState } from "react";
import empService from "../Service/emp.service";
import { Link } from "react-router-dom";
interface EmpList {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  salary: number | null;
}
const Home = () => {
  const [empList, setEmpList] = useState<EmpList[]>([]);
  const [msg, setMsg] = useState<string>("");
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    empService
      .getAllEmp()
      .then((res) => {
        setEmpList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteEmp = (id: number) => {
    empService
      .deleteEmpById(id)
      .then((res) => {
        setMsg("Deleted Successfully");
        init();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl">Registered Employs</h1>
      {msg && <h1 className="text-center text-3xl my-5 text-red-500">{msg}</h1>}
      <div className="flex items-center justify-center my-4 py-10 bg-gray-100">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 ">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase "
                      >
                        Sr Number
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase "
                      >
                        First Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase "
                      >
                        Last Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase "
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase "
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase "
                      >
                        Salary
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase "
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 ">
                    {empList.map((emp, index) => {
                      return (
                        <tr key={index} className="hover:bg-gray-100 ">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                            {emp.firstName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                            {emp.lastName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                            {emp.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                            {emp.address}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                            {emp.salary}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <Link
                              to={`/editemp/${emp.id}`}
                              className="inline-flex items-center pr-4 gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                            >
                              Edit
                            </Link>

                            <a
                              type="button"
                              className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none "
                              onClick={() => deleteEmp(emp.id)}
                            >
                              Delete
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
