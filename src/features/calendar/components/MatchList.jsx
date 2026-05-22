import MatchListItem from "./MatchListItem";

export default function MatchList({
  matches,
  selectedMatch,
  setSelectedMatch,
}) {

  return (
    <div className="
      bg-white/5
      rounded-xl
      p-1
      h-full
      min-h-0
      flex
      flex-col
    ">

      <h2 className="
        text-md
        font-semibold
        mb-2
      ">
        Calendar
      </h2>

      <div className="
        space-y-2
        overflow-y-auto
        flex-1
        min-h-0">

        {matches.map((match) => (

          <MatchListItem
            key={match.id}
            match={match}
            selected={
              selectedMatch?.id === match.id
            }
            onClick={() =>
              setSelectedMatch(match)
            }
          />

        ))}

      </div>

    </div>
  );
}