import React from 'react'

export const Menubar = ({filter,menud}) => {
    return(
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menud.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filter(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
      <br/>
    </>
    )
}
