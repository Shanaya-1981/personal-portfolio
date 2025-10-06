# Personal Portfolio — Design Document

**Author:** Supriya Tiwari  
**Class:** CS 5610 —> Web Development, Northeastern University  
**Date:** October 2025

---

## 1. Project Description

I'm building a personal portfolio website to showcase my experience as an API Analyst and my transition into web development. The site uses HTML5, CSS3, and JavaScript ES6 modules—no frameworks or libraries.

**My Goals:**
- Show my professional experience and technical skills
- Display projects I've completed
- Make it easy for recruiters to contact me

**Features I Built:**
- Minimalist design with #EBB background and white text
- Skills organized in three categories
- Experience timeline showing my work history
- Projects section with detailed descriptions
- Dynamic greeting that changes based on time of day
- Mobile-responsive layout using Flexbox

---

## 2. User Personas

**Recruiter:** Needs to quickly assess my skills and experience. Uses mobile to review portfolios during commute.

**Fellow Developer:** Looking for collaboration opportunities. Wants to see real projects and clean code.

**Hiring Manager:** Evaluating candidates with 20+ years of experience. Values authenticity and attention to detail.

---

## 3. User Stories

- As a recruiter, I need to scan technical skills quickly so I can match candidates to job requirements.

- As a developer, I want to see actual projects with tech stacks so I can evaluate collaboration potential.

- As a hiring manager, I need work history details to assess real-world experience.

- As any visitor, I want easy contact access without endless scrolling.

---

## 4. Design Layout

### Homepage
- Header: My name (left), navigation links (right)
- Hero: "Hi, I'm Supriya" + role + tagline + buttons
- Skills: Three cards (Programming, Web Development, Creative)
- Contact: Email with description
- Footer: Copyright + dynamic greeting

### About Page
- Profile image (circular) + bio text
- Experience: Two work roles in cards
- Projects: Three project cards with details

---

## 5. Technical Details

**Visual Design:**
- Background: #EBB (warm beige)
- Text: White for all content
- Font: Playfair Display serif
- Spacing: Generous padding (8rem for hero section)
- Buttons: White border, transparent background, hover effect

**Layout:** Flexbox and CSS Grid  
**Original Feature:** Time-based greeting (morning/afternoon/evening/night)  
**Responsive:** Works on mobile and desktop  
**Code Quality:** W3C validated, ESLint compliant