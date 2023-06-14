import dayjs from "dayjs";
import React, { useContext ,useMemo,useState} from "react";
import GlobalContext from "../context/GlobalContext";
import spacetime from "spacetime";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const [tz, setTz] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const [datetime, setDatetime] = useState(spacetime.now());
  useMemo(() => {
    const tzValue = tz.value ?? tz;
    setDatetime(datetime.goto(tzValue));
  }, [tz]);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 flex items-centern border-rose-600">
      <nav className="navbar navbar-expand-lg navbar-light bg-light border border-danger">
        <a className="navbar-brand" href="#">
          <button
            onClick={handleReset}
            className="border rounded py-2 px-4 mr-5"
          >
            Today
          </button>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <span class="sr-only"></span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <button onClick={handlePrevMonth}>
                  <span className="material-icons-outlined cursor-pointer text-green-600 mx-2">
                    chevron_left
                  </span>
                </button>
              </a>
            </li>

            <li className="nav-item right">
              <a className="nav-link" href="#">
                <button onClick={handleNextMonth}>
                  <span className="material-icons-outlined cursor-pointer text-green-600 mx-2">
                    chevron_right
                  </span>
                </button>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                <h2 className="ml-4 text-xl text-gray-500 font-bold">
                { datetime.unixFmt("dd")} {dayjs (new Date(dayjs().year(), monthIndex)).format(
                    "MMMM YYYY"
                  )}
                  
                </h2>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    
    </header>
  );
}
