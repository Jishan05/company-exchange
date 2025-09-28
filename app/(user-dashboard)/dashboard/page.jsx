import React from "react";

export default function DashboardHome() {
  const cards = [
    { title: "Pending Post", count: 12, bg: "#ffffff", border: "#b3d4fc" },
    { title: "Accepted Post", count: 8, bg: "#ffffff", border: "#b3d4fc" },
    { title: "Rejected Post", count: 3, bg: "#ffffff", border: "#b3d4fc" },
  ];

  return (
    <div
      style={{
        padding: "24px",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "8px" }}>
        Welcome to your Dashboard
      </h1>
      <p style={{ color: "#6b7280", marginBottom: "24px", fontSize: "16px" }}>
        Overview of your account goes here.
      </p>

      {/* Dashboard Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              flex: "1 1 250px",
              backgroundColor: card.bg,
              border: `2px solid ${card.border}`,
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minWidth: "200px",
            }}
          >
            <h2
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "12px",
                color: "#111827",
              }}
            >
              {card.title}
            </h2>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#1d4ed8", // modern blue accent
              }}
            >
              {card.count}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
