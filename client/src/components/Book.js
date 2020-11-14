import React from 'react'
import {useLocation} from 'react-router-dom'
import api from '../util/api';

export default function Book(props) {
  const location = useLocation();

  const saveBtnClick = () => {
    const book = {
      title:props.info.title,
      authors:props.info.authors,
      description:props.info.description,
      image:props.info.imageLinks.thumbnail,
      infoLink:props.info.infoLink,
      publisher:props.info.publisher,
      publishedDate:props.info.publishedDate,
      date:Date.now()
    }
    api.add(book).then(res => {
      console.log("saved")
    }).catch(err => console.log(err))
  }
  
  

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-2">
          <img src={props.info.image || props.info.imageLinks.thumbnail} className="card-img" alt="..." />
        </div>
        <div className="col-md-9">
          
          <div className="card-body">
            <h5 className="card-title">{props.info.title}</h5>
            <h6 className="card-title">{props.info.authors.join(", ")}</h6>
            <p className="card-text"><small className="text-muted">{props.info.publishedDate} | {props.info.publisher}</small></p>
            <p className="card-text">{props.info.description}</p>

          </div>
        </div>
          <div className="col-md-1">
          <a className="btn btn-primary btn-block" target="blank" href={props.info.infoLink} role="button">View</a>
          {location.pathname==="/search" && <button type="button" className="btn btn-success btn-block" onClick={saveBtnClick}>Save</button>}
          {location.pathname==="/saved" && <button type="button" className="btn btn-danger btn-block" onClick={() => props.onDelete(props.info._id)}>Delete</button>}
          </div>
      </div>
    </div>
  )
}
