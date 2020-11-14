import React from 'react'

export default function Book(props) {

  const saveBtnClick = () => {
    console.log("saved")
  }

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
      <div className="col-md-2">
        <img src={props.image} className="card-img" alt="..."/>
      </div>
      <div className="col-md-10">
        <button type="button" className="btn btn-success float-right" onClick={saveBtnClick}>Save</button>
        <a className="btn btn-primary float-right" target="blank" href={props.infoLink} role="button">View</a>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-title">{props.authors.join(", ")}</h6>
          <p className="card-text"><small className="text-muted">{props.publisher}</small></p>
          <p className="card-text">{props.description}</p>
          
        </div>
      </div>
    </div>
  </div>
  )
}
