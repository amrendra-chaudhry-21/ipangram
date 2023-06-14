import React, { useMemo, useState } from "react";
import Day from "./Day";
import spacetime from "spacetime";
export default function Month({ month }) {
  const [tz, setTz] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [datetime, setDatetime] = useState(spacetime.now());

  useMemo(() => {
    const tzValue = tz.value ?? tz;
    setDatetime(datetime.goto(tzValue));
  }, [tz]);

  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {/* {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))} */}
      <table class="table table-striped">
        <thead></thead>
        <tbody>
          <tr className="col-md-3">
            <th scope="col">
              Mon
              <span>
                <pre>{datetime.unixFmt("dd/MM")}</pre>
              </span>{" "}
            </th>
            <input type="checkbox" />
            8:00 AM
            <input type="checkbox" />
            8:30 AM
            <input type="checkbox" />
            9:00 AM
            <input type="checkbox" />
            9:30 AM
            <input type="checkbox" />
            10:00 AM
            <input type="checkbox" />
            10:30 AM
            <input type="checkbox" />
            11:00 AM
            <input type="checkbox" />
            11:30 AM
            <input type="checkbox" />
            12:00 PM
            <input type="checkbox" />
            12:30 PM
            <input type="checkbox" />
            1:00 PM
            <input type="checkbox" />
            1:30 PM
            <input type="checkbox" />
            2:00 PM
            <input type="checkbox" />
            2:30 PM
            <input type="checkbox" />
            3:00 PM
            <input type="checkbox" />
            3:30 PM
            <input type="checkbox" />
            4:00 PM
            <input type="checkbox" />
            4:30 PM
            <input type="checkbox" />
            5:00 PM
            <input type="checkbox" />
            5:30 PM
            <input type="checkbox" />
            6:00 PM
            <input type="checkbox" />
            6:30 PM
            <input type="checkbox" />
            7:00 PM
            <input type="checkbox" />
            7:30 PM
            <input type="checkbox" />
            8:00 PM
            <input type="checkbox" />
            8:30 PM
            <input type="checkbox" />
            9:00 PM
            <input type="checkbox" />
            9:30 PM
            <input type="checkbox" />
            10:00 PM
            <input type="checkbox" />
            10:30 PM
            <input type="checkbox" />
            11:00 PM
          </tr>

          <tr>
            <th scope="row">
              Tue
              <span>
                <pre>{datetime.unixFmt("dd/MM")}</pre>
              </span>
            </th>
            <input type="checkbox" />
            8:00 AM
            <input type="checkbox" />
            8:30 AM
            <input type="checkbox" />
            9:00 AM
            <input type="checkbox" />
            9:30 AM
            <input type="checkbox" />
            10:00 AM
            <input type="checkbox" />
            10:30 AM
            <input type="checkbox" />
            11:00 AM
            <input type="checkbox" />
            11:30 AM
            <input type="checkbox" />
            12:00 PM
            <input type="checkbox" />
            12:30 PM
            <input type="checkbox" />
            1:00 PM
            <input type="checkbox" />
            1:30 PM
            <input type="checkbox" />
            2:00 PM
            <input type="checkbox" />
            2:30 PM
            <input type="checkbox" />
            3:00 PM
            <input type="checkbox" />
            3:30 PM
            <input type="checkbox" />
            4:00 PM
            <input type="checkbox" />
            4:30 PM
            <input type="checkbox" />
            5:00 PM
            <input type="checkbox" />
            5:30 PM
            <input type="checkbox" />
            6:00 PM
            <input type="checkbox" />
            6:30 PM
            <input type="checkbox" />
            7:00 PM
            <input type="checkbox" />
            7:30 PM
            <input type="checkbox" />
            8:00 PM
            <input type="checkbox" />
            8:30 PM
            <input type="checkbox" />
            9:00 PM
            <input type="checkbox" />
            9:30 PM
            <input type="checkbox" />
            10:00 PM
            <input type="checkbox" />
            10:30 PM
            <input type="checkbox" />
            11:00 PM
          </tr>
          <tr>
            <th scope="row">
              Wed
              <span>
                <pre>{datetime.unixFmt("dd/MM")}</pre>
              </span>
            </th>
            <input type="checkbox" />
            8:00 AM
            <input type="checkbox" />
            8:30 AM
            <input type="checkbox" />
            9:00 AM
            <input type="checkbox" />
            9:30 AM
            <input type="checkbox" />
            10:00 AM
            <input type="checkbox" />
            10:30 AM
            <input type="checkbox" />
            11:00 AM
            <input type="checkbox" />
            11:30 AM
            <input type="checkbox" />
            12:00 PM
            <input type="checkbox" />
            12:30 PM
            <input type="checkbox" />
            1:00 PM
            <input type="checkbox" />
            1:30 PM
            <input type="checkbox" />
            2:00 PM
            <input type="checkbox" />
            2:30 PM
            <input type="checkbox" />
            3:00 PM
            <input type="checkbox" />
            3:30 PM
            <input type="checkbox" />
            4:00 PM
            <input type="checkbox" />
            4:30 PM
            <input type="checkbox" />
            5:00 PM
            <input type="checkbox" />
            5:30 PM
            <input type="checkbox" />
            6:00 PM
            <input type="checkbox" />
            6:30 PM
            <input type="checkbox" />
            7:00 PM
            <input type="checkbox" />
            7:30 PM
            <input type="checkbox" />
            8:00 PM
            <input type="checkbox" />
            8:30 PM
            <input type="checkbox" />
            9:00 PM
            <input type="checkbox" />
            9:30 PM
            <input type="checkbox" />
            10:00 PM
            <input type="checkbox" />
            10:30 PM
            <input type="checkbox" />
            11:00 PM
          </tr>
          <tr>
            <th scope="row">
              Thr
              <span>
                <pre>{datetime.unixFmt("dd/MM")}</pre>
              </span>
            </th>
            <input type="checkbox" />
            8:00 AM
            <input type="checkbox" />
            8:30 AM
            <input type="checkbox" />
            9:00 AM
            <input type="checkbox" />
            9:30 AM
            <input type="checkbox" />
            10:00 AM
            <input type="checkbox" />
            10:30 AM
            <input type="checkbox" />
            11:00 AM
            <input type="checkbox" />
            11:30 AM
            <input type="checkbox" />
            12:00 PM
            <input type="checkbox" />
            12:30 PM
            <input type="checkbox" />
            1:00 PM
            <input type="checkbox" />
            1:30 PM
            <input type="checkbox" />
            2:00 PM
            <input type="checkbox" />
            2:30 PM
            <input type="checkbox" />
            3:00 PM
            <input type="checkbox" />
            3:30 PM
            <input type="checkbox" />
            4:00 PM
            <input type="checkbox" />
            4:30 PM
            <input type="checkbox" />
            5:00 PM
            <input type="checkbox" />
            5:30 PM
            <input type="checkbox" />
            6:00 PM
            <input type="checkbox" />
            6:30 PM
            <input type="checkbox" />
            7:00 PM
            <input type="checkbox" />
            7:30 PM
            <input type="checkbox" />
            8:00 PM
            <input type="checkbox" />
            8:30 PM
            <input type="checkbox" />
            9:00 PM
            <input type="checkbox" />
            9:30 PM
            <input type="checkbox" />
            10:00 PM
            <input type="checkbox" />
            10:30 PM
            <input type="checkbox" />
            11:00 PM
          </tr>
          <tr>
            <th scope="row">
              Fri
              <span>
                <pre>{datetime.unixFmt("dd/MM")}</pre>
              </span>
            </th>
            <input type="checkbox" />
            8:00 AM
            <input type="checkbox" />
            8:30 AM
            <input type="checkbox" />
            9:00 AM
            <input type="checkbox" />
            9:30 AM
            <input type="checkbox" />
            10:00 AM
            <input type="checkbox" />
            10:30 AM
            <input type="checkbox" />
            11:00 AM
            <input type="checkbox" />
            11:30 AM
            <input type="checkbox" />
            12:00 PM
            <input type="checkbox" />
            12:30 PM
            <input type="checkbox" />
            1:00 PM
            <input type="checkbox" />
            1:30 PM
            <input type="checkbox" />
            2:00 PM
            <input type="checkbox" />
            2:30 PM
            <input type="checkbox" />
            3:00 PM
            <input type="checkbox" />
            3:30 PM
            <input type="checkbox" />
            4:00 PM
            <input type="checkbox" />
            4:30 PM
            <input type="checkbox" />
            5:00 PM
            <input type="checkbox" />
            5:30 PM
            <input type="checkbox" />
            6:00 PM
            <input type="checkbox" />
            6:30 PM
            <input type="checkbox" />
            7:00 PM
            <input type="checkbox" />
            7:30 PM
            <input type="checkbox" />
            8:00 PM
            <input type="checkbox" />
            8:30 PM
            <input type="checkbox" />
            9:00 PM
            <input type="checkbox" />
            9:30 PM
            <input type="checkbox" />
            10:00 PM
            <input type="checkbox" />
            10:30 PM
            <input type="checkbox" />
            11:00 PM
          </tr>
        </tbody>
      </table>
    </div>
  );
}
