import React, { useState, Fragment } from "react";
const List = () => {
  //const { date, title, person } = props;

  const data = [
    {
      date: "dsdddsd",
      title: "fsfsf",
      person: "sfsfsf"
    },
    {
        date: "sfsdhfs",
        title: "fsfsf",
        person: "sfsfsf"
    },
]
  //console.log(props)
  return (
    <Fragment>
      <div className="table-responsive mailbox-messages">
        <table className="table table-hover table-striped">
          <tbody>
            <tr>
              <td>
                <div className="icheck-primary">
                  <input type="checkbox" defaultValue id="check1" />
                  <label htmlFor="check1" />
                </div>
              </td>
              <td className="mailbox-date">{data[0].date}</td>
              <td className="mailbox-subject">
                <b>{data[0].title}</b>
              </td>
              <td className="mailbox-name">
                <a href="read-mail.html">{data[0].person}</a>
              </td>
            </tr>
          </tbody>
        </table>
        {/* /.table */}
      </div>
    </Fragment>
  );
};
export default List;
