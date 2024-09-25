import React, { useState } from "react";
import "./career.css"; // Assuming you have a separate CSS file for styling
import bgImage from "../assets/img/carrerbc.png";
import { Modal } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Career = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // State management for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileno: "",
    jobtitle: "",
    description: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, mobileno, jobtitle, description } = formData;
    if (
      name !== "" &&
      email !== "" &&
      mobileno !== "" &&
      jobtitle !== "" &&
      description !== ""
    ) {
      toast.success("data send successfully");
      setFormData({
        name: "",
        email: "",
        mobileno: "",
        jobtitle: "",
        description: "",
      });
      handleClose();
    } else {
      toast.error("All filed is required");
    }
    try {
    } catch (err) {
      console.log(err);
    }

    // Perform form submission, replace with your desired logic
    // fetch("https://symbosys.com/datat4.php", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   body: new URLSearchParams(formData).toString(),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //     alert("Form submitted successfully");
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //     alert("There was an error submitting the form.");
    //   });
  };

  return (
    <>
      <div className="bg" style={{ backgroundImage: bgImage }}>
        <div className="container">
          <div className="content">
            <h2>
              Career @ Symbosys: An ISO 9001: 2018 Certified Software Company
            </h2>
            <p>
              Very few seats are available. Apply soon as per opening mentioned
              below. Kindly read the details carefully before applying. All
              openings are based on Physical Interview and Technical Test.
            </p>
            <p>Do come with your well-prepared following documents:</p>
            <ul>
              <li style={{ fontSize: "18px" }}>1. CV</li>
              <li style={{ fontSize: "18px" }}>2. PP size Photographs</li>
              <li style={{ fontSize: "18px" }}>3. Aadhar or Pan Card</li>
              <li style={{ fontSize: "18px" }}>
                4. Original & Xerox copy of Educational certificate
              </li>
            </ul>
            <p>
              Without proper documents, you will be disqualified automatically.
            </p>
            <p
              className="note"
              style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}
            >
              Note:
            </p>
            <ul>
              <li style={{ color: "black" }}>
                1. Brightcode Software Services Pvt. Ltd. don't accept any
                payment for any appointment directly or indirectly through any
                agent. So be careful and only you will be responsible for any
                misleading promises.
              </li>
              <li style={{ color: "black" }}>
                2. Selection is done only on merit.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Job Description</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Requirement:</strong>
                      </td>
                      <td>HR</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Qualification:</strong>
                      </td>
                      <td>MBA / B.Tech (CS / IT) with experience</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Job Description:</strong>
                      </td>
                      <td>
                        <ul>
                          <li>
                            Support in planning and implementing key HR
                            initiatives to help the organization become an
                            Employer of Choice
                          </li>
                          <li>
                            Work with Head HR in execution of HR business
                            plan/strategy; embed change into day-to-day working
                            practice and organization culture so as to build a
                            performance-oriented organization.
                          </li>
                          <li>
                            Continuously supports review and improvement of the
                            HR policies to reinforce organizational culture.
                          </li>
                          <li>
                            Develop solutions which enable successful retention
                            strategies and solve capability gaps using internal
                            and external levers including development,
                            resourcing, training, and innovative stretch
                            experiential opportunities.
                          </li>
                          <li>
                            Coordinate to provide accurate inputs for payroll.
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    borderRadius: "10px",
                    border: "none",
                    padding: "10px 10px",
                  }}
                  data-toggle="modal"
                  data-target="#applyFormModal"
                  onClick={handleShow}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          {/* Open Positions Column */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Open Positions</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>HR</td>
                      <td>
                        <span className="badge badge-success">Open</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Sales Co-ordinator</td>
                      <td>
                        <span className="badge badge-success">Open</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Marketing Executive</td>
                      <td>
                        <span className="badge badge-success">Open</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Accountant</td>
                      <td>
                        <span className="badge badge-success">Open</span>
                      </td>
                    </tr>
                    <tr>
                      <td>JAVA Developer</td>
                      <td>
                        <span className="badge badge-success">Open</span>
                      </td>
                    </tr>
                    <tr>
                      <td>.Net Developer</td>
                      <td>
                        <span className="badge badge-success">Open</span>
                      </td>
                    </tr>
                    <tr>
                      <td>PHP Developer</td>
                      <td>
                        <span className="badge badge-success">Open (2)</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Android Developer</td>
                      <td>
                        <span className="badge badge-success">Open (1)</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Frontend Developer</td>
                      <td>
                        <span className="badge badge-success">Open</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Software Tester</td>
                      <td>
                        <span className="badge badge-success">Open</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Telecaller</td>
                      <td>
                        <span className="badge badge-success">Open</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton={handleClose}>
            <h5 className="modal-title" id="" style={{ color: "red" }}>
              Apply For Required Post
            </h5>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobileno">Mobile No</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobileno"
                  name="mobileno"
                  value={formData.mobileno}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="jobtitle">Job Title</label>
                <select
                  className="form-control"
                  id="jobtitle"
                  name="jobtitle"
                  value={formData.jobtitle}
                  onChange={handleChange}
                >
                  <option value="">Select Job Title</option>
                  <option value="software-engineer">Software Engineer</option>
                  <option value="data-scientist">Data Scientist</option>
                  <option value="product-manager">Product Manager</option>
                  <option value="designer">Designer</option>
                  <option value="marketing-specialist">
                    Marketing Specialist
                  </option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <br />
              <button type="submit" className="btn btn-success">
                Send to HR
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>

      <ToastContainer />
    </>
  );
};

export default Career;
