import StarterRosterWidget from "../widgets/StarterRosterWidget";
import UpcomingMatchWidget from "../widgets/UpcomingMatchWidget";
import RecentResultsWidget from "../widgets/RecentResultsWidget";
import StandingsWidget from "../widgets/StandingsWidget";

export default function HubPage() {

  return (

    <div className="
      grid
      grid-cols-12
      grid-rows-8
      gap-4
      h-full
    ">

      {/* 🟦 ROSTER */}
      <div className="col-span-8 row-span-2">
        <StarterRosterWidget />
      </div>

      {/* 🟩 UPCOMING MATCH */}
      <div className="col-span-4 row-span-2">
        <UpcomingMatchWidget />
      </div>

      {/* 🟥 RECENT RESULTS */}
      <div className="col-span-12 row-span-1">
        <RecentResultsWidget />
      </div>

      {/* 🟨 STANDINGS */}
      <div className="col-span-12 row-span-5">
        <StandingsWidget />
      </div>

    </div>
  );
}