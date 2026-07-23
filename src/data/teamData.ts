// ── Re-export shim for Vercel deployment compatibility ──
// This file was originally named teamData.ts but was renamed to team.ts.
// This shim ensures any deployment cache referencing the old filename still resolves.
export * from './team';

