StreamForge API: Backend orchestration layer for the StreamForge ecosystem.

StreamForge API is responsible for coordinating contribution data, managing project configuration, and exposing structured endpoints for downstream services and frontend clients.

🎯 Purpose

To provide a scalable and modular backend that:

Interfaces with StreamForge Core

Exposes contribution scoring data

Manages ecosystem configuration

Handles authentication and authorization

Orchestrates reward calculation workflows

🧱 Responsibilities

StreamForge API handles:

HTTP routing

Authentication

Project configuration

Data persistence

External service coordination

It does not handle:

Event indexing logic (handled by StreamForge Core)

Frontend rendering (handled by StreamForge Web)

🛠️ Tech Stack

NestJS

Node.js

TypeScript

Modular architecture (planned)

🚧 Status

Initial setup in progress.
