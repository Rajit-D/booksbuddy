import axios from "axios";
import { useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";

const Dashboard = () => {
  const setUser = useSetRecoilState(userAtom);
  const handleClick = async () => {
    const response = await axios.post(
      "http://localhost:4000/api/v1/students/logout",
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    console.log(response);
    localStorage.removeItem("user-threads");
    setUser(null);
    window.location.href = "/auth";
  };
  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        BookBuddy
        <div style={styles.userSection}>
          <button onClick={handleClick} style={styles.logoutButton}>
            Logout
          </button>
        </div>
      </nav>
      <div style={styles.centeredText}>Welcome to BookBuddy</div>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  navbar: {
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
    fontWeight: "bold",
  },
  userSection: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
  },
  userIcon: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  logoutButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "underline",
  },
  centeredText: {
    fontSize: "2.5em",
    textAlign: "center",
    margin: "20px 0",
  },
};

export default Dashboard;
