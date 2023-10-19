import { Fragment } from 'react'

const Input = props => {
  return (
    <Fragment>
      <div className={props.styles}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} />
      </div>
    </Fragment>
  )
}

export default Input
