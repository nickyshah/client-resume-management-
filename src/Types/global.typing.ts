export interface ICompany {
  id: string;
  name: string;
  size: string;
  createdAt: string;
}

export interface ICreateCompany {
  name: string;
  size: string;
}

export interface IJob {
  id: string;
  title: string;
  level: string;
  companyId: string;
  companyName: string;
  createdAt: string;
}

export interface ICreateJob {
  title: string;
  level: string;
  companyId: string;
}

export interface ICandidate {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phonenumber: string;
  coverletter: string;
  resumeUrl: string;
  jobId: string;
  jobTitle: string;
}

export interface ICreateCandidate {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  coverLetter: string;
  jobId: string;
}
