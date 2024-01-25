import CheckInForm from "./form.tsx";

export default function CheckInScreen() {
  return (
    <div style={styles.screen}>
      <div style={styles.container}>
        <div style={styles.leftContainer}>
          <div style={styles.imageContainer}></div>
        </div>
        <div style={styles.rightContainer}>
          <CheckInForm></CheckInForm>
        </div>
      </div>
    </div>
  );
}

const styles = {
  screen: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    display: "flex",
    minWidth: "400px",
    width: "90vw",
    minHeight: "200px",
    height: "80vh",
  },
  rightContainer: {
    flex: 1,
    display: "flex",
    alingItems: "center",
    padding: "20px",
    margin: "auto",
  },
  leftContainer: {
    flex: 1,
    overflow: "hidden",
    position: "relative",
  },
  imageContainer: {
    background:
      "url('https://png.pngtree.com/thumb_back/fh260/background/20220523/pngtree-working-mother-room-flat-color-vector-illustration-image_1393626.jpg') center/cover no-repeat",
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
  },
};
