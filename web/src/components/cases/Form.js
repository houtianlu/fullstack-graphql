import React , { useState } from "react";
import { useDispatch } from 'react-redux'
import { create } from './api/actions'
import { messageShow, messageHide } from '../common/api/actions'

const Form = ({id}) => {
  console.log('thought is ' + id);
  const [isSubmitting, isSubmittingToggle] = useState(false)
  const [curThought, setThought]= useState({ name: '123', thought: '321' })
  const dispatch = useDispatch()
  // on submit
  const onSubmit = async event => {
    event.preventDefault()

    console.log('curThought name is ' + curThought.name);
    // Hide old messages
    dispatch(messageHide())

    dispatch(messageShow('Creating case, please wait...'))

    isSubmittingToggle(true)

    // Call API
    try {
      const { data } = await create(curThought)

      if(data.data && data.data.thoughtCreate) {
        setThought({
          name: '',
          thought: '',
        })

        dispatch(messageShow('Case created successfully.'))
      }
    } catch (error) {
      dispatch(messageShow(`Error ${ error.message }. Please try again.`))
    }
  }

  // on change
  const onChange = event => {
    setThought({ ...curThought, [event.target.name]: event.target.value})
  }
    return (
      <form onSubmit={onSubmit}>
      <input
        name="name"
        placeholder="Name"
        type="text"
        value={curThought.name}
        onChange={onChange}
      />
      <br />
      <input
        name="thought"
        placeholder="thought"
        type="text"
        value={curThought.thought}
        onChange={onChange}
      />
      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
      >
      Save
      </button>
      </form>
    )
}
export default Form
