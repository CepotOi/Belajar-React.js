import React, { Component } from 'react'

class Form extends Component {
    intialState = {
        name: '',
        job: '',
    }
    state = this.intialState

    handelChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.intialState)
    }

    render() {
        const { name, job } = this.state;

        return (
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handelChange} />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handelChange} />
                <input type="button" value="submit" onClick={this.submitForm} />
            </form>
        );
    }

}
export default Form;