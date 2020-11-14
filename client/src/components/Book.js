import React from 'react'
import {useLocation} from 'react-router-dom'

export default function Book(props) {
  const location = useLocation();

  const saveBtnClick = () => {
    console.log("saved")
  }
  
  const delBtnClick = () => {
    console.log("deleted")
  }

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-2">
          <img src={props.info.imageLinks.thumbnail} className="card-img" alt="..." />
        </div>
        <div className="col-md-10">
          {location.pathname==="/search" && <button type="button" className="btn btn-success float-right" onClick={saveBtnClick}>Save</button>}
          {location.pathname==="/saved" && <button type="button" className="btn btn-danger float-right" onClick={saveBtnClick}>Delete</button>}
          <a className="btn btn-primary float-right" target="blank" href={props.info.infoLink} role="button">View</a>
          <div className="card-body">
            <h5 className="card-title">{props.info.title}</h5>
            <h6 className="card-title">{props.info.authors.join(", ")}</h6>
            <p className="card-text"><small className="text-muted">{props.info.publishedDate} | {props.info.publisher}</small></p>
            <p className="card-text">{props.info.description}</p>

          </div>
        </div>
      </div>
    </div>
  )
}
