
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CertificatesRoute from "./CertificatesRoute";
import "./styles/main.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/certificates" element={<CertificatesRoute />} />
		</Routes>
	</BrowserRouter>
);

