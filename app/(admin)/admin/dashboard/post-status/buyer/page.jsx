"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

const Index = () => {
  return (
    <div className="">
      <div className="bg-light-2">
        <div className="row y-gap-20 justify-between items-end mt-30 pb-30">
          <div className="col-auto">
            <h1 className="text-30 lh-14 fw-600">Buyer Company List</h1>
            <div className="text-15 text-light-1">
              Data fetched from backend with pagination.
            </div>
          </div>
          <div className="col-auto">
            <Link
              href="#"
              className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
            >
              Latest Companies
              <div className="icon-arrow-top-right ml-15"></div>
            </Link>
          </div>
        </div>

        <div className="py-30 px-30 rounded-4 bg-white shadow-3">
          <BookingTable />
        </div>
      </div>
    </div>
  );
};

export default Index;

//
// -------------------- BookingTable --------------------
//
const BookingTable = () => {
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const itemsPerPage = 4;

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/buyers/all?page=${page}&limit=${itemsPerPage}`
      );
      const data = await res.json();
      // alert(JSON.stringify(data, null, 2)); // null,2 ka matlab hai pretty print
      setBookings(data.data);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching buyers:", error);
    }
  };

  // 🟢 API handler for status update
  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/buyers/${id}/status`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      const data = await res.json();
      toast.success(data.message);

      // Local state update
      setBookings((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
      );
    } catch (err) {
      console.error("❌ Update failed:", err);
    }
  };

  // 🔹 Color style helper
  const getStatusStyle = (status) => {
    switch (status) {
      case "approved":
        return {
          backgroundColor: "#d4edda",
          color: "#155724",
          fontWeight: 600,
        };
      case "pending":
        return {
          backgroundColor: "#fff3cd",
          color: "#856404",
          fontWeight: 600,
        };
      case "rejected":
        return {
          backgroundColor: "#f8d7da",
          color: "#721c24",
          fontWeight: 600,
        };
      default:
        return {
          backgroundColor: "#e2e3e5",
          color: "#383d41",
          fontWeight: 600,
        };
    }
  };

  return (
    <>
      <div className="overflow-scroll scroll-bar-1">
        <table className="table-4 -border-bottom col-12">
          <thead className="bg-light-2">
            <tr>
              <th>Name</th>
              <th>ROC State</th>
              <th>Category</th>
              <th>Budget</th>
              <th>Number</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((b) => (
              <tr key={b.id}>
                <td className="text-blue-1 fw-500">{b.name}</td>
                <td>{b.rocState}</td>
                <td>{b.activity}</td>
                <td>{b.budget}</td>
                <td>{b.mobile}</td>
                <td>
                  <select
                    value={b.status}
                    onChange={(e) => handleStatusChange(b.id, e.target.value)}
                    style={{
                      ...getStatusStyle(b.status),
                      border: "1px solid #ccc",
                      borderRadius: "6px",
                      padding: "6px 10px",
                      minWidth: "120px",
                      appearance: "none",
                    }}
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </td>
                <td>
                  {(() => {
                    const date = new Date(b.created_at);
                    return `${String(date.getDate()).padStart(2, "0")}/${String(
                      date.getMonth() + 1
                    ).padStart(2, "0")}/${date.getFullYear()}`;
                  })()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

//
// -------------------- Pagination --------------------
//
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="border-top-light mt-30 pt-30">
      <div className="row x-gap-10 y-gap-20 justify-between md:justify-center">
        <div className="col-auto md:order-1">
          <button
            className="button -blue-1 size-40 rounded-full border-light"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <i className="icon-chevron-left text-12" />
          </button>
        </div>

        <div className="col-md-auto md:order-3">
          <div className="row x-gap-20 y-gap-20 items-center">
            {Array.from({ length: totalPages }, (_, i) => (
              <div
                key={i + 1}
                className={`size-40 flex-center rounded-full cursor-pointer ${
                  currentPage === i + 1 ? "bg-dark-1 text-white" : ""
                }`}
                onClick={() => onPageChange(i + 1)}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="col-auto md:order-2">
          <button
            className="button -blue-1 size-40 rounded-full border-light"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <i className="icon-chevron-right text-12" />
          </button>
        </div>
      </div>
    </div>
  );
};
