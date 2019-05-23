import { connect } from 'react-redux'
import * as actions from '../actions';
import UpdateEvent from '../components/Updateevent';

const mapStateToProps = (state) => {
    return {
        editing : state.editing,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editEvent : (id, event) => dispatch(actions.editEvent(id, event))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateEvent);