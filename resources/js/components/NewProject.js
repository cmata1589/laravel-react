import axios from 'axios'
import React, { Component } from 'react'

class NewProject extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      errors: []
    }

    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleCreateNewProject = this.handleCreateNewProject.bind(this)
    this.hasErrorFor = this.hasErrorFor.bind(this)
    this.renderErrorFor = this.renderErrorFor.bind(this)
  }

  handleFieldChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCreateNewProject (event) {
    event.preventDefault()

    const { history } = this.props

    const project = {
      name: this.state.name,
      description: this.state.description
    }

    axios
      .post('/api/projects', project)
      .then(response => {
        // redirect to the homepage
        history.push('/')
      })
      .catch(error => {
        this.setState({
          errors: error.response.data.errors
        })
      })
  }

  hasErrorFor (field) {
    return !!this.state.errors[field]
  }

  renderErrorFor (field) {
    if (this.hasErrorFor(field)) {
      return (
        <span className='invalid-feedback'>
          <strong>{this.state.errors[field][0]}</strong>
        </span>
      )
    }
  }

  render () {
    return (
      <div className='container'>

            <h2 className="title is-2">Create a New Project</h2>

              <div className='card-body'>

                <form onSubmit={this.handleCreateNewProject}>

                  <div className='form-group'>
                  <h4 className="subtitle is-4">Project Name</h4>
                    <input
                      id='name'
                      type='text'
                      className={`input is-primary ${this.hasErrorFor('name') ? 'is-danger' : ''}`}
                      name='name'
                      placeholder='Project Name'
                      value={this.state.name}
                      onChange={this.handleFieldChange}
                    />
                    {this.renderErrorFor('name')}
                  </div>

                  <div className='form-group'>
                  <h4 className="subtitle is-4">Project Description</h4>
                    <textarea
                      id='description'
                      className={`input is-info ${this.hasErrorFor('description') ? 'is-danger' : ''}`}
                      name='description'
                      rows='10'
                      placeholder='Description'
                      value={this.state.description}
                      onChange={this.handleFieldChange}
                    />

                    {this.renderErrorFor('description')}
                  </div>

                  <button className='button is-primary'>Create</button>
                </form>

              </div>
      
      </div>
    )
  }
}

export default NewProject