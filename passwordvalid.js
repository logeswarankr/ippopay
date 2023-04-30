let passwordvalid = (passinput) => {

strrptchk = passinput
   .split("")
   .filter((item, index, array) => array.indexOf(item) === index)
   .join("");
    // Password validation
    if ((passinput.length >= 6 || passinput.length <= 20) && (passinput.match(/[a-z]+/)) && passinput.match(/[A-Z]+/) && passinput.match(/[0-9]+/) && strrptchk.length === passinput.length) {
        return 0;
    } else if ((passinput.match(/[a-z]+/)) && passinput.match(/[A-Z]+/) && passinput.match(/[0-9]+/)) {
        return 3;
    }
    else {
        return 5;
    }
};