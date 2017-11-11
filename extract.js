module.exports.extract = function(window) {

    // Array of all form elements for input
    const formElements = ["input", "select", "textarea", "datalist", "output"];

    // Gets the form element from the page
    let form = window.document.getElementsByTagName("FORM")[0];

    // Elements array to store all the form controls found in the
    // DOM, element Object stores the temporary object for each
    // type of element
    let elements = [],
	elementObject;

    // Loops through all elements with tags listed above, storing into
    // one array
    formElements.forEach((element) => {
	elementObject = form.getElementsByTagName(element);
	
	elements = elements.concat(Object.keys(elementObject).map((key) => {
	    return elementObject[key];
	}));
    });

    // Variables for the final metadata, label and input strings
    let metadata = {},
	label, input;
    
    // For each element in the form create the metadata from the
    // inputs name and HTML making up the label
    elements.forEach((element) => {
	label = element.parentElement.previousSibling.innerHTML.trim();
	input = element.name.trim();
	metadata[label] = (label + " " + input);
    });

    return metadata;    
};
