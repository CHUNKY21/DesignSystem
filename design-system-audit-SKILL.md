---
name: design-system-audit
description: Audits a project's actual code against its own design system spec. Use when asked to check, audit, or verify whether a codebase follows its design system, or to find drift between docs/design-system.md and the components that were actually built. Produces a written audit report and can fix what it finds. Invoke with /design-system-audit.
---

# Design System Audit

You are checking whether real code matches the design system it claims to follow. A design system is only as good as its enforcement. This skill finds where the two have drifted apart, states what's wrong in plain terms, and can fix it once the designer says go.

Work through the steps in order. Do not skip to fixing before you've read the spec and reported what you found.

---

## Step 1: Read the Design System Spec

Find and read the project's design system source of truth. Check, in this order: `docs/design-system.md`, `docs/design.md`, then CLAUDE.md for a pointer to wherever it actually lives. If none exist, stop and tell the designer there's no design system spec to audit against yet, point them to the `design-system-generator` skill instead of guessing at what "correct" would mean.

Once found, note every defined token: colors (and their tiers, if primitive/semantic/component tiers exist), typography scale, spacing scale, radius values, shadow/elevation values, and any documented component states or behavior patterns (hover, disabled, loading, error).

Confirm you've read it by stating the file path and a one-line summary of what it defines, then move to Step 2.

---

## Step 2: Scan the Codebase for Drift

Search the actual component code (not the design system file itself) for these five drift patterns. Be specific: file and line, not a general impression.

**1. Hardcoded values that should be tokens.** A raw hex code, an arbitrary pixel value, an inline color, where a token already exists for that purpose. Example: `padding: 13px` in a component when the spacing scale defines 12px and 16px, nothing in between.

**2. Near-duplicate values that should be one token.** Two components using `#1F6FEB` and `#1F6FEC`, one pixel off, clearly meant to be the same color but drifted through separate edits.

**3. Missing states.** A component the design system documents as having hover, disabled, loading, or error states, where the actual code only implements the default appearance. Check against whatever the spec says the component should do, not just what it currently renders.

**4. Undocumented components.** A component that exists in code but was never added to the design system spec or Storybook. This is drift in the other direction: real, working code that the system doesn't know about yet.

**5. Naming inconsistency.** A token or component named one thing in the spec and referenced differently in code (`color-primary` in the spec, `primaryColor` or `brandBlue` in the actual CSS/Tailwind config). This breaks the link between the two files that's supposed to keep them in sync.

Read the actual component files, the Tailwind config or CSS variables file, and Storybook stories if they exist. Don't rely on file names or folder structure alone, open the files.

---

## Step 3: Write the Audit Report

Produce a report, in plain language, organized by drift type (the five categories above), not by file. For each finding:

- What's wrong, specifically (file, line, the actual value found)
- What it should be instead, per the spec
- Why it matters in one sentence (never skip this: "inconsistent" alone isn't useful, say what breaks because of it)

Save the report to `docs/design-system-audit.md`, dated. Don't overwrite a previous audit, append a new dated section so drift over time is visible.

If the audit finds nothing wrong, say so plainly. A short "no drift found" report is a real result, not a failure to find something.

---

## Step 4: Offer to Fix, Don't Fix Automatically

Present the findings to the designer first. Ask which categories they want fixed now versus logged for later. Common judgment calls that need a human, not an automatic fix:

- A hardcoded value that shows up once might be a genuine one-off, not drift, confirm before turning it into a new token.
- An undocumented component might be intentionally experimental (a branch, a prototype), not ready to formalize into the system yet.
- A naming mismatch might mean the spec is stale, not the code, check which one is actually right before "fixing" the wrong side.

Once the designer confirms what to fix, make the changes and note in the audit report what was fixed automatically versus left for a manual decision.

---

## What this skill does not do

It does not judge whether the design system itself is good, only whether the code follows the one that exists. It does not run accessibility checks (that's the separate `accessibility-check` skill) or visual regression testing. It is a consistency check between a written spec and real code, nothing more, nothing less.
