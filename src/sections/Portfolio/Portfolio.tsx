import './Portfolio.scss';

function Portfolio() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-card">
        <h3>Savart Customer Application (Phase 3)</h3>
        <p>
          A customer-facing FinTech application for wealth management. Developed
          responsive UI components, integrated REST APIs, and improved
          performance and user experience using React and Next.js.
        </p>
      </div>

      <div className="project-card">
        <h3>Savart Workflow – Admin Panel (Phase 3)</h3>
        <p>
          Built an admin dashboard to manage users, customer data, and service
          tickets. Implemented role-based access, reusable components, and API
          integrations.
        </p>
      </div>

      <div className="project-card">
        <h3>Portfolio Management System (PMS)</h3>
        <p>
          Developed frontend features for managing investment portfolios,
          displaying financial data using charts, and ensuring smooth data
          visualization.
        </p>
      </div>

      <div className="project-card">
        <h3>Savart Workflow (Phase 4)</h3>
        <p>
          Enhanced the admin system with advanced workflows, custom components,
          improved performance, and better usability across devices.
        </p>
      </div>
    </section>

  )
}

export default Portfolio