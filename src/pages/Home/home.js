import React, { useState } from "react";
import "./home.scss";
import {
  faGoogle,
  faFacebook,
  faAmazon,
} from "@fortawesome/free-brands-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  const jobList = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      company_img: faGoogle,
      location: "Remote",
      type: "Full Time",
      date: "1 day ago",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Facebook",
      company_img: faFacebook,
      location: "Remote",
      type: "Full Time",
      date: "2 days ago",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Amazon",
      company_img: faAmazon,
      location: "Remote",
      type: "Full Time",
      date: "3 days ago",
    },
    {
      id: 4,
      title: "Backend Developer",
      company: "Google",
      company_img: faGoogle,
      location: "Remote",
      type: "Full Time",
      date: "1 day ago",
    },
    {
      id: 5,
      title: "Database Engineer",
      company: "Facebook",
      company_img: faFacebook,
      location: "Remote",
      type: "Full Time",
      date: "2 days ago",
    },
    {
      id: 6,
      title: "Full Stack Developer",
      company: "Amazon",
      company_img: faAmazon,
      location: "Remote",
      type: "Full Time",
      date: "3 days ago",
    },
    {
      id: 7,
      title: "Data Analyst",
      company: "Google",
      company_img: faGoogle,
      location: "Remote",
      type: "Full Time",
      date: "1 day ago",
    },
    {
      id: 8,
      title: "Backend Developer",
      company: "Facebook",
      company_img: faFacebook,
      location: "Remote",
      type: "Full Time",
      date: "2 days ago",
    },
    {
      id: 9,
      title: "Full Stack Developer",
      company: "Amazon",
      company_img: faAmazon,
      location: "Remote",
      type: "Full Time",
      date: "3 days ago",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobList.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      <div className="container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for jobs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="filter-btn">
            <FontAwesomeIcon
              icon={faFilter}
              style={{
                marginRight: "5px",
              }}
            />
            <span>Filter</span>
          </button>
          <button className="find-job-btn">Find Job</button>
        </div>
      </div>
      <div className="container">
        <div className="job-list">
          {filteredJobs.map((job) => (
            <div className="job-card" key={job.id}>
              <div className="company-logo">
                <FontAwesomeIcon icon={job.company_img} size="6x" />
              </div>
              <div className="job-info">
                <div className="job-date">{job.date}</div>
                <h1 className="job-title">{job.title}</h1>
                <span className="job-company">{job.company}</span>
                <span>{",  "}</span>
                <span className="job-location">{job.location}</span>
                <span>{",  "}</span>
                <span className="job-type">{job.type}</span>
                <p className="job-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="job-apply">
                  <a href="#apply">Apply</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
