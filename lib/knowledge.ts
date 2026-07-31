import "server-only";

import { about } from "@/data/about";
import { contact } from "@/data/contact";
import { profile } from "@/data/profile";
import { work } from "@/data/work";
import { workExperience } from "@/data/workExperience";

function formatList(items: readonly string[]): string {
  return items.map((item) => `- ${item}`).join("\n");
}

function formatWorkExperience(): string {
  return workExperience
    .map((experience) =>
      `
Company: ${experience.company}
Role: ${experience.role}
Employment type: ${experience.employmentType}
Duration: ${experience.duration}
Location: ${experience.location}
Technologies:
${formatList(experience.technologies)}
`.trim()
    )
    .join("\n\n");
}

function formatProjects(): string {
  return work
    .map((project) =>
      `
Project: ${project.company}
Title: ${project.title}
Employer: ${project.employer}
Role: ${project.role}
Category: ${project.category}
Duration: ${project.duration}
Featured: ${project.featured ? "Yes" : "No"}

Overview:
${project.overview}

Contributions:
${formatList(project.contributions)}

Frontend technologies:
${formatList(project.technologies.frontend)}

Architecture and engineering areas:
${formatList(project.technologies.architecture)}

Tools and integrations:
${formatList(project.technologies.tools)}
`.trim()
    )
    .join("\n\n---\n\n");
}

function formatContactDetails(): string {
  const socialLinks = contact.socials
    .map((social) => `- ${social.name}: ${social.href}`)
    .join("\n");

  return `
Email: ${contact.email}
Location: ${contact.location}

Social links:
${socialLinks}
`.trim();
}

export function getPortfolioKnowledge(): string {
  return `
PORTFOLIO OWNER

Name: ${profile.name}
Professional title: ${profile.title}

Professional summary:
${profile.description}

Footer tagline:
${profile.footerTagline}

Core technology stack:
${formatList(profile.techStack)}


ABOUT

Section title: ${about.title}

Introduction:
${about.intro}

Professional highlights:
${formatList(about.highlights)}


WORK EXPERIENCE

${formatWorkExperience()}


SELECTED CLIENT PROJECTS

${formatProjects()}


CONTACT

Contact message:
${contact.title}

Contact description:
${contact.description}

${formatContactDetails()}
`.trim();
}
