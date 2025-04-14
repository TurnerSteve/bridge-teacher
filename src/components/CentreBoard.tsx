import { Dealer, Vulnerability } from "@/bridge/types/enums";
import { getTrayInfo, LookupEntry } from "@/bridge/utils";

type Props = {
  boardId: number; // The current dealer
};

export function CentreBoard(props: Props) {
  const { boardId } = props;

  const board: LookupEntry = getTrayInfo(boardId);
  const vul = board.vulnerability;
  const dealer = board.dealer;

  console.log(`The Centre board ${boardId} = ${vul} ${dealer}`);

  // Determine arrow visibility and color based on dealer and vulnerability
  const getArrow = () => {
    const color =
      (dealer === Dealer.North || dealer === Dealer.South) &&
      (vul === Vulnerability.NS || vul === Vulnerability.Both)
        ? "red"
        : (dealer === Dealer.East || dealer === Dealer.West) &&
          (vul === Vulnerability.EW || vul === Vulnerability.Both)
        ? "red"
        : "green";

    const arrowProps = {
      stroke: color,
      fill: "none",
      strokeWidth: 2,
    };

    switch (dealer) {
      case Dealer.North:
        return <polygon points="50,10 60,30 40,30" {...arrowProps} />;
      case Dealer.East:
        return <polygon points="90,50 70,40 70,60" {...arrowProps} />;
      case Dealer.South:
        return <polygon points="50,90 60,70 40,70" {...arrowProps} />;
      case Dealer.West:
        return <polygon points="10,50 30,40 30,60" {...arrowProps} />;
      default:
        return null;
    }
  };

  // Determine the perimeter color and text based on vulnerability
  const getPerimeter = () => {
    const nsColor =
      vul === Vulnerability.NS || vul === Vulnerability.Both ? "red" : "green";
    const ewColor =
      vul === Vulnerability.EW || vul === Vulnerability.Both ? "red" : "green";

    return (
      <>
        {/* North and South Perimeters */}
        <rect x="0" y="0" width="100" height="10" fill={nsColor} />
        <rect x="0" y="90" width="100" height="10" fill={nsColor} />
        {dealer === Dealer.North && (
          <text
            x="50"
            y="8"
            fill="white"
            fontSize="8"
            fontWeight="bold"
            textAnchor="middle"
          >
            DEALER
          </text>
        )}
        {dealer === Dealer.South && (
          <text
            x="50"
            y="98"
            fill="white"
            fontSize="8"
            fontWeight="bold"
            textAnchor="middle"
          >
            DEALER
          </text>
        )}

        {/* East and West Perimeters */}
        <rect x="90" y="0" width="10" height="100" fill={ewColor} />
        <rect x="0" y="0" width="10" height="100" fill={ewColor} />
        {dealer === Dealer.East && (
          <text
            x="95"
            y="50"
            fill="white"
            fontSize="8"
            fontWeight="bold"
            textAnchor="middle"
            transform="rotate(90, 95, 50)"
          >
            DEALER
          </text>
        )}
        {dealer === Dealer.West && (
          <text
            x="5"
            y="50"
            fill="white"
            fontSize="8"
            fontWeight="bold"
            textAnchor="middle"
            transform="rotate(-90, 5, 50)"
          >
            DEALER
          </text>
        )}
      </>
    );
  };

  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Perimeter */}
      {getPerimeter()}

      {/* Central Number */}
      <text
        x="50"
        y="55"
        fill="black"
        fontSize="30"
        fontWeight="bold"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        {boardId}
      </text>

      {/* Arrow */}
      {getArrow()}
    </svg>
  );
}
