import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <body>
      <h1>Sport Calendar for 2023</h1>
      {/* Create form container for user to input data */}
      <div className="container">
        <div>
          <p>Please fill the fields</p>
          <p>
            Time: <input />
          </p>
          <p>
            Date: <input />
          </p>
          <p>
            Time: <input />
          </p>
          <p>
            Sport: <input />
          </p>
          <p>
            Team: <input />
          </p>
          {/* User can press Submit button after filling the form  */}
          <button>Submit</button>
        </div>
      </div>
      <div>
        {/* Table for user can see after filling the form for Date, Day, Event, Teams */}
        <table>
          <tr>
            <td>#</td>
            <td>Date</td>
            <td>Day</td>
            <td>Event</td>
            <td>Teams</td>
          </tr>
          <tr>
            <td></td>
            <td></td>

            <td>
              <form>
                <label></label>
              </form>
            </td>
            <td></td>
          </tr>
        </table>
      </div>
    </body>
  );
}
