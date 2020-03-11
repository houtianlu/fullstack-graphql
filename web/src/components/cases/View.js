// Imports
import React, { useEffect,  useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// App Imports
import { routes } from '../../setup/routes'
import { get, getList } from './api/actions'
import Loading from '../common/Loading'
import { create } from './api/actions'
import { messageShow, messageHide } from '../common/api/actions'


// Component
const View = ({ match: { params: { id } } }) => {
  // state
  const { isLoading, item } = useSelector(state => state.thought)
  const [isSubmitting, isSubmittingToggle] = useState(false)
  const [curThought, setThought]= useState({ name: '', thought: '' })
  const dispatch = useDispatch()

  // on mount/update
  useEffect(() => {
    dispatch(get(id))
  }, [])

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


  // render
  return (
    <div>
      <h1>Case</h1>

      <p>
        <Link to={routes.cases.list}>Back</Link>
      </p>

      {/* Single thought */}
      {
        isLoading
          ? <Loading message="loading thought details..."/>
          : item && item.id > 0
            ?
            <form onSubmit={onSubmit}>
            <input
              name="name"
              placeholder="Name"
              value={curThought.name}
              onChange={onChange}
            />
            <br />
            <input
              name="thought"
              placeholder="thought"
              value={curThought.thought}
              onChange={onChange}
            />
            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
            >
            Update
            </button>
            </form>
            : <p>Thought does not exists.</p>
      }
    </div>
  )
}


export default View
