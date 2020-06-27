let noteIdCounter = 8;
let columnIdCounter = 4;

document.querySelectorAll('.column').forEach(columnElement => {
    const spanAction_addNote = columnElement.querySelector("[data-action-addNote]");

    spanAction_addNote.addEventListener('click', function (event) {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.setAttribute('draggable', 'true');
        noteElement.setAttribute('data-note-id', noteIdCounter);

        noteIdCounter++;

        columnElement.querySelector('[data-notes]').append(noteElement);
        // <div class="note" draggable="true" data-note-id="3">Купить собачий корм.</div>

    })
})