// src/App.tsx

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import AppLayout from "./pages/AppLayout.tsx";

// Create a single React Query client instance
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#1890ff", // Ant Design primary color
            borderRadius: 6, // Rounded corners globally
          },
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              {/* Home route */}
              <Route index element={<h1>Home Page</h1>} />
              
              {/* Additional pages */}
              <Route path="about" element={<h1>About Page</h1>} />
              <Route path="users" element={<h1>Users Page</h1>} />
              <Route path="create-user" element={<h1>Create User Page</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </QueryClientProvider>
  );
};

export default App;
