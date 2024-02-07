const React = require('react')
const Default = require('./layouts/default.jsx')

function Index ({breads, bakers, title}) {
    return (
      <Default title={title}>
        <h2>Welcome to the main list</h2>
        <h3>Bakers</h3>
        <ul>
            {
                bakers.map((baker)=>{
                    return (
                        <li key={baker._id}>
                            <a href={`/bakers/${baker._id}`}>{baker.name}</a>
                        </li>
                    )
                })
            }
        </ul>
  {/* This is a JSX comment. */}
  {/* <p>I have {breads[0].name} bread!</p> */}
        <h3>Breads</h3>
        <ul>
            {
                breads.map((bread, index)=>{
                    return (
                        <li key={index}>
                            <a href={`/breads/${bread._id}`}>
                                {bread.name}
                            </a>
                            {/* <ul><li>{bread.getBakedBy()}</li></ul> */}
                        </li>
                    )
                })
            }
        </ul>
        <div className="newButton">
            <a href="/breads/new"><button>Add a new bread</button></a>
        </div>

      </Default>
    )
}

module.exports = Index
