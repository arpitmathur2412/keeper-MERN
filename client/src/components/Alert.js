import Alert from 'react-bootstrap/Alert';

function Alerts(props){
    return(
        <Alert key={'primary'} variant={props.alert.variant}>
        {props.alert.message}
      </Alert>
    )
}

export default Alerts;