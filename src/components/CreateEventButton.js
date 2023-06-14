
import React, { useMemo, useState } from "react";
import spacetime from "spacetime";
import TimezoneSelect, { allTimezones } from "react-timezone-select";
import "../App.css"

export default function App() {
  const [tz, setTz] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [datetime, setDatetime] = useState(spacetime.now());

  useMemo(() => {
    const tzValue = tz.value ?? tz;
    setDatetime(datetime.goto(tzValue));
  }, [tz]);

  return (
    <div className="App">
      <div className="w-100 p-3">
      <h4 className="color"> TimeZone</h4>
      
        <TimezoneSelect
          value={tz}
          onChange={setTz}
          labelStyle="altName"
          timezones={{
            ...allTimezones,
            "America/Lima": "Pittsburgh",
            "Europe/Berlin": "Frankfurt"
          }}
        />
      </div>
      
    </div>
    
  );
}

