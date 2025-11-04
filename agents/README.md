# 🤖 AI Development Agents

## Overview
This directory contains specialized AI agents designed to assist with different aspects of the "Pilares de Portugal" project development. Each agent has specific expertise and responsibilities within the software development lifecycle.

## Purpose
These agents serve as intelligent assistants that can be consulted for specific tasks, providing expertise, best practices, and implementation guidance for their respective domains. They work together to ensure comprehensive coverage of all development aspects.

## Available Agents

### 🎯 [Product Manager](./product-manager.md)
**Role**: Product vision, strategy, and roadmap management  
**When to use**:
- Defining product requirements and user stories
- Prioritizing features and backlog management
- Making strategic product decisions
- Understanding user needs and market positioning
- Creating success metrics and KPIs

### 💻 [Frontend Developer](./frontend-developer.md)
**Role**: React, TypeScript, and UI implementation  
**When to use**:
- Building React components with TypeScript
- Implementing responsive designs
- Optimizing frontend performance
- Managing state and data flow
- Creating data visualizations with Recharts

### 🔧 [Backend Developer](./backend-developer.md)
**Role**: Server architecture, APIs, and data management  
**When to use**:
- Designing API endpoints and data structures
- Implementing server-side logic
- Managing databases and data persistence
- Setting up authentication and authorization
- Optimizing backend performance

### 🎨 [UX/UI Designer](./ux-ui-designer.md)
**Role**: User experience and visual design  
**When to use**:
- Creating user interfaces and experiences
- Designing visual components and layouts
- Ensuring accessibility standards
- Developing design systems and style guides
- Creating interactive prototypes

### 🚀 [DevOps Engineer](./devops-engineer.md)
**Role**: Deployment, infrastructure, and CI/CD  
**When to use**:
- Setting up deployment pipelines
- Configuring infrastructure and environments
- Implementing monitoring and alerting
- Optimizing build and deployment processes
- Managing cloud resources and costs

### 🧪 [QA Engineer](./qa-engineer.md)
**Role**: Testing strategy and quality assurance  
**When to use**:
- Creating test plans and strategies
- Writing automated tests
- Performing manual testing
- Tracking and managing bugs
- Ensuring quality standards

### 📊 [Data Analyst](./data-analyst.md)
**Role**: Data collection, analysis, and insights  
**When to use**:
- Analyzing immigration statistics
- Validating data accuracy
- Creating data models and structures
- Generating insights and reports
- Defining metrics and KPIs

### ✍️ [Technical Writer](./technical-writer.md)
**Role**: Documentation and content creation  
**When to use**:
- Writing technical documentation
- Creating user guides and tutorials
- Documenting APIs and components
- Maintaining documentation standards
- Creating release notes

## How to Use These Agents

### 1. Identify Your Need
Determine which aspect of development you need help with and select the appropriate agent based on their expertise.

### 2. Consult the Agent
Open the agent's markdown file to access their knowledge base, which includes:
- Core responsibilities and expertise
- Best practices and guidelines
- Code examples and templates
- Tools and resources
- Current project context

### 3. Apply the Guidance
Use the agent's recommendations to:
- Implement features correctly
- Follow established patterns
- Maintain consistency
- Avoid common pitfalls
- Optimize performance

### 4. Collaborate Across Agents
Many tasks require input from multiple agents. Each agent document includes collaboration points with other agents.

## Agent Collaboration Matrix

| Task | Primary Agent | Supporting Agents |
|------|--------------|-------------------|
| New Feature Development | Product Manager | Frontend, Backend, UX/UI |
| API Implementation | Backend Developer | Frontend, Data Analyst |
| UI Component Creation | Frontend Developer | UX/UI Designer, QA |
| Data Visualization | Data Analyst | Frontend, UX/UI |
| Deployment Setup | DevOps Engineer | Backend, QA |
| Testing Strategy | QA Engineer | All agents |
| Documentation | Technical Writer | All agents |
| Performance Optimization | DevOps Engineer | Frontend, Backend |
| User Research | UX/UI Designer | Product Manager, Data Analyst |

## Project Context

### Current Stack
- **Frontend**: React, TypeScript, Vite, TailwindCSS, Recharts
- **Backend**: Node.js (planned), Express/Fastify (planned)
- **Database**: PostgreSQL (planned), Redis (planned)
- **Deployment**: Vercel/Netlify
- **Testing**: Jest, React Testing Library, Cypress
- **Documentation**: Markdown, TypeDoc

### Project Goals
1. Present immigration data clearly and accurately
2. Ensure accessibility for all users
3. Maintain high performance standards
4. Provide reliable and validated information
5. Create an engaging user experience

## Best Practices

### When Working with Agents
1. **Be Specific**: Provide clear context about your task
2. **Check Prerequisites**: Ensure you have necessary information
3. **Follow Standards**: Adhere to established patterns and guidelines
4. **Document Decisions**: Record important choices and rationale
5. **Iterate**: Refine based on feedback and testing

### Cross-Functional Collaboration
1. **Communication**: Share context between relevant agents
2. **Consistency**: Maintain uniform standards across domains
3. **Integration**: Ensure smooth handoffs between specialties
4. **Quality**: Apply quality checks at each stage
5. **Documentation**: Keep all agents informed of changes

## Maintenance

### Updating Agent Knowledge
Agents should be updated when:
- New technologies are adopted
- Project requirements change
- Best practices evolve
- Lessons are learned from implementation
- New patterns are established

### Version Control
All agent files are version controlled and should be updated through pull requests with proper review.

## Quick Reference

### Common Tasks by Agent

**Need to add a new chart?**
→ Consult: Data Analyst → UX/UI Designer → Frontend Developer

**Setting up deployment?**
→ Consult: DevOps Engineer → Backend Developer → QA Engineer

**Improving performance?**
→ Consult: DevOps Engineer → Frontend Developer → Backend Developer

**Adding new feature?**
→ Consult: Product Manager → UX/UI Designer → Frontend/Backend → QA

**Writing documentation?**
→ Consult: Technical Writer → Relevant technical agents

## Support

For questions about using these agents or suggestions for improvements, please:
1. Check the individual agent documentation
2. Review the collaboration guidelines
3. Consult multiple agents for complex tasks
4. Document new patterns for future reference

---

*These AI agents are designed to accelerate development and maintain high quality standards throughout the "Pilares de Portugal" project lifecycle.*
