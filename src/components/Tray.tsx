import { getTrayInfo , LookupEntry} from '@/bridge/utils';
import { Card, CardHeader } from './ui/card';

interface TrayProps {
    boardId: number;
  }

function TrayComponent({boardId} : TrayProps) {

   const board : LookupEntry | undefined = getTrayInfo(boardId % 16) ;

;  return (
    <Card className="w-full pl-2 pr-2">
        <CardHeader className="h-5">The Dealing Tray</CardHeader>
        <Card className="h-6 pl-2 justify-center">Board [{boardId}]</Card>
        <Card className="h-6 pl-2 justify-center">Dealer [{board?.dealer}]</Card>
        <Card className="h-6 pl-2 justify-center">Vulnerable [{board?.vulnerability}]</Card>
    </Card>
  )
}

export default TrayComponent