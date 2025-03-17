import React, { useState } from "react"
import EmployeeContext from "./employeeContext"
import config from "../../config"

const EmployeeState = (props) => {
  const host = config.apiurl
  const employeeDb = []

  const [employees, setEmployees] = useState(employeeDb)
  const [employeeId, setEmployeeId] = useState(null)
  const [updateFormValues, setUpdateFormValues] = useState(null)
  const [employeeSearch, setemployeeSearch] = useState("")
  const authToken = localStorage.getItem("authToken")

  const getAllEmployees = async () => {
    try {
      const response = await fetch(`${host}/employees/fetchAllEmployees`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",

          "auth-token": authToken,
        },
      })
      const data = await response.json()
      setEmployees(data)
      setemployeeSearch(data)
    } catch (error) {
      console.error(error)
    }
  }

  const addEmployee = async (name, email, phone, basePay) => {
    try {
      const newEmployee = {
        name: name,
        phone: phone,
        email: email,
        basePay: basePay,
      }
      setEmployees([...employees, newEmployee])

      const response = await fetch(`${host}/employees/addEmployee`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

          "auth-token": authToken,
        },
        body: JSON.stringify({ name, email, phone, basePay }),
      })

      // Handle response if needed
    } catch (error) {
      console.error(error)
    }
  }

  const updateEmployee = async (id, name, email, phone, basePay) => {
    try {
      // Update employee Api call
      const response = await fetch(`${host}/employees/updateEmployee/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",

          "auth-token": authToken,
        },
        body: JSON.stringify({ name, email, phone, basePay }),
      })

      // Handle response if needed

      const updatedEmployees = employees.map((employee) =>
        employee._id === id ? { ...employee, name, email, phone } : employee
      )
      setEmployees(updatedEmployees)
    } catch (error) {
      console.error(error)
    }
  }

  const deleteEmployee = async (id) => {
    try {
      const updatedEmployees = employees.filter((employee) => employee._id !== id)
      setEmployees(updatedEmployees)

      const response = await fetch(`${host}/employees/deleteEmployee/${id}`, {
        method: "DELETE",
        headers: {
          "auth-token": authToken,
        },
      })

      // Handle response if needed
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        getAllEmployees,
        addEmployee,
        updateEmployee,
        deleteEmployee,
        employeeId,
        updateFormValues,
        setUpdateFormValues,
        setEmployeeId,
        employeeSearch,
        setemployeeSearch,
        setEmployees,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  )
}

export default EmployeeState
