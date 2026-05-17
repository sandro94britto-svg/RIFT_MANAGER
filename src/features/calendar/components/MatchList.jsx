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
      p-4
      h-full
      overflow-y-auto
    ">

      <h2 className="
        text-lg
        font-semibold
        mb-4
      ">
        Calendar
      </h2>

      <div className="space-y-2">

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