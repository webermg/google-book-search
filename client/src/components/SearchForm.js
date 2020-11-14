import React from 'react'

export default function SearchForm(props) {

  return (
    <form className="mb-3" onSubmit={props.onSubmit}>
      <div className="form-group row mb-3">
        <label className='col-sm-1 col-form-label' htmlFor="bookSearchForm"></label>
        <input name="search" value={props.value} type="text" className="form-control col-sm-9" id="bookSearchForm" onChange={props.onChange}/>
        <button type="submit" className="btn btn-primary col-sm-1">Search</button>
      </div>
    </form>
  )
}
