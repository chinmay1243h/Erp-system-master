import React, { useContext, useEffect, useState } from "react"
import EmployeeContext from "../../context/employees/employeeContext"
import { Link } from "react-router-dom"
import Footer from "../loginSignup/footer"
import NoResultFound from "../customer/customerSale/icons/animations/noResultFound.json"
import Lottie from "lottie-react"

const ViewEmployee = () => {
  const [showNoResult, setshowNoResult] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const {
    employees,
    getAllEmployees,
    deleteEmployee,
    setEmployeeId,
    setUpdateFormValues,
    setEmployees,
    employeeSearch,
  } = useContext(EmployeeContext)

  useEffect(() => {
    getAllEmployees()
  }, [])

  const updateEmployee = (employee) => {
    setEmployeeId(employee._id)
    setUpdateFormValues({
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
      basePay: employee.basePay,
    })
  }
  const handleInputChange = (e) => {
    const searchTerm = e.target.value
    setSearchValue(searchTerm)

    const results = employeeSearch.filter(
      (employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.basePay.toString().includes(searchTerm.toLowerCase()) ||
        employee._id.includes(searchTerm.toLowerCase())
    )

    if (Object.keys(results).length === 0) setshowNoResult(true)
    else setshowNoResult(false)

    setEmployees(results)
  }

  const SearchValue = () => {
    setSearchValue("")
    setshowNoResult(false)
    setEmployees(employeeSearch)
  }

  return (
    <div>
      <div className="flex justify-center items-center dark:bg-gray-900  ">
        <div className="absolute top-0 text-center ml-52 mt-2 font-semibold text-lg dark:text-gray-300">Employees</div>
        <div className="flex absolute top-6  mb-[4rem] ml-[67rem]">
          <div className="relative">
            <input
              className="appearance-none dark:bg-gray-500 dark:text-gray-300 border-2 pl-10 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-800  transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-green-600 focus:border-green-500 focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={handleInputChange}
            />
            <div className="absolute right-0 inset-y-0 flex items-center">
              <svg
                onClick={() => SearchValue()}
                xmlns="http://www.w3.org/2000/svg"
                className="-ml-1 mr-3 h-5 w-5 text-gray-400 dark:text-gray-200  hover:text-gray-500 dark:hover:text-gray-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="absolute left-0 inset-y-0 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-3  text-gray-400 dark:text-gray-200  hover:text-gray-500 dark:hover:text-gray-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="overflow-auto rounded-xl border border-gray-200 shadow-md m-5 mt-20 ml-64 dark:border-gray-600">
          {!showNoResult ? (
            <table className="w-full border-collapse dark:bg-gray-950  bg-white text-left text-sm text-gray-500 ">
              <thead className="bg-gray-50  dark:bg-gray-950">
                <tr>
                  <th scope="col" className="px-6 py-4 font-medium text-gray-900 dark:text-gray-400">
                    No
                  </th>
                  <th scope="col" className="px-6 py-4 font-medium text-gray-900 dark:text-gray-400">
                    Name
                  </th>
                  <th scope="col" className="px-12 py-4 font-medium text-gray-900 dark:text-gray-400">
                    Pay / day
                  </th>
                  <th scope="col" className="px-12 py-4 font-medium text-gray-900 dark:text-gray-400">
                    Phone
                  </th>
                  <th scope="col" className="px-20 py-4 font-medium text-gray-900 dark:text-gray-400">
                    Id
                  </th>
                  <th scope="col" className=" py-4 font-medium text-gray-900 dark:text-gray-400"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-600 border-t border-gray-100  dark:border-gray-600 dark:text-gray-400">
                {employees.map((employee, index) => (
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800" key={employee._id}>
                    <td className="px-5 py-4">{index + 1}</td>
                    <td className="flex gap-3 px-6 py-4 font-normal text-gray-900 dark:text-gray-400">
                      <div className="text-sm">
                        <div className="font-medium text-gray-700 dark:text-gray-300">{employee.name}</div>
                        <div className="text-gray-400">{employee.email}</div>
                      </div>
                    </td>
                    <td className="px-12 py-4 font-semibold">{employee.basePay} Rs</td>
                    <td className=" px-12 py-4">
                      <span className=" inline-flex items-center gap-1  bg-green-50 dark:bg-green-50/5 px-2 py-1 text-xs font-semibold dark:text-green-300 text-green-600">
                        {employee.phone}
                      </span>
                    </td>
                    <td className=" px-12 py-4">
                      <span className=" inline-flex items-center gap-1  bg-sky-50 dark:bg-sky-50/5 px-2 py-1 text-xs font-semibold dark:text-sky-200 text-sky-600">
                        {employee._id}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-4">
                        <button
                          x-data="{ tooltip: 'Delete' }"
                          onClick={() => {
                            deleteEmployee(employee._id)
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="red "
                            className="h-6 w-6"
                            x-tooltip="tooltip"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                        <Link
                          x-data="{ tooltip: 'Edit' }"
                          to={`/updateEmployee`}
                          onClick={() => updateEmployee(employee)}
                        >
                          <svg
                            fill="#000000"
                            width="25px"
                            height="25px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon flat-color"
                          >
                            <path
                              d="M19,2a1,1,0,0,0-1,1V5.33A9,9,0,0,0,3,12a1,1,0,0,0,2,0A7,7,0,0,1,16.86,7H14a1,1,0,0,0,0,2h5a1,1,0,0,0,1-1V3A1,1,0,0,0,19,2Z"
                              fill="rgb(0, 0, 0)"
                            ></path>
                            <path
                              d="M20,11a1,1,0,0,0-1,1A7,7,0,0,1,7.11,17H10a1,1,0,0,0,0-2H5a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V18.67A9,9,0,0,0,21,12,1,1,0,0,0,20,11Z"
                              fill="rgb(112, 128, 144)"
                            ></path>
                          </svg>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            ""
          )}
        </div>
      </div>
      {showNoResult ? (
        <div className="flex justify-center">
          <Lottie
            animationData={NoResultFound}
            loop={true}
            style={{ width: "245px", height: "245px", marginLeft: "224px" }}
          />
        </div>
      ) : (
        ""
      )}
      <div className="ml-52 dark:bg-gray-900">
        <Footer />
      </div>
    </div>
  )
}

export default ViewEmployee
