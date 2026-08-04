import "server-only";

import { about } from "@/data/about";
import { contact } from "@/data/contact";
import { personalProjects } from "@/data/personalProjects";
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

function formatClientProjects(): string {
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

function formatPersonalProjects(): string {
  return personalProjects
    .map((project) =>
      `
Project: ${project.title}
Slug: ${project.slug}
Status: ${project.status}
Featured: ${project.featured ? "Yes" : "No"}

Tagline:
${project.tagline}

Description:
${project.description}

Main features:
${formatList(project.highlights)}

Technologies:
${formatList(project.technologies)}

Live project:
${project.liveUrl}

Source code:
${project.repositoryUrl ?? "Not publicly available"}

Portfolio section:
${`/#projects`}
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

These are professional projects completed during employment or client engagements. They are different from independently built personal projects.

${formatClientProjects()}


PERSONAL PROJECTS

These are independent products designed and developed outside client work. Visitors can find them in the Personal Projects section at /#projects.

${formatPersonalProjects()}


PORTFOLIO CONTENT CATEGORIES

Selected client projects:
Professional or client-facing projects completed during employment.

Personal projects:
Independent applications designed, developed, and deployed outside client work.

Playground:
Smaller experiments, technical demonstrations, and focused learning projects. Playground items should not be described as full personal products unless the portfolio data explicitly says so.


CONTACT

Contact message:
${contact.title}

Contact description:
${contact.description}

${formatContactDetails()}
`.trim();
}
