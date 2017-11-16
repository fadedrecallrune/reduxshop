import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { getItems, getTotal, removeFromCart } from '../reducers/cart';

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        total: getTotal(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);