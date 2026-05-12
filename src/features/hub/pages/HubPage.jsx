import StarterRosterWidget from "../widgets/StarterRosterWidget";
import UpcomingMatchWidget from "../widgets/UpcomingMatchWidget";
import RecentFormWidget from "../widgets/RecentFormWidget";
import RecentResultsWidget from "../widgets/RecentResultsWidget";
import StandingsWidget from "../widgets/StandingsWidget";

export default function HubPage() {

  return (
    <div className="
      grid
      grid-cols-3
      gap-6
      h-full
    ">

      {/* LEFT COLUMN */}
      <div className="
        col-span-2
        flex
        flex-col
        gap-6
      ">

        <div className="h-[260px]">
          <StarterRosterWidget />
        </div>

        <RecentFormWidget />

        <div className="flex-1">
          <RecentResultsWidget />
        </div>

      </div>

      {/* RIGHT COLUMN */}
      <div className="h-full">

        <UpcomingMatchWidget />

      </div>

      {/* BOTTOM */}
      <div className="col-span-3 h-[320px]">

        <StandingsWidget />

      </div>

    </div>
  );
}