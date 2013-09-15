
function ui_init() {
    prop.ui={};

    $(".video-files .input").append("<div id=\"dropzone\">Select files</div>");

    $("#dropzone").filedrop({
	fallback_id: "video-files",
	url: "upload.php",
	paramname: "files",
	withCredentials: false,
	data: {
            param1: "value1",
            param2: function(){
		return calculated_data;
            },
	},
	error: function(err, file) {
            switch(err) {
            case "BrowserNotSupported":
                alert("browser does not support HTML5 drag and drop");
                break;
            case "TooManyFiles":
                alert("too many files");
                break;
            case "FileTooLarge":
                alert("file too large");
                break;
            case "FileTypeNotAllowed":
                alert("file type not allowed");
                break;
            case "FileExtensionNotAllowed":
                alert("file extension not allowed");
                break;
            default:
                break;
            }
	},
	allowedfiletypes: ["image/jpeg","image/png","image/gif"],
	allowedfileextensions: [],
	maxfiles: 1000,
	maxfilesize: 10,
	dragOver: function() {

	},
	dragLeave: function() {

	},
	docOver: function() {

	},
	docLeave: function() {

	},
	drop: function() {

	},
	uploadStarted: function(i, file, len){
            // a file began uploading
            // i = index => 0, 1, 2, 3, 4 etc
            // file is the actual file of the index
            // len = total files user dropped
	},
	uploadFinished: function(i, file, response, time) {

	},
	progressUpdated: function(i, file, progress) {

	},
	globalProgressUpdated: function(progress) {
	    
	},
	speedUpdated: function(i, file, speed) {

	},
	rename: function(name) {

	},
	beforeEach: function(file) {

	},
	beforeSend: function(file, i, done) {

	},
	afterAll: function() {

	}
    });
    
    loaded("ui");
}