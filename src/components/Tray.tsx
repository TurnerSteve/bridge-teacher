
import { getTrayInfo, LookupEntry } from '@/lib/bridge/utils';
import { Card, CardHeader } from './ui/card';

interface TrayProps {
    boardId: number ;
  }

function TrayComponent({boardId} : TrayProps) {

   const board : LookupEntry  = getTrayInfo(boardId) ;

;  return (
    <Card className="w-full px-5">
        <CardHeader className="h-5">The Dealing Tray</CardHeader>
        <Card className="h-6 pl-4 justify-center">Board [{boardId}]</Card>
        <Card className="h-6 pl-5 justify-center">Dealer [{board?.dealer}]</Card>
        <Card className="h-6 pl-4 justify-center">Vulnerable [{board?.vulnerability}]</Card>
    </Card>
  )
}

export default TrayComponent