export interface CandidateProfile {
  id: string;
  userId: string;
  tenantId: string;
  cvUrl?: string;
  aiMatch?: any;
  videoPitch?: string;
  user: {
    id: string;
    email: string;
    role: string;
  };
}
