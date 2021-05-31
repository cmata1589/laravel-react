 import axios from 'axios'
    import React, { Component } from 'react'
    import { Link } from 'react-router-dom'

    class ProjectsList extends Component {
      constructor () {
        super()
        this.state = {
          projects: []
        }
      }

      componentDidMount () {
        axios.get('/api/projects').then(response => {
          this.setState({
            projects: response.data
          })
        })
      }

      render () {
        const { projects } = this.state
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='card'>
                  <div className='card-header-title'>All projects</div>
                  <div className='card-content'>
                    <div className='content'>
                   

                    <table class="table">
                      <thead>
                        <tr>
                          
                          <th><abbr title="Project Name">Project Name</abbr></th>
                          <th><abbr title="Description">Description</abbr></th>
                          <th><abbr title="Number of tasks"># Tasks</abbr></th>
                        </tr>
                      </thead>
                      {projects.map(project => (
                      <thead>
                        <tr>
                          <th><Link
                          className=''
                          to={`/${project.id}`}
                          key={project.id}
                        >
                          {project.name}
                          
                        </Link></th>
                          <th>{project.description}</th>
                          <th>{project.tasks_count}</th>
                        </tr>
                      </thead>

                      ))}
                      </table>

                      <Link className='button is-light mb-3' to='/create'>
                      Create new project
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }


    export default ProjectsList