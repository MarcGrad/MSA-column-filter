let column = '';


function getMSA() {
    console.log('TextArea: ', document.querySelector('#alignTextarea').value);
    return document.querySelector('#alignTextarea').value;
}
function getGaps() {
    console.log('getGaps: ', document.querySelector('#gaps').value);
    return document.querySelector('#gaps').value;
}
function splitAlignment() {
    let alignmentParts = getMSA().split('>');
    console.log(alignmentParts.slice(1));
    return alignmentParts.slice(1);
}
function addBird() {
    let splitedAlignmentWithBirds = splitAlignment().map(function(e) {return '>' + e});
    console.log('addBird: ', splitedAlignmentWithBirds)
    return splitedAlignmentWithBirds;
}
function splitAlignmentElements() {
    let splitedAlignmentElements = addBird().map(function(e) {return e.split('\n')});
    console.log('splitedAlignmentElements ',splitedAlignmentElements)
    return splitedAlignmentElements;
}
function connectSequenceAndAddTooHeader() {
    return splitAlignmentElements().map(element => {
        const header = element.splice(0,1);
        const sequence = element.join('');
        return [header, sequence];

    });
}
function findMinories() {

    let columns = [];
    
    let column = '';

    connectSequenceAndAddTooHeader().forEach(element => {
        column += element[1][0];
        // var column = '';
        // var counter = 0;
        // element.forEach(item => {
        //     column.concat(item[1][counter]);   
        //     counter = counter + 1;
        //     columns.push(column);
        // });
    
    });
    console.log(column);
}





function execute() {
    const foo = findMinories();
    console.log('wynik', foo);
}