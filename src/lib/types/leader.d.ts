export interface Leader {
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

export interface NewLeader {
  name: string;
  day: string;
  time: string;
  isOnline: boolean;
  location: string;
  description: string;
  img_url: string;
}
