import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PageLayout from "./Layout/PageLayout";
import AddNotes from "./Pages/AddNotes";
import EditNote from "./Pages/EditNote";
import DeleteNote from "./Pages/DeleteNote";
import ViewNote from "./Pages/ViewNote";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/addNotes" element={<AddNotes />} />
          <Route path="/viewNote/:id" element={<ViewNote />} />
          <Route path="/editNotes/:id" element={<EditNote />} />
          <Route path="/deleteNote/:id" element={<DeleteNote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
