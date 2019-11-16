import mongoose from 'mongoose';

const DocumentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateofbirth: {
    type: Date,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  faculdade: {
    type: String,
    required: true,
  },
  shift: {
    type: String,
    required: true,
  },
  cpf: {
    type: Number,
    required: true,
  },
});
