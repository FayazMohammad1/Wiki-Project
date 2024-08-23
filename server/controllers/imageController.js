const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');
const Question = require('../models/Question_model.js');


// Initialize GridFS
const conn = mongoose.connection;
let bucket;

conn.once('open', () => {
  bucket = new GridFSBucket(conn.db, { bucketName: 'uploads' });
});

// Configure multer storage
const storage = new GridFsStorage({
  url: 'mongodb://127.0.0.1:27017/authentication',
  file: (req, file) => {
    return {
      filename: file.originalname,
      bucketName: 'uploads'
    };
  }
});
const upload = multer({ storage }).single('image');

// Controller for handling image upload
const uploadImage = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.error('Upload error:', err);
      return res.status(400).json({ error: err.message });
    }

    // Respond with file info
    res.status(201).json({
      url: `http://localhost:3000/api/images/${req.file.id}`, // Return the file URL for the client to use
      id: req.file.id
    });
  });
};



// Controller for serving images
const serveImage = async (req, res) => {
    try {
        const objectId = new mongoose.Types.ObjectId(req.params.imageid);

        // Find file metadata from GridFS collection
        const file = await conn.db.collection('uploads.files').findOne({ _id: objectId });

        if (!file) {
            console.log('No file found with that ID.');
            return res.status(404).json({ err: 'No file found' });
        }

        console.log('File found:', file);

        // Set the Content-Type header
        res.set('Content-Type', file.contentType);

        // Create a read stream and pipe it to the response
        const readstream = bucket.openDownloadStream(file._id);

        readstream.on('error', (error) => {
            console.error('Error reading stream:', error);
            return res.status(500).json({ err: 'Error retrieving file' });
        });

        readstream.pipe(res);

        readstream.on('end', () => {
            console.log('Stream ended');
        });

    } catch (err) {
        console.error('Error processing request:', err);
        return res.status(500).json({ err: 'Error processing request' });
    }
};
const saveContent = async (req, res) => {
  try {
      const { title , content1 , content2 ,tags , images, user_id, deletedImages } = req.body;

      if (!user_id) {
          return res.status(400).json({ error: 'User ID is required' });
      }

      const delete_image_ids = deletedImages ? deletedImages.map(url => url.split('/').pop()) : [];
      const image_ids = images ? images.map(url => url.split('/').pop()) : [];
      const save_image_ids = image_ids.filter(id => !delete_image_ids.includes(id));

      // Save content and update image metadata to permanent
      const existingRecord = await Question.findOne({ user_id });

      if (existingRecord) {
          // Update the existing record
          await Question.updateOne({ user_id }, { $set: { title  ,content1 , content2,tags , images: save_image_ids } });
      } else {
          // Insert a new record
          const newQuestion = new Question({ title  ,content1 , content2, user_id,tags , images: save_image_ids });
          await newQuestion.save();
      }

      const bucket = new GridFSBucket(mongoose.connection.db, {
          bucketName: 'uploads'
      });

      // Update metadata for images
      // for (const image_id of image_ids) {
      //     await bucket.rename(new mongoose.Types.ObjectId(image_id), image_id); // Ensure it's saved permanently
      // }

      // Cleanup unused temporary images
      for (const image_id of delete_image_ids) {
          try {
              await bucket.delete(new mongoose.Types.ObjectId(image_id));
              console.log(`Deleted image with id: ${image_id}`);
          } catch (error) {
              console.error(`Error deleting image with id: ${image_id}`, error);
          }
      }

      return res.status(201).json({ message: 'Content and images saved successfully!' });
  } catch (error) {
      console.error('Error processing request:', error);
      return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
    uploadImage,
    serveImage,
    saveContent
};
