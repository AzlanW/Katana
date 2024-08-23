const draggables = document.querySelectorAll('.draggable');
const dropzones = document.querySelectorAll('.dropzone');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
});

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', dragOver);
    dropzone.addEventListener('drop', drop);
});

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const draggableId = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(draggableId);
    event.target.appendChild(draggableElement);
}

document.getElementById('checkButton').addEventListener('click', checkAnswers);

function checkAnswers() {
    const correctAnswers = {
        'dropzone-1': 'drag-1',
        'dropzone-2': 'drag-2',
        'dropzone-3': 'drag-3',
        'dropzone-4': 'drag-4',
        'dropzone-5': 'drag-5',
        'dropzone-6': 'drag-6',
        'dropzone-7': 'drag-7',
        'dropzone-8': 'drag-8',
        'dropzone-9': 'drag-9',
        'dropzone-10': 'drag-10',
        'dropzone-11': 'drag-11',
        'dropzone-12': 'drag-12',
        'dropzone-13': 'drag-13',
        'dropzone-14': 'drag-14',
        'dropzone-15': 'drag-15',
        'dropzone-16': 'drag-16',
        'dropzone-17': 'drag-17',
        'dropzone-18': 'drag-18',
    };

    let correctCount = 0;
    let incorrectCount = 0;

    for (const [zoneId, correctId] of Object.entries(correctAnswers)) {
        const dropzone = document.getElementById(zoneId);
        const draggable = dropzone.querySelector('.draggable');
        
        if (draggable && draggable.id === correctId) {
            correctCount++;
        } else {
            incorrectCount++;
        }
    }

    const result = document.getElementById('result');
    result.textContent = `Aciertos: ${correctCount}, Errores: ${incorrectCount}`;
}
