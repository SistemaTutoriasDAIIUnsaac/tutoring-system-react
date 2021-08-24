import React, { Fragment } from "react";
import { useEffect } from "react";

const News = ( {data} ) => {

  // console.log(data)
  //const { date, title, person } = props;


  useEffect(() => {
    console.log("asdf")
    console.log(data)
  }, [])

  return (
    <Fragment>
      <div className="table-responsive mailbox-messages">
        <table className="table table-hover table-striped">
          <thead>
            <td style={{width: "10%"}}></td>
            <td style={{width: "30%"}}></td>
            <td style={{width: "30%"}}></td>
            <td style={{width: "30%"}}></td>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="icheck-primary">
                  <input type="checkbox" defaultValue id="check1" />
                  <label htmlFor="check1" />
                </div>
              </td>
              <td className="mailbox-date">{data.date}</td>
              <td className="mailbox-subject">
                <b>{data.title}</b>
              </td>
              <td className="mailbox-name">
                <a href="read-mail.html">{data.person}</a>
              </td>
            </tr>
          </tbody>
        </table>
        {/* /.table */}
      </div>
    </Fragment>
  );
};
export default News;
