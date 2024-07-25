export type PartnerMatch = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  compatibilityScore: number | null;
  user1: string | null;
  user2: string | null;
};
