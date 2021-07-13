import React from 'react'

function Card(props) {

  return (
    <div>
      <div key={props.index} className="items">
        <div className="container">
          <div className="row-6">
            <div className="col-lg-12">
              <div className="card card-margin">
                <div className="card-header no-border">
                  <h5 className="card-title">{props.emoji.title}</h5>
                </div>
                <div className="card-body pt-0">
                  <div className="widget-49">
                    <div className="widget-49-title-wrapper">
                      <div className="widget-49-date-primary">
                        <span className="widget-49-date-day">{props.emoji.symbol}</span>
                      </div>
                      <div className="widget-49-meeting-info">
                        <h5 className="card-title">{props.emoji.title}</h5>
                      </div>
                    </div>
                    <ol className="widget-49-meeting-points">
                      <span>{props.emoji.keywords}</span>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
