import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import React from "react";
import ReactStage from "react-flatstage";

export function CommonDialog(props) {
  const [show, setShow] = React.useState(true);
  const Stage = ReactStage.useStage();
  const [nextComponent, setNextComponent] = React.useState(null);
  function procHide() {
    setShow(false);
  }
  function onExited() {
    Stage.set(nextComponent);
    props.onHide && props.onHide();
  }
  return (
    <>
      <Modal show={show} onHide={procHide} onExited={onExited}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          {Object.entries(props)
            .filter((arr) => arr[0].match(/^on/))
            .map(([k, v]) => (
              <Button
                key={v.caption ?? k}
                variant={v.variant ?? "primary"}
                onClick={() => {
                  if (React.isValidElement(v)) {
                    setNextComponent(v);
                  } else {
                    setNextComponent(v.next);
                  }
                  procHide();
                }}
              >
                {k.trim().substring(2)}
              </Button>
            ))}
        </Modal.Footer>
      </Modal>
    </>
  );
}

