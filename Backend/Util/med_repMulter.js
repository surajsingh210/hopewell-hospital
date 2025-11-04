import multer from "multer";
import path from "path";

// Configure storage for uploaded files
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/med_rep"); // Destination folder
	},
	filename: function (req, file, cb) {
		cb(null, `${Date.now()}-${file.originalname}`);
	},
});

// File filter for only images
const fileFilter = (req, file, cb) => {
	const allowedTypes = /jpeg|jpg|png|pdf/;
	const extname = allowedTypes.test(
		path.extname(file.originalname).toLowerCase()
	);
	const mimetype = allowedTypes.test(file.mimetype);

	if (extname && mimetype) {
		return cb(null, true);
	} else {
		return cb(new Error("Only images (JPEG, JPG, PNG, PDF) are allowed"));
	}
};

// Initialize Multer middleware
const upload = multer({
	storage,
	limits: { fileSize: 50 * 1024 * 1024 }, // 2MB max file size
	fileFilter,
});

export default upload;
