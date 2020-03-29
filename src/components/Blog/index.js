import React from "react";
import "./styles.scss";

function Blog(props) {
  return (
    <div className="columns is-centered is-variable is-5">
      {props.items.map((item, index) => (
        <div className="Blog__column column" key={index}>
          <div
            className={
              "Blog__card card" +
              (item.emphasized === true ? " emphasized" : "")
            }
          >
            <div className="Blog__card-content card-content">
              <div className="Blog__title has-text-weight-bold">
                <img src={item.image} alt={item.title} />
              </div>
              <h1 className="title is-4 is-spaced has-text-dark">{item.title}</h1>
              <p className="Blog__description">{item.description}</p>
              <button
                className="Blog__button button is-medium is-primary"
                onClick={() => props.onChoosePlan(item.id)}
              >
                {props.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
