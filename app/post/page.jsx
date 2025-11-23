// pages/index.js
import Link from "next/link";

const Index = () => {
  return (
    <div style={styles.container}>
      {/* Heading */}
      <h1 style={styles.heading}>Welcome to Post Page</h1>

      {/* Paragraph */}
      <p style={styles.paragraph}>
        Here you can create a post either as a Seller or as a Buyer. Choose the
        type of post you want to make by clicking one of the buttons below.
      </p>

      {/* Buttons */}
      <div style={styles.buttonContainer}>
        <Link href="/post/Seller" passHref>
          <button className="button px-30 fw-400 text-14 -blue-3 bg-dark-4 h-50 text-white">Seller Post</button>
        </Link>
        <Link href="/post/Buyer" passHref>
          <button className="button px-30 fw-400 text-14 -blue-3 bg-dark-4 h-50 text-white">Buyer Post</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f4f8",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    color: "#333",
    fontSize: "36px",
    marginBottom: "20px",
  },
  paragraph: {
    color: "#555",
    fontSize: "18px",
    maxWidth: "600px",
    marginBottom: "30px",
  },
  buttonContainer: {
    display: "flex",
    gap: "20px",
  },
  button: {
    padding: "14px 40px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#1e90ff", // Modern blue
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Index;
