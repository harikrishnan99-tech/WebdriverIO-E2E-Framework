```sh {"id":"01J62M6AB6JG7SFM2VGD8M3AD4"}
# Web Testing Framework

This framework supports both API and UI testing, with features including reporting, containerization, and CI/CD support.

## Setup

1. Clone the repository
2. Run `npm install`
3. Copy `.env.example` to `.env` and update the values

## Running Tests

- API Tests: `npm run test:api`
- UI Tests: `npm run test:ui`
- Generate Report: `npm run report`

## Docker

- Build: `npm run docker:build`
- Run Tests: `npm run docker:test`

## CI/CD

The framework includes configurations for GitHub Actions and GitLab CI.

For more details, see the CI configuration files.
```