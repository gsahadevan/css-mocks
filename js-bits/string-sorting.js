var unSortedString = 'the most beautiful city in india is bangalore';
var sortedString = 'in is the city most india bangalore beautiful'; // should be the output

sortString1();
sortString2();

function sortString1() {
    var strArray = unSortedString.split(' ');
    strArray.sort(); // by default sort does lexographical sorting
    console.log(strArray.join().replace(/,/g, ' ')); // bangalore beautiful city in india is most the
    strArray.sort((a, b) => a.length > b.length);
    console.log(strArray.join().replace(/,/g, ' ')); // in is the city most india bangalore beautiful
}

function sortString2() {
    var strArray = unSortedString.split(' ');
    strArray.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(strArray.join().replace(/,/g, ' ')); // in is the city most india bangalore beautiful
}
