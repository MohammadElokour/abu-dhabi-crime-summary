export default function MapCustomControls({
  leftControls,
  rightControls,
  bottomControls,
  topControls,
}: {
  leftControls?: React.ReactNode;
  rightControls?: React.ReactNode;
  bottomControls?: React.ReactNode;
  topControls?: React.ReactNode;
}) {
  return (
    <div
      className="absolute right-0 top-0 z-10 pointer-events-none p-2 size-full grid grid-areas-mapControls grid-cols-mapControls grid-rows-mapControls gap-2 
        child:z-10 child:flex child:gap-2 child:p-2"
    >
      <div className="grid-in-left flex-col">{leftControls}</div>
      <div className="grid-in-right flex-col items-end">{rightControls}</div>
      <div className="grid-in-center" />
      <div className="grid-in-bottom flex-row">{bottomControls}</div>
      <div className="grid-in-top flex-row">{topControls}</div>
    </div>
  );
}
