# Playwright Quick Start Guide

This guide will help you get started with Playwright using npm.

## Prerequisites

- Node.js installed (version 12 or higher)
- npm (Node Package Manager) installed

## Installation

To start using Playwright, you can initialize a new npm project and install Playwright as a dependency. Run the following commands in your terminal:

```bash
npm init -y  # Initialize a new npm project
npm install playwright@latest  # Install Playwright

Verify Installation- npm playwright -v

to run tests - npx playwright test

to see tests reports - npx playwright show-report

to run the number of tests - npx playwright test --workers 6

to run test for specific file -  npx playwright test .\tests\example.specs.ts

added script in package.json for test run - npm test

runs for specific browser- npx playwright test --project=chromium
```
