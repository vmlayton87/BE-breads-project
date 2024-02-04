const React = require('react')
const Default = require('./layouts/default')


function Show ({bread, otherBreads}) {
  console.log(`other breads inside show return: ` , otherBreads)
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>
        <p>
            and it
            {
                bread.hasGluten 
                ? <span> does </span>
                : <span> does NOT </span>
            }
            have gluten.
        </p>
        <img src={bread.image} alt={bread.name} />
        <p>{bread.getBakedBy()}</p>
        <p>Other breads made by {bread.baker}: </p>
        

        <li><a href="/breads">Go Home</a></li>
        
        <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>

        <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
          <input type="submit" value="DELETE"/>
        </form>
      </Default>
    )
}

module.exports = Show
