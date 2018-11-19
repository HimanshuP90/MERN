import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Alert } from 'reactstrap';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItems } from '../actions/itemActions';
import { PropTypes } from 'prop-types';

class ShoppingList extends Component {
    state = {
        message: ''
    }
    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = id => {
        this.props.deleteItems(id).then(res => this.setState({message: res.data.message}));
    }
    render(){
        const { items } = this.props.item;
        const { message } = this.state;
        return(
            <Container>
                <Alert color="success" style={message ? {display: 'block'} : {display: 'none'}}>
                    {message}
                </Alert>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >&times;</Button>
                                    {name} 
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item,
});

export default connect(
    mapStateToProps,
    {   getItems, deleteItems}
)(ShoppingList);