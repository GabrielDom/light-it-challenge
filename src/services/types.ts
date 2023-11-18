export interface Patient {
  createdAt?: Date;
  name: string;
  avatar?: string;
  description: string;
  website: string;
  id?: string;
}

// export interface Patient {
//   createdAt: Date | undefined;
//   name: string | undefined;
//   avatar: string | undefined;
//   description: string | undefined;
//   website: string | undefined;
//   id: string | undefined;
// }

export interface PatientUpdate {
  createdAt?: Date;
  name?: string;
  avatar?: string;
  description?: string;
  website: string;
  id?: string;
}
