export function getAllNotes(req, res) {
    res.send("Hello from the backend server i am anumi ")
};

export function createNote(req, res){
    res.status(201).json({message: "node ceated successfully"});  
};

export function updateNote(req, res) {
    res.status(200).json({message: "node updated successfully"});
};

export function deleteNote(req, res) {
    res.status(200).json({message: "node deleted successfully"});
};