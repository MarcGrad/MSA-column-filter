let column = '';


function getMSA() {
    // console.log('TextArea: ', document.querySelector('#alignTextarea').value);
    return document.querySelector('#alignTextarea').value;
}
function getGaps() {
    // console.log('getGaps: ', document.querySelector('#gaps').value);
    return document.querySelector('#gaps').value;
}
function splitAlignment() {
    let alignmentParts = getMSA().split('>');
    // console.log(alignmentParts.slice(1));
    return alignmentParts.slice(1);
}
function addBird() {
    let splitedAlignmentWithBirds = splitAlignment().map(function(e) {return '>' + e});
    // console.log('addBird: ', splitedAlignmentWithBirds)
    return splitedAlignmentWithBirds;
}
function splitAlignmentElements() {
    let splitedAlignmentElements = addBird().map(function(e) {return e.split('\n')});
    // console.log('splitedAlignmentElements ',splitedAlignmentElements)
    return splitedAlignmentElements;
}
function connectSequenceAndAddTooHeader() {
    return splitAlignmentElements().map(element => {
        const header = element.splice(0,1);
        const sequence = element.join('');
        return [header, sequence];

    });
}
function prepareColumns() {
    let columns = [];
    for (i = 0; i < connectSequenceAndAddTooHeader()[0][1].length; i++) { 
        let column = '';
        connectSequenceAndAddTooHeader().forEach(element => {
            column += element[1][i];
        });
        columns.push(column);
    // console.log(columns)
    }
    return columns;
}
function calculateColumnsPercentOfGaps() {
    const indexes = [];
    
    //po liście sekw3encji
    prepareColumns().forEach((element, i) => {
        console.log('e',element);

        let gapsCounter = 0;

        //po aminokwasach
        element.split('').forEach(character => {
            console.log('c',character);
            
            if (character === '-') {
                gapsCounter += 1;
            }
            
            console.log(gapsCounter);
        });            
        
        let score = (100 * gapsCounter) / connectSequenceAndAddTooHeader()[0][1].length;
        let treshold = getGaps();
        
        console.log(score);
        
        if (score >= treshold) {
            indexes.push(i);
        
        }


    });
    console.log(indexes);
}




function execute() {
    const foo = calculateColumnsPercentOfGaps();
    console.log('wynik', foo);
}