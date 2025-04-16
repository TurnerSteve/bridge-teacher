import { useGlobalData } from '@/context/DataContextProvider';
import { exportDeals } from '@/lib/bridge/utils/exportDeals';

const ExportDeals = () => {
  const { storedDeals } = useGlobalData(); 

  const handleExport = (format: 'JSON' | 'CSV' | 'TEXT' | 'XML' | 'PBN' | 'LIN') => {
    let output = '';
    switch (format) {
      case 'JSON':
        output = exportDeals.toJSON(storedDeals);
        break;
      case 'CSV':
        output = exportDeals.toCSV(storedDeals);
        break;
      case 'TEXT':
        output = exportDeals.toTEXT(storedDeals);
        break;
      case 'XML':
        output = exportDeals.toXML(storedDeals);
        break;
      case 'PBN':
        output = exportDeals.toPBN(storedDeals);
        break;
      case 'LIN':
        output = exportDeals.toLIN(storedDeals);
        break;
      default:
        break;
    }
    const blob = new Blob([output], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `deals.${format.toLowerCase()}`;
    a.click();
  };

  return (
    <div>
      <button onClick={() => handleExport('JSON')}>Export as JSON</button>
      <button onClick={() => handleExport('CSV')}>Export as CSV</button>
      <button onClick={() => handleExport('TEXT')}>Export as TEXT</button>
      <button onClick={() => handleExport('XML')}>Export as XML</button>
      <button onClick={() => handleExport('PBN')}>Export as PBN</button>
      <button onClick={() => handleExport('LIN')}>Export as LIN</button>
    </div>
  );
};

export default ExportDeals;