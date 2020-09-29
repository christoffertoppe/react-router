import React from 'react';
//import ReactDOM from 'react-dom';
//import {Table} from 'react-bootstrap';





const List = ({events}) => {

  let listItems = () => events.map((note) =>
      <li key={note.id}> { note.content } { note.date } </li>

);

  return (
      <div className="List">
        <h2>Lista tapahtumista</h2>
        <ul>{listItems()}</ul>
      </div>
  )
}

export default List;




/*
const List = () => {

      return(
          <div className="container">
              {/* A JSX comment */
/*
}

            { <div>
                <p>Valinta 2.</p>
            </div>
            }



            <Table striped>
            <tbody>
                <tr>
                    <td>
                        <p>1. rivi</p>
                    </td>
                    <td>
                        <p>kdfjhfdkjhsfdkjh</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>2. rivi</p>
                    </td>
                    <td>
                        <p>jhgkjdkgjgdkjhdgk</p>
                    </td>
                </tr>
                <tr>
                  <td>
                    <p>2. rivi</p>
                  </td>
                  <td>
                    <p>jhgkjdkgjgdkjhdgk</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>2. rivi</p>
                  </td>
                  <td>
                    <p>jhgkjdkgjgdkjhdgk</p>
                  </td>
                </tr>
            </tbody>
            </Table>

        </div>
    )
}
*/
/*

export default List;

*/