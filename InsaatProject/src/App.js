import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import FormCalisan from "./pages/FormCalisan";
import FormDaire from "./pages/FormDaire";
import FormMusteri from "./pages/FormMusteri";
import FormProje from "./pages/FormProje";
import FormSatis from "./pages/FormSatis";
import FormZiyaret from "./pages/FormZiyaret";
import ListeCalisan from "./pages/ListeCalisan";
import ListeCinsiyet from "./pages/ListeCinsiyet";
import ListeDaire from "./pages/ListeDaire";
import ListeDaireTipi from "./pages/ListeDaireTipi";
import ListeGelirTipi from "./pages/ListeGelirTipi";
import ListeMusteri from "./pages/ListeMusteri";
import ListeProje from "./pages/ListeProje";
import ListeProjeDurumu from "./pages/ListeProjeDurumu";
import ListeSatis from "./pages/ListeSatis";
import ListeSehir from "./pages/ListeSehir";
import ListeZiyaret from "./pages/ListeZiyaret";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/index" element={<Dashboard />} />      
      <Route path="/FormCalisan" element={<FormCalisan />} />
      <Route path="/FormDaire" element={<FormDaire />} />
      <Route path="/FormMusteri" element={<FormMusteri />} />
      <Route path="/FormProje" element={<FormProje />} />
      <Route path="/FormSatis" element={<FormSatis />} />
      <Route path="/FormZiyaret" element={<FormZiyaret />} />
      <Route path="/ListeCalisan" element={<ListeCalisan />} />
      <Route path="/ListeCinsiyet" element={<ListeCinsiyet />} />
      <Route path="/ListeDaire" element={<ListeDaire />} />
      <Route path="/ListeDaireTipi" element={<ListeDaireTipi />} />
      <Route path="/ListeGelirTipi" element={<ListeGelirTipi />} />
      <Route path="/ListeMusteri" element={<ListeMusteri />} />
      <Route path="/ListeProje" element={<ListeProje />} />
      <Route path="/ListeProjeDurumu" element={<ListeProjeDurumu />} />
      <Route path="/ListeSatis" element={<ListeSatis />} />
      <Route path="/ListeSehir" element={<ListeSehir />} />
      <Route path="/ListeZiyaret" element={<ListeZiyaret />} />      
    </Routes>
  );
}

export default App;
