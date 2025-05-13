import mongoose from "mongoose";

export interface MongooseLeader extends mongoose.Document {
  id: string;
  createdAt: string;
  name: string;
  day: string;
  time: string;
  isOnline: boolean;
  location: string;
  description: string;
  img_url: string;
  is_available: boolean;
}

const LeaderSchema = new mongoose.Schema<MongooseLeader>({
  name: {
    /* The name of the leader */
    type: String,
    required: [true, "Please provide a name for this leader."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  day: {
    /* The day the leader is available */
    type: String,
    required: [true, "Please specify the day for this leader."],
    maxlength: [20, "Day cannot be more than 20 characters"],
  },
  time: {
    /* The time the leader is available */
    type: String,
    required: [true, "Please specify the time for this leader."],
    maxlength: [20, "Time cannot be more than 20 characters"],
  },
  isOnline: {
    /* Whether the leader is online */
    type: Boolean,
    required: [true, "Please specify if the leader is online."],
  },
  location: {
    /* The location of the leader */
    type: String,
    required: [true, "Please provide the location for this leader."],
    maxlength: [100, "Location cannot be more than 100 characters"],
  },
  description: {
    /* Description of the leader's group */
    type: String,
    maxlength: [500, "Description cannot be more than 500 characters"],
  },
  img_url: {
    /* URL to the leader's image */
    type: String,
    required: [true, "Please provide an image URL for this leader."],
  },
  is_available: {
    /* Whether the leader is available */
    type: Boolean,
    required: [true, "Please specify if the leader is available."],
  },
});

export default mongoose.models.Leader ||
  mongoose.model<MongooseLeader>("Leader", LeaderSchema);
