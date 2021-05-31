import axios from 'axios'
    import React, { Component } from 'react'
import Task from './Task'

    class SingleProject extends Component {
      constructor (props) {
        super(props)
        this.state = {
          project: {},
          tasks: [],
          title: '',
          errors: []
        }
        this.handleMarkProjectAsCompleted = this.handleMarkProjectAsCompleted.bind(this)
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleAddNewTask = this.handleAddNewTask.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)

      }

      handleMarkTaskAsCompleted (taskId) {
        axios.put(`/api/tasks/${taskId}`).then(response => {
          this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => {
              return task.id !== taskId
            })
          }))
        })
      }

      handleFieldChange (event) {
        this.setState({
          title: event.target.value
        })
      }
      handleAddNewTask (event) {
        event.preventDefault()
  
        const task = {
          title: this.state.title,
          project_id: this.state.project.id
        }
  
        axios.post('/api/tasks', task)
          .then(response => {
            // clear form input
            this.setState({
              title: ''
            })
            // add new task to list of tasks
            this.setState(prevState => ({
              tasks: prevState.tasks.concat(response.data)
            }))
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

      handleMarkProjectAsCompleted () {
        const { history } = this.props

        axios.put(`/api/projects/${this.state.project.id}`)
        .then(response => history.push('/'))

      }

      componentDidMount () {
        const projectId = this.props.match.params.id

        axios.get(`/api/projects/${projectId}`).then(response => {
          this.setState({
            project: response.data,
            tasks: response.data.tasks
          })
        })
      }

      render () {
        const { project, tasks } = this.state

        return (
            <div className="card">
                <div className="card-header-title">{project.name}</div>
                <div className="card-body">
                    <p>{project.description}</p>
                </div>
                <button className="button is-success">Mark as completed</button>

                <hr />

                <h2 class="title is-2">Tasks</h2>

                <ul className="is-flex is-justify-content-center">
                <table class="table ">
                    {tasks.map((task) => (
                        
                            <tr>
                                <th>
                                    {" "}
                                    <Task title={task.title} />
                                </th>
                                <th>
                                    {" "}
                                    <button
                                        className="button is-link"
                                        onClick={this.handleMarkTaskAsCompleted.bind(
                                            this,
                                            task.id
                                        )}
                                    >
                                        Mark as completed
                                    </button>
                                </th>
                            </tr>
                        
                    ))}
                 </table>
                </ul>
               
                <div className="level">
                    <div className="level-item">
                        <form onSubmit={this.handleAddNewTask}>
                            <div>
                                <input
                                    type="text"
                                    name="title"
                                    className={`input ${
                                        this.hasErrorFor("title")
                                            ? "is-danger"
                                            : ""
                                    }`}
                                    placeholder="New Task title"
                                    value={this.state.title}
                                    onChange={this.handleFieldChange}
                                />
                                <div className="input-group-append">
                                    <button className="button is-link mt-4 mb-4">
                                        Add
                                    </button>
                                </div>
                                {this.renderErrorFor("title")}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
      }
    }

    export default SingleProject