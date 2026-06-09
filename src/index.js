export const project = {
  slug: "ai-sales-lead-agent",
  title: "AI Sales Lead Agent",
  description: "Agent that qualifies sales leads and prepares outreach notes.",
  features: [
  "Lead enrichment",
  "Fit scoring",
  "Objection notes",
  "Email draft",
  "CRM handoff",
  "Activity audit"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
