import { Route, Routes } from "react-router-dom";
import PhotoDex from "../components/PhotoDex/PhotoDex";
import PhotoDaitel from "../components/PhotoDaitel/PhotoDaitel";
function PhotoRouter() {
    return(
        <Routes>
            <Route path="/" element={<PhotoDex/>} />
            <Route path="/photos/:id" element={<PhotoDaitel/>}/>
        </Routes>
    )
}
export default PhotoRouter;