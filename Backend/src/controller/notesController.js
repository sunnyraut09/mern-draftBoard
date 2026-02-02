const Note = require("../models/Note.js")

async function getAllNotes(req,res){
    try{
        const notes = await Note.find().sort({createdAt:-1});//newest first
        res.status(200).json(notes);
    }catch(error){
        console.error("Error in getAllNotes",error);
        res.status(500).json({message:"Internal server error"});
    }
}

async function createNote(req,res){
    try{
        const {title,content} = req.body
        const note = new Note({title,content})
        const savedNote = await note.save()
        res.status(200).json(savedNote)
        console.log(title,content)
    }catch(error){
        console.error("Error in getAllNotes",error);
        res.status(500).json({message:"Internal server error"});
    }
}
async function editNote(req,res){
    try{
        const {title,content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{ new: true})
        if(!updatedNote) return res.status(404).json({message:"Note not found"});
        res.status(200).json(updatedNote)
    }catch(error){
        console.error("Error in editNotes",error);
        res.status(500).json({message:"Internal server error"});
    }
}
async function deleteNote(req,res){
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if(!deletedNote) return res.status(404).json({message:"Note not found"});
        res.status(200).json({message:"Note Deleted successfullly!"})
    }catch(error){
        console.error("Error in deleteNotes",error);
        res.status(500).json({message:"Internal server error"});
    }
}

async function getNoteById(req,res){
    try{
        const note = await Note.findById(req.params.id)
        if(!note){return res.status(404).json({message:"Note not found"})}
        res.json(note);
    }catch(error){
        console.error("Error in getNoteById",error);
        res.status(500).json({message:"Internal server error"});
    }
}


module.exports = {getAllNotes,createNote,editNote,deleteNote,getNoteById}