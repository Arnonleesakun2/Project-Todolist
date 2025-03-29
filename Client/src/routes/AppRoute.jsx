import Layout from "@/layouts/Layout";
import Todolist from "@/pages/Todolist";
import Homepage from "@/pages/Homepage";
import NotFound from "@/pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="createtodo" element={<Todolist/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
