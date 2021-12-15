import { Router } from "express";
import { render } from "express/lib/response";
import { renderIndex, renderAbout, renderNintendo, renderPlaystation, renderXbox, renderColeccionables } from "../controllers/index.controller";

const router = Router();

router.get("/", renderIndex);
router.get("/nintendo", renderNintendo);
router.get("/playstation", renderPlaystation); 
router.get("/xbox", renderXbox);
router.get("/coleccionables", renderColeccionables)
router.get("/about", renderAbout);



export default router;
