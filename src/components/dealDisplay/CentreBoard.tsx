import { getTrayInfo, LookupEntry } from "@/lib/bridge/utils";
import { Vulnerability , Direction} from "@/types/cards";


type Props = {
  boardId : number; // The current dealer
  size? : number ; //Size of the SVG in pixels (default: 100)
};

export function CentreBoard(props: Props) {
  const { boardId , size = 100} = props;

  const board: LookupEntry = getTrayInfo(boardId);
  const vul = board.vulnerability;
  const dealer = board.dealer;

  const fontSize = 20; // Font for central number
  const centerX = 50; // SVG width center
  const centerY = 50; // sVG height center

  // Determine arrow visibility and color based on dealer and vulnerability
  const getArrow = () => {
    const color =
      (dealer === Direction.NORTH || dealer === Direction.SOUTH) &&
      (vul === Vulnerability.NS || vul === Vulnerability.ALL)
        ? "red"
        : (dealer === Direction.EAST || dealer === Direction.WEST) &&
          (vul === Vulnerability.EW || vul === Vulnerability.ALL)
        ? "red"
        : "green";

    const arrowProps = {
      stroke: color,
      fill: color,
      strokeWidth: 2,
    };

    switch (dealer) {
      case Direction.NORTH : return <polygon points="50,12 70,25 30,25" {...arrowProps} />;
      case Direction.EAST  : return <polygon points="88,50 75,30 75,70" {...arrowProps} />;
      case Direction.SOUTH : return <polygon points="50,88 70,75 30,75" {...arrowProps} />;
      case Direction.WEST  : return <polygon points="12,50 25,30 25,70" {...arrowProps} />;
      default:
        return null;
    }
  };

  // Determine the perimeter color and text based on vulnerability
  const getPerimeter = () => {
    const nsColor =
      vul === Vulnerability.NS || vul === Vulnerability.ALL ? "red" : "green";
    const ewColor =
      vul === Vulnerability.EW || vul === Vulnerability.ALL ? "red" : "green";

    return (
      <>
        {/* North and South Perimeters */}
        <rect x="0" y="0" width="100" height="10" fill={nsColor} />
        <rect x="0" y="90" width="100" height="10" fill={nsColor} />
        {dealer === Direction.NORTH && (
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
        {dealer === Direction.SOUTH && (
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
        {dealer === Direction.EAST && (
          <text
            x="95"
            y="50"
            fill="white"
            fontSize="8"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"           
            transform="rotate(90, 95, 50)"
          >
            DEALER
          </text>
        )}
        {dealer === Direction.WEST && (
          <text
            x="5"
            y="50"
            fill="white"
            fontSize="8"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"  
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
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Perimeter */}
      {getPerimeter()}

      {/* Central Number */}
      <text
        x={centerX}
        y={centerY + fontSize / 3}
        fill="black"
        fontSize={fontSize}
        fontWeight="bold"
        textAnchor="middle"
      >
        {boardId}
      </text>

      {/* Arrow */}
      {getArrow()}
    </svg>
  );
}
