import React from 'react'

const Postdatanotavialble = () => {
  return (
    <div className="bg-white  mt-8 p-4 ml-44 h-auto rounded-md shadow-md">
    <h3 className="text-lg font-semibold mb-4">user Details</h3>
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Field</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"> Value </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 text-sm font-medium text-gray-900">ID</td>
          <td
            className="px-6 py-4 text-sm text-gray-500 cursor-pointer"
       
          >
      Not available
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 text-sm font-medium text-gray-900">Name</td>
          <td className="px-6 py-4 text-sm text-gray-500">Not available</td>
        </tr>
        <tr>
          <td className="px-6 py-4 text-sm font-medium text-gray-900">UserName</td>
          <td className="px-6 py-4 text-sm text-gray-500">Not available</td>
        </tr>
        <tr>
          <td className="px-6 py-4 text-sm font-medium text-gray-900">E-mail</td>
          <td className="px-6 py-4 text-sm text-gray-500">Not available</td>
        </tr>
      </tbody>
    </table>
 </div>
  )
}

export default Postdatanotavialble