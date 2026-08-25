# Résumé Tabs Verification

The live preview rendered four accessible tab buttons with IDs `resume-tab-education`, `resume-tab-experience`, `resume-tab-skills`, and `resume-tab-awards`.

Interaction checks completed:

- Skills tab switches the panel to Preventative Cardiology, Interventional Care, Patient Communication, and Care Coordination.
- Experience tab switches the panel to Consultant Cardiologist, Clinical Cardiologist, Cardiology Fellow, and Resident Physician.
- Awards tab switches the panel to Patient Care Excellence Award, Clinical Research Distinction, Rising Physician Award, and Graduation with Distinction.
- Active state keeps the cobalt text and underline treatment, while the other tabs remain muted.
- The panel preserves the two-column timeline layout on desktop and uses distinct tab-specific content.

`pnpm check` passed after the implementation.
