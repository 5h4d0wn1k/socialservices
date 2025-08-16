// Centralized data exports for the entire website
// This file serves as the main entry point for all website content

// Home page data
export * from './homeData';

// Projects data
export * from './projectsData';

// Team data
export * from './teamData';

// Volunteer data
export * from './volunteerData';

// Contact data
export * from './contactData';

// Shared/common data
export * from './sharedData';

// Re-export commonly used types and interfaces
export type { Project } from './projectsData';
export type { TeamMember } from './teamData';
export type { VolunteerOpportunity, VolunteerRegistration } from './volunteerData';
export type { ContactDepartment, ContactLocation, ContactForm } from './contactData'; 