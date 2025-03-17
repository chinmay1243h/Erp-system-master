import React from "react"
import RolesContext from "../../context/roles/rolesContext"
import { useContext } from "react"
import { useEffect } from "react"
import Footer from "../loginSignup/footer"
import { Link } from "react-router-dom"

const Roles = () => {
  const { deleteRole, createRole, Roles, getAllRoles } = useContext(RolesContext)
  useEffect(() => {
    getAllRoles()
  }, [])

  const Onclickdelete = async (id) => {
    await deleteRole(id)
    getAllRoles()
  }

  return (
    <div className="grid grid-cols-1  dark:bg-gray-900">
      <div className="flex justify-center items-center overflow-auto">
        <div className="absolute top-0 text-center ml-52 mt-2 font-semibold text-lg dark:text-gray-300">
          Roles
        </div>
        <div className="overflow-auto  border border-gray-200  m-5 mt-20 ml-64 shadow-lg rounded-xl   dark:border-gray-600 ">
          <table className="w-full border-collapse  dark:bg-gray-950  bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50  dark:bg-gray-950    ">
              <tr>
                <th
                  scope="col"
                  className="dark:text-gray-400 lg:px-6 sm:px-2 lg:py-4 sm:py-2 sm:w-5 font-medium text-gray-900"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="dark:text-gray-400 lg:px-6 sm:px-2 lg:py-4 sm:py-2 sm:w-5 font-medium text-gray-900"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="dark:text-gray-400 lg:px-6 lg:py-4 font-medium text-gray-900"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="dark:text-gray-400 lg:px-6 lg:py-4 font-medium text-gray-900"
                >
                  Role
                </th>

                <th
                  scope="col"
                  className="dark:text-gray-400 lg:px-6 lg:py-4 font-medium text-gray-900"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y dark:border-gray-600 divide-gray-100 dark:divide-gray-600 border-t border-gray-100">
              {Roles &&
                Roles.map((Roles, index) => (
                  <tr
                    className={`transition-colors ${
                      index % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-gray-50 dark:bg-gray-950"
                    } hover:bg-gray-100 dark:hover:bg-gray-800 `}
                    key={Roles._id}
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="flex gap-3 px-6 py-4 font-normal text-gray-900 dark:text-white">
                      <div className="text-sm">
                        <div className="font-medium text-gray-700 dark:text-gray-400">
                          {Roles.employee_id.name}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{Roles.email}</td>
                    <td className="px-6 py-4">{Roles.role}</td>

                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-4">
                        <button
                          x-data="{ tooltip: 'Delete' }"
                          onClick={() => {
                            Onclickdelete(Roles.id)
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="red"
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
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="ml-52">
        <Footer />
      </div>
    </div>
  )
}

export default Roles
