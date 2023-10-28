import React, { useState, useEffect } from "react";
import { Button, Timeline } from "flowbite-react";
import { HiCalendar, HiArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleService = () => {
  const [service, setService] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getService();
  }, []);

  async function getService() {
    try {
      const response = await axios.get(
        `https://clair-ms.onrender.com/Api/stats/read/service/${id}`
      );
      setService(response.data.Statss);
    } catch (error) {
      console.error("Error while fetching services:", error);
    }
  }

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);

    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div className="p-6 bg-white">
      <Timeline>
        {service.map((item, index) => {
          return (
            <Timeline.Item key={item.ID || index}>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Time>{formatTimestamp(item.UpdatedAt)}</Timeline.Time>
                <Timeline.Title>Service ID: {item.ServiceID}</Timeline.Title>
                <Timeline.Body>
                  <p>
                    {item?.Status === "1"
                      ? "Good"
                      : item?.Status === "2"
                      ? "Failed"
                      : item?.Status === "3"
                      ? "Unknown"
                      : ""}
                  </p>
                  <p>Response Time: {item.ResponseTime} milliseconds</p>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </div>
  );
};

export default SingleService;
