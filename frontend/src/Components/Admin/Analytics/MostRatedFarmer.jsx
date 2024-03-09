import React, { useState, useEffect, useRef } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { getToken } from "../../../Utilitys/helpers";
import axios from "axios";
import Loader from "../../Layout/Loader";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const barColors = [
  "#0d6efd",
  "#6610f2",
  "#6f42c1",
  "#d63384",
  "#dc3545",
  "#fd7e14",
  "#ffc107",
  "#28a745",
  "#20c997",
  "#17a2b8",
  "#fff",
  "#6c757d",
  "#343a40",
  "#007bff",
  "#6c757d",
  "#28a745",
  "#17a2b8",
  "#ffc107",
  "#dc3545",
  "#f8f9fa",
  "#343a40",
];

function MostRatedFarmer() {
  const [loading, setLoading] = useState(true);
  const [rated, setRated] = useState("");
  const pdfRef = useRef(); // Add pdfRef

  const getSpecificProducts = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    };
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/farmer/ratingFarmer`,
        config
      );
      console.log(data.topRatedFarmers);
      setRated(data.topRatedFarmers);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSpecificProducts();
  }, []);

  const downloadPDF = () => {
    const input = pdfRef.current;
    const currentDate = new Date().toLocaleString(); 
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "mm", "a4", true); 
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;

      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );

      pdf.setFontSize(10);
      pdf.text(`Downloaded on: ${currentDate}`, 10, pdfHeight - 10);

      pdf.save("Products.pdf");
    });
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "8px",
          textAlign: "center",
        }}
        ref={pdfRef}
      >
        <p className="text-center ml-20 font-bold">Highest Rated Farms</p>
        <ResponsiveContainer width="100%" height={400}>
          {loading ? (
            <Loader />
          ) : (
            <BarChart data={rated}>
              <CartesianGrid strokeDasharray="2 2" />
              <XAxis dataKey="farmName" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="averageRating">
                {rated.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
      <button
        className="btn btn-primary"
        onClick={downloadPDF}
        style={{ marginTop: "20px" }}
      >
        Download PDF
      </button>
    </div>
  );
}

export default MostRatedFarmer;
