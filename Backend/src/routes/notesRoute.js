const express = require("express")
const { getAllNotes,createNote,editNote,deleteNote,getNoteById} = require("../controller/notesController.js")

const router = express.Router()

router.get("/",getAllNotes)
router.get("/:id",getNoteById)
router.post("/",createNote)
router.put("/:id",editNote)
router.delete("/:id",deleteNote)

// export default router = since we are using commonjs type in json
module.exports = router