import React, { Component } from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import Context from '../Context'
import './AddFolder.css'

export default class AddFolder extends Component {
  static contextType = Context;
  
  render() {
    return (
      <section className='AddFolder'>
        <h2>Create a folder</h2>
        <NotefulForm>
          <div className='field'>
            <label htmlFor='folder-name-input'>
              Name
            </label>
            <input type='text' id='folder-name-input' />
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add folder
            </button>
          </div>
        </NotefulForm>
      </section>
    )
  }
}
