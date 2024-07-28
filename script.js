const editor = document.getElementById('editor');
const undoB = document.getElementById('undo');
const redoB = document.getElementById('redo');
const boldB = document.getElementById('bold');
const italicB = document.getElementById('italic');

let undoStack = [];
let redoStack = [];

editor.addEventListener('input', () =>
{
    redoStack = [];
    undoStack.push(editor.innerHTML);
    updateButtons();
});

undoB.addEventListener('click', () =>
{
    if(undoStack.length > 0)
    {
        redoStack.push(editor.innerHTML);
        editor.innerHTML = undoStack.pop();
    }
    updateButtons();
});

redoB.addEventListener('click', () =>
{
    if(redoStack.length > 0)
    {
        undoStack.push(editor.innerHTML);
        editor.innerHTML = redoStack.pop();
    }
    updateButtons();
});

boldB.addEventListener('click',() =>
{
    document.execCommand('bold');
    saveState();
});

italicB.addEventListener('click',() =>
{
    document.execCommand('italic');
    saveState();
});

function saveState()
{
    redoStack = [];
    undoStack.push(editor.innerHTML);
    updateButtons();
}

function updateButtons()
{
    undoB.disabled = undoStack.length === 0;
    redoStack.disabled = redoStack.length === 0;
}

updateButtons();