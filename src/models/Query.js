import mongoose from 'mongoose';

const QuerySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    company: {
      type: String,
    },
    phone: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
    service: {
      type: String,
    },
    status: {
      type: String,
      enum: ['new', 'in-progress', 'resolved'],
      default: 'new',
    }
  },
  { timestamps: true }
);

export default mongoose.models.Query || mongoose.model('Query', QuerySchema);
