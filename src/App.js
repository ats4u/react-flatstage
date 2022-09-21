import './styles.css';
import { Button } from 'react-bootstrap';
import React from 'react';
import ReactStage from 'react-flatstage';
import { CommonDialog } from 'react-flatstage/CommonDialog';

function ProcCancel(props) {
  return <CommonDialog>You cancelled the question.</CommonDialog>;
}

function ProcRedDogs(props) {
  return <CommonDialog>You like red dogs!</CommonDialog>;
}
function ProcBlueDogs(props) {
  return <CommonDialog>You like blue dogs!</CommonDialog>;
}
function ProcDogs(props) {
  return (
    <CommonDialog
      onRed={{ next: <ProcRedDogs /> }}
      onBlue={{ next: <ProcBlueDogs /> }}
      onCancel={<ProcCancel />}
    >
      Do you like red dogs? or blue dogs?
    </CommonDialog>
  );
}
function ProcRedCats(props) {
  return <CommonDialog>You like red cats!</CommonDialog>;
}
function ProcBlueCats(props) {
  return <CommonDialog>You like blue cats!</CommonDialog>;
}
function ProcCats(props) {
  return (
    <CommonDialog onRed={<ProcRedCats />} onBlue={<ProcBlueCats />}>
      Do you like red cats? or blue cats?
    </CommonDialog>
  );
}

export default function App() {
  const Stage = ReactStage.useNewStage();
  return (
    <div className="App">
      <Button
        onClick={() =>
          Stage.set(
            <CommonDialog
              onDogs={{
                caption: 'Dogs',
                next: <ProcDogs />,
                variant: 'secondary',
              }}
              onCats={{ caption: 'Cats', next: <ProcCats /> }}
            >
              Do you like dogs or cats?
            </CommonDialog>
          )
        }
      >
        Start Dialog
      </Button>
      <Stage />
    </div>
  );
}

