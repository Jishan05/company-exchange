"use client";
import { useState } from "react";
import Pagination from "../components/Pagination";

const BookingTable = () => {
  const [bookings, setBookings] = useState([
    { id: 1, company: "Crowne Plaza Hotel", location: "Delhi", incorporation: "Year 2024", status: "Pending", reviews: 4.8, date: "04/04/2022" },
    { id: 2, company: "Crowne Plaza Hotel", location: "London", incorporation: "Ali Tufan", status: "Confirmed", reviews: 4.8, date: "04/04/2022" },
    { id: 3, company: "Crowne Plaza Hotel", location: "London", incorporation: "Ali Tufan", status: "Rejected", reviews: 4.8, date: "04/04/2022" },
    { id: 4, company: "Taj Palace", location: "Mumbai", incorporation: "2023", status: "Pending", reviews: 4.6, date: "02/02/2023" },
    { id: 5, company: "Hilton", location: "New York", incorporation: "2021", status: "Confirmed", reviews: 4.9, date: "12/12/2021" },
    { id: 6, company: "ITC Maurya", location: "Delhi", incorporation: "2020", status: "Rejected", reviews: 4.7, date: "01/01/2020" },
    // aur bhi dummy data add kar sakte ho testing ke liye
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // ek page me kitne records dikhane hai

  // Pagination logic
  const totalPages = Math.ceil(bookings.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBookings = bookings.slice(indexOfFirstItem, indexOfLastItem);

  const handleStatusChange = (id, newStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "rounded-100 py-4 px-1 text-center text-14 fw-500 bg-yellow-4 text-yellow-3";
      case "Confirmed":
        return "rounded-100 py-4 px-1 text-center text-14 fw-500 bg-blue-1-05 text-blue-1";
      case "Rejected":
        return "rounded-100 py-4 px-1 text-center text-14 fw-500 bg-red-3 text-red-2";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="overflow-scroll scroll-bar-1">
        <table className="table-4 -border-bottom col-12">
          <thead className="bg-light-2">
            <tr>
              <th>Company</th>
              <th>Location</th>
              <th>Incorporation</th>
              <th>Status</th>
              <th>Reviews</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {currentBookings.map((b) => (
              <tr key={b.id}>
                <td className="text-blue-1 fw-500">{b.company}</td>
                <td>{b.location}</td>
                <td>{b.incorporation}</td>
                <td>
                  <select
                    value={b.status}
                    onChange={(e) => handleStatusChange(b.id, e.target.value)}
                    className={getStatusClass(b.status)}
                    style={{ width: "100px" }}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
                <td>
                  <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                    {b.reviews}
                  </div>
                </td>
                <td>{b.date}</td>
                <td>
                  <div className="row x-gap-10 y-gap-10 items-center">
                    <div className="col-auto">
                      <button className="flex-center bg-light-2 rounded-4 size-35">
                        <i className="icon-eye text-16 text-light-1" />
                      </button>
                    </div>
                    <div className="col-auto">
                      <button className="flex-center bg-light-2 rounded-4 size-35">
                        <i className="icon-edit text-16 text-light-1" />
                      </button>
                    </div>
                    <div className="col-auto">
                      <button className="flex-center bg-light-2 rounded-4 size-35">
                        <i className="icon-trash-2 text-16 text-light-1" />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination ko BookingTable ke saath connect kar diya */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default BookingTable;
